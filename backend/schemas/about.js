export default {
    name: 'about',
    title: 'About',
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
            name: 'storyHeading1',
            title: 'Story Heading 1',
            type: 'string'
        },
        {
            name: 'storyParagraph1',
            title: 'Story Paragraph 1',
            type: 'string'
        },
        {
            name: 'storyParagraph2',
            title: 'Story Paragraph 2',
            type: 'string'
        },
        {
            name: 'storyHeading2',
            title: 'Story Heading 2',
            type: 'string'
        },
        {
            name: 'storyParagraph3',
            title: 'Story Paragraph 3',
            type: 'string'
        },
        {
            name: 'storyParagraph4',
            title: 'Story Paragraph 4',
            type: 'string'
        },
        {
            name: 'storyPhoto',
            title: 'Story Photo',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'expertiseHeading',
            title: 'Expertise Heading',
            type: 'string'
        },
        {
            name: 'expertiseParagraph',
            title: 'Expertise Paragraph',
            type: 'string'
        },
    ],
  
    preview: {
      select: {
        title: 'title',
      }
    }
  }
  