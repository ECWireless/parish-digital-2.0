export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
      {
          name: 'title',
          title: 'Title',
          type: 'string'
      },
      {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
              source: 'title',
              maxLength: 96
          }
      },
      {
          name: 'pageTitle',
          title: 'Page Title',
          type: 'string'
      },
      {
          name: 'heroDemoReelLink',
          title: 'Hero Demo Reel Link',
          type: 'string'
      },
      {
          name: 'heroHeading',
          title: 'Hero Heading',
          type: 'string'
      },
      {
          name: 'heroSubheading',
          title: 'Hero Subheading',
          type: 'string'
      },
      {
          name: 'heroSubheading2',
          title: 'Hero Subheading 2',
          type: 'string'
      },
      {
          name: 'descriptionHeading',
          title: 'Description Heading',
          type: 'string'
      },
      {
        name: 'descriptionPhoto',
        title: 'Description Photo',
        type: 'image',
        options: {
            hotspot: true
        },
      },
      {
          name: 'descriptionParagraph1',
          title: 'Description Paragraph 1',
          type: 'string'
      },
      {
          name: 'descriptionParagraph2',
          title: 'Description Paragraph 2',
          type: 'string'
      },
      {
          name: 'examplesLink1',
          title: 'Examples Link 1',
          type: 'string'
      },
      {
          name: 'examplesLink2',
          title: 'Examples Link 2',
          type: 'string'
      },
      {
          name: 'examplesLink3',
          title: 'Examples Link 3',
          type: 'string'
      },
      {
          name: 'examplesLink4',
          title: 'Examples Link 4',
          type: 'string'
      },
      {
          name: 'trustedHeading',
          title: 'Trusted Heading',
          type: 'string'
      },
      {
          name: 'trustedLogo1',
          title: 'Trusted Logo 1',
          type: 'image',
          options: {
              hotspot: true
          }
      },
      {
          name: 'trustedLogo2',
          title: 'Trusted Logo 2',
          type: 'image',
          options: {
              hotspot: true
          }
      },
      {
          name: 'trustedLogo3',
          title: 'Trusted Logo 3',
          type: 'image',
          options: {
              hotspot: true
          }
      },
      {
          name: 'trustedLogo4',
          title: 'Trusted Logo 4',
          type: 'image',
          options: {
              hotspot: true
          }
      },
      {
          name: 'trustedLogo5',
          title: 'Trusted Logo 5',
          type: 'image',
          options: {
              hotspot: true
          }
      },
      {
          name: 'trustedLogo6',
          title: 'Trusted Logo 6',
          type: 'image',
          options: {
              hotspot: true
          }
      },
      {
          name: 'servicesHeading',
          title: 'Services Heading',
          type: 'string'
      },
      {
          name: 'servicesSubheading1',
          title: 'Services Subheading 1',
          type: 'string'
      },
      {
          name: 'servicesList1Item1',
          title: 'Services List 1 Item 1',
          type: 'string'
      },
      {
          name: 'servicesList1Item2',
          title: 'Services List 1 Item 2',
          type: 'string'
      },
      {
          name: 'servicesList1Item3',
          title: 'Services List 1 Item 3',
          type: 'string'
      },
      {
          name: 'servicesList1Item4',
          title: 'Services List 1 Item 4',
          type: 'string'
      },
      {
          name: 'servicesList1Item5',
          title: 'Services List 1 Item 5',
          type: 'string'
      },
      {
          name: 'servicesList1Item6',
          title: 'Services List 1 Item 6',
          type: 'string'
      },
      {
          name: 'servicesList1Item7',
          title: 'Services List 1 Item 7',
          type: 'string'
      },
      {
          name: 'servicesList1Item8',
          title: 'Services List 1 Item 8',
          type: 'string'
      },
      {
          name: 'servicesList1Item9',
          title: 'Services List 1 Item 9',
          type: 'string'
      },
      {
          name: 'servicesPhoto1',
          title: 'Services Photo 1',
          type: 'image',
          options: {
              hotspot: true
          }
      },
      {
          name: 'servicesSubheading2',
          title: 'Services Subheading 2',
          type: 'string'
      },
      {
          name: 'servicesList2Item1',
          title: 'Services List 2 Item 1',
          type: 'string'
      },
      {
          name: 'servicesList2Item2',
          title: 'Services List 2 Item 2',
          type: 'string'
      },
      {
          name: 'servicesList2Item3',
          title: 'Services List 2 Item 3',
          type: 'string'
      },
      {
          name: 'servicesList2Item4',
          title: 'Services List 2 Item 4',
          type: 'string'
      },
      {
          name: 'servicesList2Item5',
          title: 'Services List 2 Item 5',
          type: 'string'
      },
      {
          name: 'servicesList2Item6',
          title: 'Services List 2 Item 6',
          type: 'string'
      },
      {
          name: 'servicesPhoto2',
          title: 'Services Photo 2',
          type: 'image',
          options: {
              hotspot: true
          }
      },
  ],

  preview: {
    select: {
      title: 'title',
    }
  }
}
