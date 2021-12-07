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
          name: 'bannerPhoto',
          title: 'Banner Photo',
          type: 'image',
          options: {
              hotspot: true
          }
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
      {
          name: 'ownerHeading',
          title: 'Owner Heading',
          type: 'string'
      },
      {
          name: 'ownerParagraph',
          title: 'Owner Paragraph',
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
          name: 'ownerPhoto',
          title: 'Owner Photo',
          type: 'image',
          options: {
              hotspot: true
          }
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
