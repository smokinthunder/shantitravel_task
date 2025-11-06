"use client";

import { useState, useEffect } from "react";

type ScrollDirection = "up" | "down" | "idle";

interface UseScrollDirectionReturn {
  scrollDirection: ScrollDirection;
  isScrolled: boolean;
}

/**
 * Hook to detect scroll direction and scroll position
 * @param threshold - Minimum scroll distance to trigger direction change (default: 10)
 * @returns Object with scrollDirection and isScrolled status
 */
export function useScrollDirection(threshold: number = 10): UseScrollDirectionReturn {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>("idle");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const difference = Math.abs(scrollY - lastScrollY);

      // Update isScrolled status
      setIsScrolled(scrollY > 0);

      // Only update direction if we've scrolled more than the threshold
      if (difference < threshold) {
        ticking = false;
        return;
      }

      // Determine scroll direction
      if (scrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (scrollY < lastScrollY) {
        setScrollDirection("up");
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [threshold]);

  return { scrollDirection, isScrolled };
}