/* c8 ignore start */
import { Avatar, AvatarFallback, AvatarImage } from "avatar";

export const Default = () => (
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
);
