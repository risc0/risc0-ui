import { isFunction } from "radash";
import { type SetStateAction, useRef, useSyncExternalStore } from "react";
import { parseJson } from "../utils/parse-json";

function isNil(val: unknown) {
  return val == null;
}

export type SetValue<T> = (value: SetStateAction<T>) => void;

/**
 * Creating and read here and using window.setItem for writes. This avoids
 * tapping into the react rendering pipeline unnecessarily when it isnt needed
 *
 * @param key the key to use to store
 * @returns the value requested
 */
function readValueFromStorage<T>(key: string) {
  try {
    const item = window.localStorage.getItem(key);
    const value = item && (parseJson(item) as T);

    return value ?? undefined;
  } catch (error) {
    console.warn(`Error reading localStorage key "${key}":`, error);

    return { error: "unable to read value" };
  }
}

type StorageError = {
  error: string;
};

function isError(value: StorageError | any): value is StorageError {
  return !!value?.error;
}

export function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
  const previousValueRef = useRef<T>(initialValue);

  function readValue(): T {
    if (typeof window === "undefined") {
      return initialValue;
    }

    const value = readValueFromStorage<T>(key);
    return isError(value) || isNil(value) || value === "" ? initialValue : (value as T);
  }

  function subscribe(callback: () => void) {
    window.addEventListener("storage", callback);
    return () => {
      window.removeEventListener("storage", callback);
    };
  }

  const storedValue = useSyncExternalStore(subscribe, readValue, () => initialValue);

  function setValue(value: SetStateAction<T>): void {
    if (typeof window === "undefined") {
      console.warn(`Tried setting localStorage key "${key}" even though environment is not a client`);
      return;
    }

    try {
      const newValue = isFunction(value) ? (value as (prevState: T) => T)(previousValueRef.current) : value;

      if (JSON.stringify(newValue) !== JSON.stringify(previousValueRef.current)) {
        window.localStorage.setItem(key, JSON.stringify(newValue));
        previousValueRef.current = newValue;
        window.dispatchEvent(new Event("storage"));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }

  // Update previousValueRef when storedValue changes
  if (JSON.stringify(storedValue) !== JSON.stringify(previousValueRef.current)) {
    previousValueRef.current = storedValue;
  }

  return [storedValue, setValue];
}
