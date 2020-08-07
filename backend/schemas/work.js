export default {
    name: 'work',
    title: 'Work',
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
    ],
  
    preview: {
      select: {
        title: 'title',
      }
    }
  }
  