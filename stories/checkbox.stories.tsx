/* c8 ignore start */
import { Checkbox } from "../checkbox";
import { Label } from "../label";

export function Default() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}

export function Disabled() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled" disabled />
      <Label htmlFor="disabled">Disabled checkbox</Label>
    </div>
  );
}

export function WithDescription() {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <Label htmlFor="terms1">Accept terms and conditions</Label>
        <p className="text-muted-foreground text-sm">You agree to our Terms of Service and Privacy Policy.</p>
      </div>
    </div>
  );
}
