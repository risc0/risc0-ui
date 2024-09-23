/* c8 ignore start */
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabs";

export function Default() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
}

export function WithContent() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p>Make changes to your account here.</p>
        <div className="mt-4">
          <label htmlFor="name" className="block font-medium text-gray-700 text-sm">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="John Doe"
          />
        </div>
      </TabsContent>
      <TabsContent value="password">
        <p>Change your password here.</p>
        <div className="mt-4">
          <label htmlFor="new-password" className="block font-medium text-gray-700 text-sm">
            New Password
          </label>
          <input
            type="password"
            name="new-password"
            id="new-password"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
      </TabsContent>
    </Tabs>
  );
}
