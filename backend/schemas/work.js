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
          name: 'heading',
          title: 'Heading',
          type: 'string'
      },
      {
          name: 'subheading',
          title: 'Subheading',
          type: 'string'
      },
      {
          name: 'example1Link',
          title: 'Example 1 Link',
          type: 'string'
      },
      {
          name: 'example2Link',
          title: 'Example 2 Link',
          type: 'string'
      },
      {
          name: 'example3Link',
          title: 'Example 3 Link',
          type: 'string'
      },
      {
          name: 'example4Link',
          title: 'Example 4 Link',
          type: 'string'
      },
      {
          name: 'example5Link',
          title: 'Example 5 Link',
          type: 'string'
      },
      {
          name: 'example6Link',
          title: 'Example 6 Link',
          type: 'string'
      },
      {
          name: 'example7Link',
          title: 'Example 7 Link',
          type: 'string'
      },
      {
          name: 'example8Link',
          title: 'Example 8 Link',
          type: 'string'
      },
      {
          name: 'example9Link',
          title: 'Example 9 Link',
          type: 'string'
      },
      {
          name: 'example10Link',
          title: 'Example 10 Link',
          type: 'string'
      },
      {
          name: 'example11Link',
          title: 'Example 11 Link',
          type: 'string'
      },
      {
          name: 'example12Link',
          title: 'Example 12 Link',
          type: 'string'
      },
    ],
  
    preview: {
      select: {
        title: 'title',
      }
    }
  }
  