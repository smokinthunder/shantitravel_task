"use client";

import { Button } from "@/components/ui/button";
import { Header as HeaderType } from "@/types";
import { TopBar } from "@/components/header/top-bar";
import { Logo } from "@/components/header/logo";
import { MainNavigation } from "@/components/header/main-navigation";
import { ActionButton } from "@/components/ui/action-button";

interface HeaderProps {
  data: HeaderType;
}

/**
 * Main header component with top bar and navigation
 */
export default function Header({ data }: HeaderProps) {
  if (!data) {
    return null;
  }

  const { logo, links, menuTabs, phone, language, button } = data;

  return (
    <header className="w-full bg-white shadow-md p-4 px-20 sticky top-0 z-50">
      <div className="flex flex-col space-y-4">
        {/* Top Bar with Links and Contact Info */}
        <TopBar 
          links={links} 
          phone={phone} 
          language={language} 
        />

        {/* Main Header with Logo, Navigation, and CTA */}
        <div className="flex-1 flex flex-row justify-between items-center">
          <Logo logo={logo} />
          
          <MainNavigation menuTabs={menuTabs} />
          
          <ActionButton link={button} className="m-2" />
        </div>
      </div>
    </header>
  );
}
