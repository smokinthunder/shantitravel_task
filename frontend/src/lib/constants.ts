/**
 * Application constants and configuration
 */

// API Configuration
export const API_CONFIG = {
  STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337",
  ENDPOINTS: {
    GLOBAL: "/api/global",
    HOME_PAGE: "/api/home-page",
  },
  CACHE_REVALIDATION: {
    DEFAULT: 2, // 1 minute
    DISABLED: 0,
    LONG: 3600, // 1 hour
  },
} as const;

// Image Configuration
export const IMAGE_CONFIG = {
  QUALITY: 75,
  PLACEHOLDER: "blur",
  SIZES: {
    HERO_IMAGE: { width: 320, height: 320 },
    TOUR_CARD: { width: 400, height: 256 },
    LOGO: { width: 150, height: 50 },
    GUIDE_CARD: { width: 160, height: 160 },
  },
} as const;

// UI Constants
export const UI_CONSTANTS = {
  CONTAINER_PADDING: "px-4 md:px-8 lg:px-12",
  SECTION_SPACING: "py-8 md:py-12 lg:py-16",
  GRID_GAPS: {
    SMALL: "gap-3 md:gap-4",
    MEDIUM: "gap-4 md:gap-6",
    LARGE: "gap-8 md:gap-12 lg:gap-16",
  },
  TRANSITIONS: {
    DEFAULT: "transition-all duration-300",
    HOVER: "transition-transform duration-300",
    COLORS: "transition-colors",
    SHADOW: "transition-shadow",
  },
  RESPONSIVE_SPACING: {
    SECTION_VERTICAL: "my-8 md:my-12 lg:my-16",
    SECTION_LARGE: "my-12 md:my-20 lg:my-28",
    ELEMENT_GAP: "gap-4 md:gap-6 lg:gap-8",
  },
} as const;

// Responsive Breakpoints (for documentation)
export const BREAKPOINTS = {
  SM: "640px",
  MD: "768px",
  LG: "1024px",
  XL: "1280px",
} as const;

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  FETCH_FAILED: "Failed to fetch data",
  NETWORK_ERROR: "Network error occurred",
  INVALID_RESPONSE: "Invalid response format",
  NO_DATA: "No data available",
} as const;
