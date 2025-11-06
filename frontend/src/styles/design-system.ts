/**
 * Design system documentation and usage guidelines
 */

export const DESIGN_SYSTEM = {
  // Spacing scale (follows 8px grid)
  SPACING: {
    XS: '0.25rem',   // 4px
    SM: '0.5rem',    // 8px
    MD: '1rem',      // 16px
    LG: '1.5rem',    // 24px
    XL: '2rem',      // 32px
    '2XL': '3rem',   // 48px
    '3XL': '4rem',   // 64px
  },

  // Typography scale
  TYPOGRAPHY: {
    HEADINGS: {
      H1: 'text-heading-xl',    // 36px, serif
      H2: 'text-heading-lg',    // 30px, serif  
      H3: 'text-heading-md',    // 24px, semibold
      H4: 'text-heading-sm',    // 20px, semibold
    },
    BODY: {
      LARGE: 'text-lg',         // 18px
      DEFAULT: 'text-base',     // 16px
      SMALL: 'text-sm',         // 14px
    },
    SPECIAL: {
      CAPTION: 'text-caption',  // 14px, gray
      OVERLINE: 'text-overline', // 12px, uppercase, tracking
    }
  },

  // Color tokens (refer to Tailwind config)
  COLORS: {
    PRIMARY: 'primary',
    GRAY: {
      50: 'gray-50',
      100: 'gray-100',
      300: 'gray-300',
      500: 'gray-500',
      600: 'gray-600',
      700: 'gray-700',
      900: 'gray-900',
    }
  },

  // Component patterns
  PATTERNS: {
    CARDS: {
      DEFAULT: 'card',
      HOVER: 'card card-hover',
      WITH_CONTENT: 'card card-content',
    },
    BUTTONS: {
      PRIMARY: 'btn-primary',
      SECONDARY: 'btn-secondary',
      GHOST: 'btn-ghost',
    },
    GRIDS: {
      RESPONSIVE: 'grid-responsive',
      WITH_GAP: 'grid-responsive grid-gap-md',
    }
  },

  // Layout utilities
  LAYOUT: {
    CONTAINER: 'container mx-auto container-padding',
    SECTION: 'section-spacing',
    FLEX_CENTER: 'flex-center',
    FLEX_BETWEEN: 'flex-between',
  }
} as const;

// Usage examples:
/*
// Heading
<h1 className={DESIGN_SYSTEM.TYPOGRAPHY.HEADINGS.H1}>
  Main Title
</h1>

// Card with hover
<div className={DESIGN_SYSTEM.PATTERNS.CARDS.HOVER}>
  <div className={DESIGN_SYSTEM.PATTERNS.CARDS.WITH_CONTENT}>
    Card content
  </div>
</div>

// Responsive grid
<div className={DESIGN_SYSTEM.PATTERNS.GRIDS.WITH_GAP}>
  Grid items...
</div>

// Button
<button className={DESIGN_SYSTEM.PATTERNS.BUTTONS.PRIMARY}>
  Click me
</button>
*/