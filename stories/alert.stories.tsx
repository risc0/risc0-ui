/* c8 ignore start */
import { RocketIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../alert";

export function Default() {
  return (
    <Alert>
      <RocketIcon className="size-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  );
}

export function Destructive() {
  return (
    <Alert variant="destructive">
      <RocketIcon className="size-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
    </Alert>
  );
}

export function WithoutIcon() {
  return (
    <Alert>
      <AlertTitle>Note</AlertTitle>
      <AlertDescription>This is a simple alert without an icon.</AlertDescription>
    </Alert>
  );
}
