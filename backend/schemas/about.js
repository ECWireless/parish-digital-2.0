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
        {
            name: 'crewHeading',
            title: 'Crew Heading',
            type: 'string'
        },
        {
            name: 'crewParagraph',
            title: 'Crew Paragraph',
            type: 'string'
        },
        {
            name: 'crew1Name',
            title: 'Crew 1 Name',
            type: 'string'
        },
        {
            name: 'crew1Position',
            title: 'Crew 1 Position',
            type: 'string'
        },
        {
            name: 'crew1Paragraph1',
            title: 'Crew 1 Paragraph 1',
            type: 'string'
        },
        {
            name: 'crew1Paragraph2',
            title: 'Crew 1 Paragraph 2',
            type: 'string'
        },
        {
            name: 'crew1Photo',
            title: 'Crew 1 Photo',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'crew2Name',
            title: 'Crew 2 Name',
            type: 'string'
        },
        {
            name: 'crew2Position',
            title: 'Crew 2 Position',
            type: 'string'
        },
        {
            name: 'crew2Paragraph1',
            title: 'Crew 2 Paragraph 1',
            type: 'string'
        },
        {
            name: 'crew2Paragraph2',
            title: 'Crew 2 Paragraph 2',
            type: 'string'
        },
        {
            name: 'crew2Photo',
            title: 'Crew 2 Photo',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'crew3Name',
            title: 'Crew 3 Name',
            type: 'string'
        },
        {
            name: 'crew3Position',
            title: 'Crew 3 Position',
            type: 'string'
        },
        {
            name: 'crew3Paragraph1',
            title: 'Crew 3 Paragraph 1',
            type: 'string'
        },
        {
            name: 'crew3Paragraph2',
            title: 'Crew 3 Paragraph 2',
            type: 'string'
        },
        {
            name: 'crew3Photo',
            title: 'Crew 3 Photo',
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
  