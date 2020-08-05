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
    ],
  
    preview: {
      select: {
        title: 'title',
      }
    }
  }
  