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
        {
            name: 'featureHeading',
            title: 'Feature Heading',
            type: 'string'
        },
        {
            name: 'featureSubheading',
            title: 'Feature Subheading',
            type: 'string'
        },
        {
            name: 'featureParagraph1',
            title: 'Feature Paragraph 1',
            type: 'string'
        },
        {
            name: 'featureParagraph2',
            title: 'Feature Paragraph 2',
            type: 'string'
        },
        {
            name: 'featureLink',
            title: 'Feature Link',
            type: 'string'
        },
    ],
  
    preview: {
      select: {
        title: 'title',
      }
    }
  }
  