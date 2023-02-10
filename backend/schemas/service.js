export default {
  name: 'service',
  title: 'Service',
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
      name: 'descriptionHeading',
      title: 'Description Heading',
      type: 'string'
    },
    {
      name: 'descriptionPhoto',
      title: 'Description Photo',
      type: 'image',
      options: {
          hotspot: true
      },
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
      name: 'servicesPhoto1',
      title: 'Services Photo 1',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'servicesSubheading1',
      title: 'Services Subheading 1',
      type: 'string'
    },
    {
      name: 'servicesDescription1',
      title: 'Services Description 1',
      type: 'string'
    },
    {
      name: 'servicesVideoLink1',
      title: 'Services Video Link 1',
      type: 'string'
    },
    {
      name: 'servicesPhoto2',
      title: 'Services Photo 2',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'servicesSubheading2',
      title: 'Services Subheading 2',
      type: 'string'
    },
    {
      name: 'servicesDescription2',
      title: 'Services Description 2',
      type: 'string'
    },
    {
      name: 'servicesVideoLink2',
      title: 'Services Video Link 2',
      type: 'string'
    },
    {
      name: 'servicesPhoto3',
      title: 'Services Photo 3',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'servicesSubheading3',
      title: 'Services Subheading 3',
      type: 'string'
    },
    {
      name: 'servicesDescription3',
      title: 'Services Description 3',
      type: 'string'
    },
    {
      name: 'servicesVideoLink3',
      title: 'Services Video Link 3',
      type: 'string'
    },
  ],

  preview: {
    select: {
      title: 'title',
    }
  }
}
