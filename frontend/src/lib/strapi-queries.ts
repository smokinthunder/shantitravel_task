/**
 * Strapi API query configurations
 * Using the working populate syntax for Strapi v5
 */

/**
 * Global query configurations
 */
export const STRAPI_QUERIES = {
  GLOBAL_DATA: () => {
    // Use the working explicit populate syntax
    return (
      // Header fields
      'populate[header][populate][links]=*' +
      '&populate[header][populate][menuTabs][populate]=*' +
      '&populate[header][populate][phone]=*' +
      '&populate[header][populate][language][populate]=*' +
      '&populate[header][populate][logo][populate]=*' +
      '&populate[header][populate][button]=*' +
      // Footer fields
      '&populate[footer][populate][footerColumns][populate]=*' +
      '&populate[footer][populate][logo][populate]=*' +
      '&populate[footer][populate][socialLinks][populate]=*' +
      '&populate[footer][populate][termsAndConditions][populate]=*' +
      '&populate[footer][populate][address]=*'
    );
  },

  HOME_PAGE_DATA: () => {
    // Use the working explicit populate syntax
    return (
      'populate[button1]=*' +
      '&populate[button2]=*' +
      '&populate[image1]=true' +
      '&populate[image2]=true' +
      '&populate[climate][populate][months]=*' +
      '&populate[toursSection][populate][tourCards][populate][image]=true' +
      '&populate[toursSection][populate][tourCards][populate][highlights]=*' +
      '&populate[toursSection][populate][viewAllButton]=*' +
      '&populate[guidesSection][populate][guideCards][populate]=*' +
      '&populate[guidesSection][populate][button]=*' +
      '&populate[needHelp][populate][button]=*' +
      '&populate[reasons][populate][reason]=*' +
      '&populate[imagesSection]=true'

    );
  },
} as const;