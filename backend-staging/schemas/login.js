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
      {
          name: 'loginToken',
          title: 'Login Token',
          type: 'string'
      },
      {
          name: 'loginBackgroundPhoto',
          title: 'Login Background Photo',
          type: 'image',
          options: {
              hotspot: true
          }
      },
      {
          name: 'loginBackgroundPhoto2',
          title: 'Login Background Photo 2',
          type: 'image',
          options: {
              hotspot: true
          }
      },
      {
          name: 'loginAlexSubmitHoursLink',
          title: 'Login Alex Submit Hours Link',
          type: 'string'
      },
      {
          name: 'loginMikeSubmitHoursLink',
          title: 'Login Mike Submit Hours Link',
          type: 'string'
      },
      {
          name: 'loginAlexTimesheetLink',
          title: 'Login Alex Timesheet Link',
          type: 'string'
      },
      {
          name: 'loginMikeTimesheetLink',
          title: 'Login Mike Timesheet Link',
          type: 'string'
      },
      {
          name: 'loginScottSubmitHoursLink',
          title: 'Login Scott Submit Hours Link',
          type: 'string'
      },
      {
          name: 'loginScottTimesheetLink',
          title: 'Login Scott Timesheet Link',
          type: 'string'
      },
      {
          name: 'loginCalebSubmitHoursLink',
          title: 'Login Caleb Submit Hours Link',
          type: 'string'
      },
      {
          name: 'loginCalebTimesheetLink',
          title: 'Login Caleb Timesheet Link',
          type: 'string'
      },
  ],

  preview: {
    select: {
      title: 'title',
    }
  }
}
