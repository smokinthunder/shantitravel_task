import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { ChevronDown } from "lucide-react";
import { Link as LinkType } from "@/types";
import { UI_CONSTANTS } from "@/lib/constants";

interface TopBarProps {
  links: LinkType[];
  phone: LinkType;
  language: any; // Replace with proper type when available
}

export function TopBar({ links, phone, language }: TopBarProps) {
  return (
    <div className="flex-1 flex flex-row justify-between">
      {/* Quick Links */}
        {links?.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            target={link.isExternal ? "_blank" : "_self"}
            rel={link.isExternal ? "noopener noreferrer" : undefined}
            className={`text-xs hover:underline font-medium ${UI_CONSTANTS.TRANSITIONS.COLORS}`}
          >
            {link.label}
          </Link>
        ))}

      {/* Contact Info */}
      <div className="flex flex-row text-xs space-x-2">
        <div className="flex items-center bg-gray-300 p-0.5 px-3 rounded-2xl">
          <PhoneIcon className="w-3 h-3 mr-1" />
          <span>{phone.label}</span>
        </div>
        
        <div className="flex items-center bg-gray-300 p-0.5 px-3 rounded-2xl">
          <span>{language.label}</span>
          <ChevronDown className="w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  );
}