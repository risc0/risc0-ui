/* c8 ignore start */
import { Label } from "../label";
import { RadioGroup, RadioGroupItem } from "../radio-group";

export function Default() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  );
}

export function Disabled() {
  return (
    <RadioGroup defaultValue="default" disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r4" />
        <Label htmlFor="r4">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r5" />
        <Label htmlFor="r5">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r6" />
        <Label htmlFor="r6">Compact</Label>
      </div>
    </RadioGroup>
  );
}
