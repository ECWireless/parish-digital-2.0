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
      {
          name: 'descriptionImage',
          title: 'Description Image',
          type: 'image',
          options: {
              hotspot: true
          }
      },
      {
          name: 'descriptionBodyText',
          title: 'Description Body Text',
          type: 'blockContent'
      },
      {
          name: 'bannerListItem1',
          title: 'Banner List Item 1',
          type: 'string'
      },
      {
          name: 'bannerListItem2',
          title: 'Banner List Item 2',
          type: 'string'
      },
      {
          name: 'bannerListItem3',
          title: 'Banner List Item 3',
          type: 'string'
      },
      {
          name: 'bannerListItem4',
          title: 'Banner List Item 4',
          type: 'string'
      },
      {
          name: 'bannerListItem5',
          title: 'Banner List Item 5',
          type: 'string'
      },
      {
          name: 'bannerListItem6',
          title: 'Banner List Item 6',
          type: 'string'
      },
      {
          name: 'bannerListItem7',
          title: 'Banner List Item 7',
          type: 'string'
      },
      {
          name: 'bannerListItem8',
          title: 'Banner List Item 8',
          type: 'string'
      },
      {
          name: 'bannerListItem9',
          title: 'Banner List Item 9',
          type: 'string'
      },
      {
          name: 'bannerListItem10',
          title: 'Banner List Item 10',
          type: 'string'
      },
      {
          name: 'bannerListItem11',
          title: 'Banner List Item 11',
          type: 'string'
      },
      {
          name: 'bannerListItem12',
          title: 'Banner List Item 12',
          type: 'string'
      },
      {
          name: 'contactFormHeading',
          title: 'Contact Form Heading',
          type: 'string'
      },
      {
          name: 'contactFormSubheading',
          title: 'Contact Form Subheading',
          type: 'string'
      },
  ],

  preview: {
    select: {
      title: 'title',
    }
  }
}
