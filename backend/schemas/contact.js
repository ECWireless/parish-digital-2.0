export default {
  name: 'contact',
  title: 'Contact',
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
      name: 'bannerHeading',
      title: 'Banner Heading',
      type: 'string'
    },
    {
      name: 'bannerParagraph',
      title: 'Banner Paragraph',
      type: 'string'
    },
    {
      name: 'ownerNumber',
      title: 'Owner Number',
      type: 'string'
    },
    {
      name: 'ownerEmail',
      title: 'Owner Email',
      type: 'string'
    },
    {
      name: 'contactHeading',
      title: 'Contact Heading',
      type: 'string'
    },
    {
      name: 'contactParagraph',
      title: 'Contact Paragraph',
      type: 'string'
    },
  ],

  preview: {
    select: {
      title: 'title',
    }
  }
}
