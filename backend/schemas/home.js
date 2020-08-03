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
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: {
                hotspot: true
            }
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
            name: 'descriptionHeading',
            title: 'Description Heading',
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
            name: 'descriptionVideoType1',
            title: 'Description Video Type 1',
            type: 'string'
        },
        {
            name: 'descriptionVideoType1Details',
            title: 'Description Video Type 1 Details',
            type: 'string'
        },
        {
            name: 'descriptionVideoType1Photo',
            title: 'Description Video Type 1 Photo',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'descriptionVideoType2',
            title: 'Description Video Type 2',
            type: 'string'
        },
        {
            name: 'descriptionVideoType2Details',
            title: 'Description Video Type 2 Details',
            type: 'string'
        },
        {
            name: 'descriptionVideoType2Photo',
            title: 'Description Video Type 2 Photo',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'descriptionVideoType3',
            title: 'Description Video Type 3',
            type: 'string'
        },
        {
            name: 'descriptionVideoType3Details',
            title: 'Description Video Type 3 Details',
            type: 'string'
        },
        {
            name: 'descriptionVideoType3Photo',
            title: 'Description Video Type 3 Photo',
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
            name: 'featureParagraph',
            title: 'Feature Paragraph',
            type: 'string'
        },
        {
            name: 'featureButton',
            title: 'Feature Button',
            type: 'string'
        },
        {
            name: 'featurePhoto',
            title: 'Feature Photo',
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
  