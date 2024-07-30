import { Alert, AlertDescription, AlertTitle } from "alert";
import { RocketIcon } from "lucide-react";

export const Default = () => (
  <Alert>
    <RocketIcon className="size-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>You can add components to your app using the cli.</AlertDescription>
  </Alert>
);

export const Destructive = () => (
  <Alert variant="destructive">
    <RocketIcon className="size-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>You can add components to your app using the cli.</AlertDescription>
  </Alert>
);
