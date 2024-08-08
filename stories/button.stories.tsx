/* c8 ignore start */
import { Button, type ButtonProps } from "button";
import { Label } from "label";
import { RocketIcon } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "radio-group";
import { useState } from "react";

export const All = () => {
  const [variant, setVariant] = useState<ButtonProps["variant"]>("default");

  return (
    <>
      <RadioGroup
        // @ts-expect-error
        onValueChange={setVariant}
        defaultValue="default"
        className="mb-8 flex flex-row gap-8"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="secondary" id="r2" />
          <Label htmlFor="r2">Secondary</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="destructive" id="r3" />
          <Label htmlFor="r3">Destructive</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="outline" id="r4" />
          <Label htmlFor="r4">Outline</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="ghost" id="r5" />
          <Label htmlFor="r5">Ghost</Label>
        </div>
      </RadioGroup>

      <div className="flex flex-col items-start gap-8">
        <div className="flex flex-row gap-5">
          <Button variant={variant} size="sm">
            Small
          </Button>

          <Button startIcon={<RocketIcon />} variant={variant} size="sm">
            With Start Icon
          </Button>

          <Button endIcon={<RocketIcon />} variant={variant} size="sm">
            With End Icon
          </Button>

          <Button variant={variant} size="sm" isLoading>
            Loading
          </Button>

          <Button variant={variant} size="sm" disabled>
            Disabled
          </Button>

          <Button variant={variant} isLoading size="sm" disabled>
            Disabled Loading
          </Button>
        </div>

        <div className="flex flex-row gap-5">
          <Button variant={variant} size="default">
            Medium
          </Button>

          <Button startIcon={<RocketIcon />} variant={variant} size="default">
            With Start Icon
          </Button>

          <Button endIcon={<RocketIcon />} variant={variant} size="default">
            With End Icon
          </Button>

          <Button variant={variant} size="default" isLoading>
            Loading
          </Button>

          <Button variant={variant} size="default" disabled>
            Disabled
          </Button>

          <Button variant={variant} isLoading size="default" disabled>
            Disabled Loading
          </Button>
        </div>

        <div className="flex flex-row gap-5">
          <Button variant={variant} size="lg">
            Large
          </Button>

          <Button startIcon={<RocketIcon />} variant={variant} size="lg">
            With Start Icon
          </Button>

          <Button endIcon={<RocketIcon />} variant={variant} size="lg">
            With End Icon
          </Button>

          <Button variant={variant} size="lg" isLoading>
            Loading
          </Button>

          <Button variant={variant} size="lg" disabled>
            Disabled
          </Button>

          <Button variant={variant} isLoading size="lg" disabled>
            Disabled Loading
          </Button>
        </div>
      </div>
    </>
  );
};

export const IconButtons = () => {
  const [variant, setVariant] = useState<ButtonProps["variant"]>("default");

  return (
    <>
      <RadioGroup
        // @ts-expect-error
        onValueChange={setVariant}
        defaultValue="default"
        className="mb-8 flex flex-row gap-8"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="secondary" id="r2" />
          <Label htmlFor="r2">Secondary</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="destructive" id="r3" />
          <Label htmlFor="r3">Destructive</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="outline" id="r4" />
          <Label htmlFor="r4">Outline</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="ghost" id="r5" />
          <Label htmlFor="r5">Ghost</Label>
        </div>
      </RadioGroup>

      <div className="flex flex-col items-start gap-8">
        <div className="flex flex-row gap-5">
          <Button startIcon={<RocketIcon />} variant={variant} size="icon-sm" />

          <Button startIcon={<RocketIcon />} variant={variant} size="icon-sm" isLoading />

          <Button startIcon={<RocketIcon />} variant={variant} size="icon-sm" disabled />

          <Button startIcon={<RocketIcon />} variant={variant} isLoading size="icon-sm" disabled />
        </div>

        <div className="flex flex-row gap-5">
          <Button startIcon={<RocketIcon />} variant={variant} size="icon" />

          <Button startIcon={<RocketIcon />} variant={variant} size="icon" isLoading />

          <Button startIcon={<RocketIcon />} variant={variant} size="icon" disabled />

          <Button startIcon={<RocketIcon />} variant={variant} isLoading size="icon" disabled />
        </div>
      </div>
    </>
  );
};
