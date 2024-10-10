import type { SafeReturn } from "p-safe";

export class ActionError extends Error {
  override name = "ActionError";
  constructor(
    public code: string,
    message: string,
  ) {
    super(message);
    Error.captureStackTrace(this, ActionError);
  }

  toPlain(): ActionErrorPlain {
    return {
      code: this.code,
      message: this.message,
    };
  }
}

export interface ActionErrorPlain {
  code: string;
  message: string;
}

type AnyFunc<This = void> = (this: This, ...args: readonly any[]) => unknown;

type ActionFunc<T> = T extends (...args: infer Args) => infer Return
  ? (this: any, ...args: Args) => Promise<SafeReturn<Awaited<Return>, ActionError>>
  : never;

interface ActionContext<Return> {
  resolve: (result: Return) => never;
  reject: (error: ActionErrorPlain | ActionError) => never;
}

class Action<Return> {
  #fn: AnyFunc<ActionContext<any>>;

  constructor(fn: AnyFunc<ActionContext<any>>) {
    this.#fn = fn;
  }

  resolve(result: Return): never {
    throw { data: result };
  }

  reject(reason: ActionErrorPlain | ActionError): never {
    throw reason;
  }

  /** @internal */
  async run(...arguments_: any[]) {
    try {
      const result_ = await this.#fn.apply(this, arguments_); // eslint-disable-line prefer-spread
      if (result_ !== undefined) {
        return { data: result_ };
      }
      return { data: void 0 };
    } catch (e) {
      if (!!e && typeof e === "object" && "data" in e) {
        return e;
      }
      if (e instanceof ActionError) {
        return { error: e.toPlain() };
      }
      if (!!e && typeof e === "object" && "code" in e && "message" in e) {
        return { error: { code: e.code, message: e.message } };
      }
      throw e;
    }
  }
}

export function createAction<T extends AnyFunc<ActionContext<any>>>(fn: T): ActionFunc<T> {
  const action = new Action<T>(fn);

  return new Proxy(fn as any, {
    apply: (_target, _thisArg, argumentsList) => {
      return action.run(...argumentsList);
    },
  });
}

export function actionError(code: string, message: string): never {
  const e = new ActionError(code, message);
  Error.captureStackTrace(e, actionError);
  throw e;
}

export type { Action };
