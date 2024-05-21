"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import UserAvatar from "./user-avatar";
import { LogOut } from "lucide-react";
// import { ModeToggle } from "@/components/layouts/mode-toggle";

export default function Header() {
  return (
    <div className="container flex h-16 sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <Link href="/" className="mr-2 flex items-center md:mr-6 md:space-x-2">
        <Image
          src={"/images/ot-logo.svg"}
          alt="Logo Oliveira Trust"
          width={150}
          height={50}
        />
      </Link>

      <nav className="flex flex-1 items-center gap-2 justify-end md:justify-end">
        <UserAvatar />
        <Button variant="ghost" size="icon" className="size-8">
          <LogOut className="h-4 w-4" />
        </Button>
        {/* <ModeToggle /> */}
      </nav>
    </div>
  );
}
