import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "@/types";
import { UI_CONSTANTS } from "@/lib/constants";

interface MainNavigationProps {
  menuTabs: MenuItem[];
}

export function MainNavigation({ menuTabs }: MainNavigationProps) {
  return (
    <div className="flex flex-row justify-center">
      {menuTabs?.map((menuItem) => (
        <NavigationMenu key={menuItem.id}>
          {menuItem.hasDropdown ? (
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger className={UI_CONSTANTS.TRANSITIONS.COLORS}>
                {menuItem.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4 p-4">
                  {menuItem.dropdownItems.map((dropdownItem) => (
                    <li key={dropdownItem.id}>
                      <NavigationMenuLink asChild>
                        <Link 
                          href={dropdownItem.url ?? "#"}
                          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
                        >
                          {dropdownItem.label}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href={menuItem.url ?? "#"}>
                  {menuItem.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )}
        </NavigationMenu>
      ))}
    </div>
  );
}