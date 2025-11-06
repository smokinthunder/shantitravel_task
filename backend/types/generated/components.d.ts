import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsClimateForMonth extends Struct.ComponentSchema {
  collectionName: 'components_components_climate_for_months';
  info: {
    displayName: 'ClimateForMonth';
  };
  attributes: {
    avgTemp: Schema.Attribute.Integer;
    Month: Schema.Attribute.Enumeration<
      [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ]
    >;
    sunnyDays: Schema.Attribute.Integer;
  };
}

export interface ComponentsImageLink extends Struct.ComponentSchema {
  collectionName: 'components_components_image_links';
  info: {
    displayName: 'ImageLink';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    isUrl: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface ComponentsReason extends Struct.ComponentSchema {
  collectionName: 'components_components_reasons';
  info: {
    displayName: 'Reason';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsTourCard extends Struct.ComponentSchema {
  collectionName: 'components_components_tour_cards';
  info: {
    description: 'Tour package card with details';
    displayName: 'TourCard';
  };
  attributes: {
    duration: Schema.Attribute.String & Schema.Attribute.Required;
    highlights: Schema.Attribute.Component<'components.link', true>;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    location: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutAddress extends Struct.ComponentSchema {
  collectionName: 'components_layout_addresses';
  info: {
    displayName: 'Address';
  };
  attributes: {
    addressText: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    phone: Schema.Attribute.String;
    placeHref: Schema.Attribute.String;
  };
}

export interface LayoutClimate extends Struct.ComponentSchema {
  collectionName: 'components_layout_climates';
  info: {
    displayName: 'Climate';
  };
  attributes: {
    months: Schema.Attribute.Component<'components.climate-for-month', true>;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    address: Schema.Attribute.Component<'layout.address', false>;
    footerColumns: Schema.Attribute.Component<'navigation.footer-column', true>;
    logo: Schema.Attribute.Component<'components.image-link', false>;
    socialLinks: Schema.Attribute.Component<'components.image-link', true>;
    sustainablePolicy: Schema.Attribute.Blocks;
    termsAndConditions: Schema.Attribute.Component<
      'layout.termsand-conditions',
      false
    >;
  };
}

export interface LayoutGuidesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_guides_sections';
  info: {
    description: 'A section containing multiple guide cards';
    displayName: 'GuidesSection';
  };
  attributes: {
    button: Schema.Attribute.Component<'components.link', false>;
    guideCards: Schema.Attribute.Component<'components.image-link', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    button: Schema.Attribute.Component<'components.link', false>;
    language: Schema.Attribute.Component<'navigation.menu-item', false>;
    links: Schema.Attribute.Component<'components.link', true>;
    logo: Schema.Attribute.Component<'components.image-link', false>;
    menuTabs: Schema.Attribute.Component<'navigation.menu-item', true>;
    phone: Schema.Attribute.Component<'components.link', false>;
  };
}

export interface LayoutImagesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_images_sections';
  info: {
    displayName: 'ImagesSection';
  };
  attributes: {
    image: Schema.Attribute.Media<'images', true>;
  };
}

export interface LayoutNeedHelp extends Struct.ComponentSchema {
  collectionName: 'components_layout_need_helps';
  info: {
    displayName: 'NeedHelp';
  };
  attributes: {
    button: Schema.Attribute.Component<'components.link', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutReasons extends Struct.ComponentSchema {
  collectionName: 'components_layout_reasons';
  info: {
    displayName: 'Reasons';
  };
  attributes: {
    reason: Schema.Attribute.Component<'components.reason', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutTermsandConditions extends Struct.ComponentSchema {
  collectionName: 'components_layout_termsand_conditions';
  info: {
    displayName: 'TermsandConditions';
  };
  attributes: {
    links: Schema.Attribute.Component<'components.link', true>;
    text: Schema.Attribute.Blocks;
  };
}

export interface LayoutToursSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_tours_sections';
  info: {
    description: 'Tours section with title and tour cards';
    displayName: 'ToursSection';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    tourCards: Schema.Attribute.Component<'components.tour-card', true>;
    viewAllButton: Schema.Attribute.Component<'components.link', false>;
  };
}

export interface NavigationDropdownItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_dropdown_items';
  info: {
    displayName: 'DropdownItem';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface NavigationFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_navigation_footer_columns';
  info: {
    displayName: 'FooterColumn';
  };
  attributes: {
    links: Schema.Attribute.Component<'components.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface NavigationMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_menu_items';
  info: {
    displayName: 'MenuItem';
  };
  attributes: {
    dropdownItems: Schema.Attribute.Component<'navigation.dropdown-item', true>;
    hasDropdown: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.climate-for-month': ComponentsClimateForMonth;
      'components.image-link': ComponentsImageLink;
      'components.link': ComponentsLink;
      'components.reason': ComponentsReason;
      'components.tour-card': ComponentsTourCard;
      'layout.address': LayoutAddress;
      'layout.climate': LayoutClimate;
      'layout.footer': LayoutFooter;
      'layout.guides-section': LayoutGuidesSection;
      'layout.header': LayoutHeader;
      'layout.images-section': LayoutImagesSection;
      'layout.need-help': LayoutNeedHelp;
      'layout.reasons': LayoutReasons;
      'layout.termsand-conditions': LayoutTermsandConditions;
      'layout.tours-section': LayoutToursSection;
      'navigation.dropdown-item': NavigationDropdownItem;
      'navigation.footer-column': NavigationFooterColumn;
      'navigation.menu-item': NavigationMenuItem;
    }
  }
}
