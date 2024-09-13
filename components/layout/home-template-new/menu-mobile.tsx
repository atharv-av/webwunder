import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Logo from '@/components/common/logo';
import { paths } from '@/paths';

const SidebarMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <Menu className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <div className="mt-8 flex flex-col h-full">
          <nav className="flex-grow">
            <ul className="space-y-4 px-4 font-extrabold">
              {Object.entries(paths.menu.main).map(([key, value]) => (
                <li key={value.href}>
                  <Link href={value.href} className="block py-2">
                    {value.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center justify-center gap-4">
            {process.env.NEXT_PUBLIC_DISABLE_SIGNUP !== 'true' && (
              <Button size={"sm"} variant="outline" asChild>
                <Link href={paths.pages.signUp.href}>
                  Sign up
                </Link>
              </Button>
            )}
            <Button size={"sm"} asChild>
              <Link href={paths.pages.bookCall.href} target="_blank">
                Book a call
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SidebarMenu;