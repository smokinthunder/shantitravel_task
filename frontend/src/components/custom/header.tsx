"use client";

import { Button } from "@/components/ui/button";
import { Header as HeaderType } from "@/types";
import { getStrapiMedia } from "@/lib/strapi";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { PhoneIcon } from "@heroicons/react/24/outline";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

interface HeaderProps {
  data: HeaderType;
}

export default function Header({ data }: HeaderProps) {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  if (!data) {
    return null;
  }

  const { logo, links, menuTabs, phone, language, button } = data;

  return (
    <header className="w-full bg-white shadow-md p-4 px-20 sticky top-0 z-50">
      <div className="flex flex-col">
        <div className="flex-1 flex flex-row justify-between ">
          {links &&
            links.map((link) => (
              <div key={link.id} className="">
                <Link
                  href={link.href}
                  target={link.isExternal ? "_blank" : "_self"}
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  className="text-xs hover:underline font-medium "
                >
                  {link.label}
                </Link>
              </div>
            ))}
          <div className="flex flex-row text-xs ">
            <div className="flex flex-row bg-gray-300 p-0.5 px-3 m-1 rounded-2xl">
              <PhoneIcon className="w-3 h-3 " />
              {phone.label}
            </div>
            <div className="flex flex-row bg-gray-300 p-0.5 px-3 m-1 rounded-2xl">
              {language.label}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row justify-between  ">
          <Image
            src={logo.isUrl ? logo.url : getStrapiMedia(logo.image.url)}
            alt={logo.label ?? ""}
            width={150}
            height={50}
            className="object-contain p-1 "
          />
          <div className="flex flex-row justify-center ">
            {menuTabs &&
              menuTabs.map((menuItem) => (
                <NavigationMenu key={menuItem.id}>
                  {menuItem.hasDropdown ? (
                    <NavigationMenuItem className="hidden md:block">
                      <NavigationMenuTrigger>
                        {menuItem.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-4">
                          <li>
                            {menuItem.dropdownItems.map((dropdownItem) => (
                              <NavigationMenuLink asChild key={dropdownItem.id}>
                                <Link href={dropdownItem.url ?? "#"}>
                                  {dropdownItem.label}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link href={menuItem.url ?? "#"}>{menuItem.label}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )}
                </NavigationMenu>
              ))}
          </div>
          <a href={button.href ?? "#"}>
            <Button className="m-2">{button.label}</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
