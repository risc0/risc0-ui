/* c8 ignore start */
import React from "react";
import { Label } from "../label";
import { Switch } from "../switch";

export function Default() {
  return <Switch />;
}

export function WithLabel() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}

export function Disabled() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="disabled" disabled />
      <Label htmlFor="disabled">Disabled</Label>
    </div>
  );
}
