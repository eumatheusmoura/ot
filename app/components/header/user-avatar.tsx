import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ReactElement } from "react";

export default function UserAvatar(): ReactElement {
  return (
    <section className="flex gap-2 items-center">
      <Avatar className="h-8 w-8">
        <AvatarImage src={"/images/user-image.jpeg"} alt="Avatar" />
        <AvatarFallback>MM</AvatarFallback>
      </Avatar>
      <span className="hidden sm:inline text-sm">Matheus Moura</span>
    </section>
  );
}
