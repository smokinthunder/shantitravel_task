"use client";

import { Button } from "@/components/ui/button";
import { Header as HeaderType } from "@/types";
import { TopBar } from "@/components/header/top-bar";
import { Logo } from "@/components/header/logo";
import { MainNavigation } from "@/components/header/main-navigation";
import { ActionButton } from "@/components/ui/action-button";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

interface HeaderProps {
  data: HeaderType;
}

/**
 * Main header component with top bar and navigation
 * Shows sticky header only when scrolling upward
 */
export default function Header({ data }: HeaderProps) {
  const { scrollDirection, isScrolled } = useScrollDirection();
  
  if (!data) {
    return null;
  }

  const { logo, links, menuTabs, phone, language, button } = data;

  // Show sticky header when scrolling up and not at top, or when at the very top
  const showStickyHeader = !isScrolled || scrollDirection === "up";
  
  return (
    <header 
      className={`
        w-full bg-white shadow-md py-3 md:py-4 px-4 md:px-8 lg:px-20 fixed top-0 z-50 
        transition-transform duration-300 ease-in-out
        ${showStickyHeader ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="flex flex-col space-y-3 md:space-y-4">
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
