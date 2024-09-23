/* c8 ignore start */
import { RocketIcon } from "lucide-react";
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
      <Button startIcon={<RocketIcon className="mr-2 h-4 w-4" />}>Start Icon</Button>
      <Button endIcon={<RocketIcon className="ml-2 h-4 w-4" />}>End Icon</Button>
    </div>
  );
}

export function Loading() {
  return <Button isLoading>Loading</Button>;
}

export function Disabled() {
  return <Button disabled>Disabled</Button>;
}
