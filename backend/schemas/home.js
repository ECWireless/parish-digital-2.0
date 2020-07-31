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
        }
    ],
  
    preview: {
      select: {
        title: 'title',
      }
    }
  }
  