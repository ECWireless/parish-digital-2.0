export default {
    name: 'login',
    title: 'Login',
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
            name: 'loginPassword',
            title: 'Login Password',
            type: 'string'
        },
    ],
  
    preview: {
      select: {
        title: 'title',
      }
    }
  }
  