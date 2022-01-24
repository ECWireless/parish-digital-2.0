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
      name: 'heading',
      title: 'Heading',
      type: 'string'
    },
    {
      name: 'subheading',
      title: 'Subheading',
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
      name: 'reviewsHeading',
      title: 'Reviews Heading',
      type: 'string'
    },
    {
        name: 'reviewsSubheading',
        title: 'Reviews Subheading',
        type: 'string'
    },
    {
        name: 'reviewsPhoto',
        title: 'Reviews Photo',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'reviewsQuote1',
        title: 'Reviews Quote 1',
        type: 'string'
    },
    {
        name: 'reviewsName1',
        title: 'Reviews Name 1',
        type: 'string'
    },
    {
        name: 'reviewsPosition1',
        title: 'Reviews Position 1',
        type: 'string'
    },
    {
        name: 'reviewsCompany1',
        title: 'Reviews Company 1',
        type: 'string'
    },
    {
        name: 'reviewsQuote2',
        title: 'Reviews Quote 2',
        type: 'string'
    },
    {
        name: 'reviewsName2',
        title: 'Reviews Name 2',
        type: 'string'
    },
    {
        name: 'reviewsPosition2',
        title: 'Reviews Position 2',
        type: 'string'
    },
    {
        name: 'reviewsCompany2',
        title: 'Reviews Company 2',
        type: 'string'
    },
    {
        name: 'reviewsQuote3',
        title: 'Reviews Quote 3',
        type: 'string'
    },
    {
        name: 'reviewsName3',
        title: 'Reviews Name 3',
        type: 'string'
    },
    {
        name: 'reviewsPosition3',
        title: 'Reviews Position 3',
        type: 'string'
    },
    {
        name: 'reviewsCompany3',
        title: 'Reviews Company 3',
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
