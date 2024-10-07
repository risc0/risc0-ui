/* c8 ignore start */
import { Rocket, RocketIcon, RockingChair } from "lucide-react";
import { useState } from "react";
import { Button } from "../button";

export function Default() {
  return <Button>Default Button</Button>;
}

export function Variants() {
  return (
    <div className="flex space-x-2">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  );
}

export function Sizes() {
  return (
    <div className="flex items-center space-x-2">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}

export function WithIcon() {
  return (
    <div className="flex space-x-2">
      <Button startIcon={<RocketIcon className="h-4 w-4" />}>Start Icon</Button>
      <Button endIcon={<RocketIcon className="h-4 w-4" />}>End Icon</Button>
    </div>
  );
}

export function Loading() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoading3, setIsLoading3] = useState(false);

  return (
    <div className="flex space-x-2">
      <Button isLoading={isLoading} onClick={() => setIsLoading(!isLoading)}>
        Loading (click me)
      </Button>
      <Button startIcon={<RocketIcon />} isLoading={isLoading2} onClick={() => setIsLoading2(!isLoading2)}>
        Loading (click me)
      </Button>
      <Button
        size="icon"
        startIcon={<RocketIcon />}
        isLoading={isLoading3}
        onClick={() => setIsLoading3(!isLoading3)}
      />
    </div>
  );
}

export function Disabled() {
  return <Button disabled>Disabled</Button>;
}
