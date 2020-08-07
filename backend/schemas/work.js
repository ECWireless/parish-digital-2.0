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
        {
            name: 'detail1Heading',
            title: 'Detail 1 Heading',
            type: 'string'
        },
        {
            name: 'detail1Paragraph',
            title: 'Detail 1 Paragraph',
            type: 'string'
        },
        {
            name: 'detail1Link',
            title: 'Detail 1 Link',
            type: 'string'
        },
        {
            name: 'detail2Heading',
            title: 'Detail 2 Heading',
            type: 'string'
        },
        {
            name: 'detail2Paragraph',
            title: 'Detail 2 Paragraph',
            type: 'string'
        },
        {
            name: 'detail2Link',
            title: 'Detail 2 Link',
            type: 'string'
        },
        {
            name: 'detail3Heading',
            title: 'Detail 3 Heading',
            type: 'string'
        },
        {
            name: 'detail3Paragraph',
            title: 'Detail 3 Paragraph',
            type: 'string'
        },
        {
            name: 'detail3Link',
            title: 'Detail 3 Link',
            type: 'string'
        },
    ],
  
    preview: {
      select: {
        title: 'title',
      }
    }
  }
  