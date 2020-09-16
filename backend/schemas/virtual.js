export default {
    name: 'virtual',
    title: 'Virtual',
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
            name: 'detailsMainIcon',
            title: 'Details Main Icon',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'detailsHeading',
            title: 'Details Heading',
            type: 'string'
        },
        {
            name: 'detailsSubheading',
            title: 'Details Subheading',
            type: 'string'
        },
        {
            name: 'detailsCard1Icon',
            title: 'Details Card 1 Icon',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'detailsCard1Heading',
            title: 'Details Card 1 Heading',
            type: 'string'
        },
        {
            name: 'detailsCard1Paragraph',
            title: 'Details Card 1 Paragraph',
            type: 'string'
        },
        {
            name: 'detailsCard2Icon',
            title: 'Details Card 2 Icon',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'detailsCard2Heading',
            title: 'Details Card 2 Heading',
            type: 'string'
        },
        {
            name: 'detailsCard2Paragraph',
            title: 'Details Card 2 Paragraph',
            type: 'string'
        },
        {
            name: 'detailsCard3Icon',
            title: 'Details Card 3 Icon',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'detailsCard3Heading',
            title: 'Details Card 3 Heading',
            type: 'string'
        },
        {
            name: 'detailsCard3Paragraph',
            title: 'Details Card 3 Paragraph',
            type: 'string'
        },
    ],
  
    preview: {
      select: {
        title: 'title',
      }
    }
  }
  