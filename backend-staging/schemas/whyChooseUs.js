export default {
  name: 'whyChooseUs',
  title: 'Why Choose Us',
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
        name: 'introHeading',
        title: 'Intro Heading',
        type: 'string'
    },
    {
      name: 'introBody',
      title: 'Intro Body',
      type: 'blockContent',
    },
    {
        name: 'introPhoto',
        title: 'Intro Photo',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'introBrands1',
        title: 'Intro Brands 1',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'introBrands2',
        title: 'Intro Brands 2',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'introBrands3',
        title: 'Intro Brands 3',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'introBrands4',
        title: 'Intro Brands 4',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'introBrands5',
        title: 'Intro Brands 5',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'introBrands6',
        title: 'Intro Brands 6',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'introBrands7',
        title: 'Intro Brands 7',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'introBrands8',
        title: 'Intro Brands 8',
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
