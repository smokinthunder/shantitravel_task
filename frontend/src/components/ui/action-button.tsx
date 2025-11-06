import { Button } from "@/components/ui/button";
import { Link } from "@/types";
import { UI_CONSTANTS } from "@/lib/constants";

interface ActionButtonProps {
  link: Link;
  variant?: "default" | "outline";
  className?: string;
  children?: React.ReactNode;
}

export function ActionButton({ 
  link, 
  variant = "default", 
  className = "", 
  children 
}: ActionButtonProps) {
  return (
    <a 
      href={link.href ?? "#"}
      target={link.isExternal ? "_blank" : "_self"}
      rel={link.isExternal ? "noopener noreferrer" : undefined}
    >
      <Button 
        variant={variant} 
        className={`m-1 ${UI_CONSTANTS.TRANSITIONS.COLORS} ${className}`}
      >
        {children || link.label}
      </Button>
    </a>
  );
}