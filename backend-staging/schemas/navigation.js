export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
      {
          name: 'title',
          title: 'Title',
          type: 'string'
      },
      {
          name: 'logo',
          title: 'Logo',
          type: 'image',
          options: {
              hotspot: true
          }
      }
  ],
  preview: {
      select: {
        title: 'title'
      }
  }
}
