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
        title: 'Hero Demo Reel Vimeo ID',
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
      name: 'servicesPhoto1',
      title: 'Services Photo 1',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'servicesSubheading1',
      title: 'Services Subheading 1',
      type: 'string'
    },
    {
      name: 'servicesDescription1',
      title: 'Services Description 1',
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
    {
      name: 'servicesSubheading2',
      title: 'Services Subheading 2',
      type: 'string'
    },
    {
      name: 'servicesDescription2',
      title: 'Services Description 2',
      type: 'string'
    },
    {
      name: 'servicesPhoto3',
      title: 'Services Photo 3',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'servicesSubheading3',
      title: 'Services Subheading 3',
      type: 'string'
    },
    {
      name: 'servicesDescription3',
      title: 'Services Description 3',
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
        name: 'trustedLogo7',
        title: 'Trusted Logo 7',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'trustedLogo8',
        title: 'Trusted Logo 8',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'trustedLogo9',
        title: 'Trusted Logo 9',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'trustedLogo10',
        title: 'Trusted Logo 10',
        type: 'image',
        options: {
            hotspot: true
        }
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
      name: 'locationHeading',
      title: 'Location Heading',
      type: 'string'
    },
    {
      name: 'locationParagraph1',
      title: 'Location Paragraph 1',
      type: 'string'
    },
    {
      name: 'locationParagraph2',
      title: 'Location Paragraph 2',
      type: 'string'
    },
  ],

  preview: {
    select: {
      title: 'title',
    }
  }
}
