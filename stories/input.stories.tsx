/* c8 ignore start */
import { Input } from "../input";

export function Default() {
  return <Input placeholder="Default input" />;
}

export function Disabled() {
  return <Input disabled placeholder="Disabled input" />;
}

export function WithLabel() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label htmlFor="email">Email</label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  );
}
