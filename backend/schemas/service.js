export default {
    name: 'service',
    title: 'Service',
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
            name: 'descriptionHeading',
            title: 'Description Heading',
            type: 'string'
        },
        {
            name: 'descriptionVideoLink',
            title: 'Description Video Link',
            type: 'string'
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
            name: 'descriptionButtonText',
            title: 'Description Button Text',
            type: 'string'
        },
        {
            name: 'feature1Icon',
            title: 'Feature 1 Icon',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'feature1Heading',
            title: 'Feature 1 Heading',
            type: 'string'
        },
        {
            name: 'feature1Paragraph',
            title: 'Feature 1 Paragraph ',
            type: 'string'
        },
        {
            name: 'feature1ButtonText',
            title: 'Feature 1 Button Text ',
            type: 'string'
        },
        {
            name: 'feature1Link',
            title: 'Feature 1 Link ',
            type: 'string'
        },
        {
            name: 'feature2Icon',
            title: 'Feature 2 Icon',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'feature2Heading',
            title: 'Feature 2 Heading',
            type: 'string'
        },
        {
            name: 'feature2Paragraph',
            title: 'Feature 2 Paragraph ',
            type: 'string'
        },
        {
            name: 'feature2ButtonText',
            title: 'Feature 2 Button Text ',
            type: 'string'
        },
        {
            name: 'feature2Link',
            title: 'Feature 2 Link ',
            type: 'string'
        },
        {
            name: 'feature3Icon',
            title: 'Feature 3 Icon',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'feature3Heading',
            title: 'Feature 3 Heading',
            type: 'string'
        },
        {
            name: 'feature3Paragraph',
            title: 'Feature 3 Paragraph ',
            type: 'string'
        },
        {
            name: 'feature3ButtonText',
            title: 'Feature 3 Button Text ',
            type: 'string'
        },
        {
            name: 'feature3Link',
            title: 'Feature 3 Link ',
            type: 'string'
        },

        {
            name: 'details1Heading',
            title: 'Details 1 Heading',
            type: 'string'
        },
        {
            name: 'details1Paragraph1',
            title: 'Details 1 Paragraph 1',
            type: 'string'
        },
        {
            name: 'details1Paragraph2',
            title: 'Details 1 Paragraph 2',
            type: 'string'
        },
        {
            name: 'details1ParagraphMobile',
            title: 'Details 1 Paragraph Mobile',
            type: 'string'
        },
        {
            name: 'details1Photo',
            title: 'Details 1 Photo',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'details2Heading',
            title: 'Details 2 Heading',
            type: 'string'
        },
        {
            name: 'details2Paragraph1',
            title: 'Details 2 Paragraph 1',
            type: 'string'
        },
        {
            name: 'details2Paragraph2',
            title: 'Details 2 Paragraph 2',
            type: 'string'
        },
        {
            name: 'details2ParagraphMobile',
            title: 'Details 2 Paragraph Mobile',
            type: 'string'
        },
        {
            name: 'details2Photo',
            title: 'Details 2 Photo',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'pricingHeading',
            title: 'Pricing Heading',
            type: 'string'
        },
        {
            name: 'pricingButtonText',
            title: 'Pricing Button Text',
            type: 'string'
        },
        {
            name: 'pricingPhoto',
            title: 'Pricing Photo',
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
  