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
        name: 'storyHeading',
        title: 'Story Heading',
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
        name: 'storyPhoto',
        title: 'Story Photo',
        type: 'image',
        options: {
            hotspot: true
        }
    },{
      name: 'reviewsHeading',
      title: 'Reviews Heading',
      type: 'string'
    },
    {
        name: 'reviewsSubheading',
        title: 'Reviews Subheading',
        type: 'string'
    },
    {
        name: 'reviewsPhoto',
        title: 'Reviews Photo',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'reviewsQuote1',
        title: 'Reviews Quote 1',
        type: 'string'
    },
    {
        name: 'reviewsName1',
        title: 'Reviews Name 1',
        type: 'string'
    },
    {
        name: 'reviewsPosition1',
        title: 'Reviews Position 1',
        type: 'string'
    },
    {
        name: 'reviewsCompany1',
        title: 'Reviews Company 1',
        type: 'string'
    },
    {
        name: 'reviewsQuote2',
        title: 'Reviews Quote 2',
        type: 'string'
    },
    {
        name: 'reviewsName2',
        title: 'Reviews Name 2',
        type: 'string'
    },
    {
        name: 'reviewsPosition2',
        title: 'Reviews Position 2',
        type: 'string'
    },
    {
        name: 'reviewsCompany2',
        title: 'Reviews Company 2',
        type: 'string'
    },
    {
        name: 'reviewsQuote3',
        title: 'Reviews Quote 3',
        type: 'string'
    },
    {
        name: 'reviewsName3',
        title: 'Reviews Name 3',
        type: 'string'
    },
    {
        name: 'reviewsPosition3',
        title: 'Reviews Position 3',
        type: 'string'
    },
    {
        name: 'reviewsCompany3',
        title: 'Reviews Company 3',
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
    {
        name: 'crew4Name',
        title: 'Crew 4 Name',
        type: 'string'
    },
    {
        name: 'crew4Position',
        title: 'Crew 4 Position',
        type: 'string'
    },
    {
        name: 'crew4Paragraph1',
        title: 'Crew 4 Paragraph 1',
        type: 'string'
    },
    {
        name: 'crew4Paragraph2',
        title: 'Crew 4 Paragraph 2',
        type: 'string'
    },
    {
        name: 'crew4Photo',
        title: 'Crew 4 Photo',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'crew5Name',
        title: 'Crew 5 Name',
        type: 'string'
    },
    {
        name: 'crew5Position',
        title: 'Crew 5 Position',
        type: 'string'
    },
    {
        name: 'crew5Paragraph1',
        title: 'Crew 5 Paragraph 1',
        type: 'string'
    },
    {
        name: 'crew5Paragraph2',
        title: 'Crew 5 Paragraph 2',
        type: 'string'
    },
    {
        name: 'crew5Photo',
        title: 'Crew 5 Photo',
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
