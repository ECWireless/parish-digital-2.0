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
    // {
    //     name: 'introPhoto',
    //     title: 'Intro Photo',
    //     type: 'image',
    //     options: {
    //         hotspot: true
    //     }
    // },
    
    {
        name: 'introVideo',
        title: 'Intro Video',
        type: 'file'
    },
    {
        name: 'introBrands',
        title: 'Intro Brands',
        type: 'array',
        of: [
            {
                type: 'image',
                options: {
                    hotspot: true
                }
            }
        ]
    },
    {
        name: 'testimonialsHeading1',
        title: 'Testimonials Heading 1',
        type: 'string'
    },
    {
        name: 'testimonialsHeading2',
        title: 'Testimonials Heading 2',
        type: 'string'
    },
    {
        name: 'testimonialsTestimonial1',
        title: 'Testimonials Testimonial 1',
        type: 'blockContent',
    },
    {
        name: 'testimonialsLogo1',
        title: 'Testimonials Logo 1',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'testimonialsTestimonial2',
        title: 'Testimonials Testimonial 2',
        type: 'blockContent',
    },
    {
        name: 'testimonialsLogo2',
        title: 'Testimonials Logo 2',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'testimonialsTestimonial3',
        title: 'Testimonials Testimonial 3',
        type: 'blockContent',
    },
    {
        name: 'testimonialsLogo3',
        title: 'Testimonials Logo 3',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'testimonialsTestimonial4',
        title: 'Testimonials Testimonial 4',
        type: 'blockContent',
    },
    {
        name: 'testimonialsLogo4',
        title: 'Testimonials Logo 4',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'testimonialsTestimonial5',
        title: 'Testimonials Testimonial 5',
        type: 'blockContent',
    },
    {
        name: 'testimonialsLogo5',
        title: 'Testimonials Logo 5',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'testimonialsTestimonial6',
        title: 'Testimonials Testimonial 6',
        type: 'blockContent',
    },
    {
        name: 'testimonialsLogo6',
        title: 'Testimonials Logo 6',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'testimonialsTestimonial7',
        title: 'Testimonials Testimonial 7',
        type: 'blockContent',
    },
    {
        name: 'testimonialsLogo7',
        title: 'Testimonials Logo 7',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'testimonialsTestimonial8',
        title: 'Testimonials Testimonial 8',
        type: 'blockContent',
    },
    {
        name: 'testimonialsLogo8',
        title: 'Testimonials Logo 8',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'testimonialsTestimonial9',
        title: 'Testimonials Testimonial 9',
        type: 'blockContent',
    },
    {
        name: 'testimonialsLogo9',
        title: 'Testimonials Logo 9',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'testimonialsTestimonial10',
        title: 'Testimonials Testimonial 10',
        type: 'blockContent',
    },
    {
        name: 'testimonialsLogo10',
        title: 'Testimonials Logo 10',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'testimonialsTestimonial11',
        title: 'Testimonials Testimonial 11',
        type: 'blockContent',
    },
    {
        name: 'testimonialsLogo11',
        title: 'Testimonials Logo 11',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'testimonialsTestimonial12',
        title: 'Testimonials Testimonial 12',
        type: 'blockContent',
    },
    {
        name: 'testimonialsLogo12',
        title: 'Testimonials Logo 12',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'awardsHeading',
        title: 'Awards Heading',
        type: 'string'
    },
    {
        name: 'awardsAward1Image',
        title: 'Awards Award 1 Image',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'awardsAward1Link',
        title: 'Awards Award 1 Link',
        type: 'string'
    },
    {
        name: 'awardsAward2Image',
        title: 'Awards Award 2 Image',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'awardsAward2Link',
        title: 'Awards Award 2 Link',
        type: 'string'
    },
    {
        name: 'awardsAward3Image',
        title: 'Awards Award 3 Image',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'awardsAward3Link',
        title: 'Awards Award 3 Link',
        type: 'string'
    },
    {
        name: 'awardsAward4Image',
        title: 'Awards Award 4 Image',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'awardsAward4Link',
        title: 'Awards Award 4 Link',
        type: 'string'
    },
    {
        name: 'processHeading',
        title: 'Process Heading',
        type: 'string'
    },
    {
        name: 'processParagraph',
        title: 'Process Paragraph',
        type: 'string'
    },
    {
        name: 'processStep1Heading',
        title: 'Process Step 1 Heading',
        type: 'string'
    },
    {
        name: 'processStep1Paragraph',
        title: 'Process Step 1 Paragraph',
        type: 'string'
    },
    {
        name: 'processStep1Icon',
        title: 'Process Step 1 Icon',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'processStep2Heading',
        title: 'Process Step 2 Heading',
        type: 'string'
    },
    {
        name: 'processStep2Paragraph',
        title: 'Process Step 2 Paragraph',
        type: 'string'
    },
    {
        name: 'processStep2Icon',
        title: 'Process Step 2 Icon',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'processStep3Heading',
        title: 'Process Step 3 Heading',
        type: 'string'
    },
    {
        name: 'processStep3Paragraph',
        title: 'Process Step 3 Paragraph',
        type: 'string'
    },
    {
        name: 'processStep3Icon',
        title: 'Process Step 3 Icon',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'processStep4Heading',
        title: 'Process Step 4 Heading',
        type: 'string'
    },
    {
        name: 'processStep4Paragraph',
        title: 'Process Step 4 Paragraph',
        type: 'string'
    },
    {
        name: 'processStep4Icon',
        title: 'Process Step 4 Icon',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'processStep5Heading',
        title: 'Process Step 5 Heading',
        type: 'string'
    },
    {
        name: 'processStep5Paragraph',
        title: 'Process Step 5 Paragraph',
        type: 'string'
    },
    {
        name: 'processStep5Icon',
        title: 'Process Step 5 Icon',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'commitmentHeading',
        title: 'Commitment Heading',
        type: 'string'
    },
    {
        name: 'commitmentBody',
        title: 'Commitment Body',
        type: 'blockContent',
    },
    {
        name: 'commitmentImage',
        title: 'Commitment Image',
        type: 'image',
        options: {
            hotspot: true
        }
    },
    {
        name: 'setsUsApartHeading',
        title: 'Sets Us Apart Heading',
        type: 'string'
    },
    {
        name: 'setsUsApartBody',
        title: 'Sets Us Apart Body',
        type: 'blockContent',
    },
    {
        name: 'setsUsApartImage',
        title: 'Sets Us Apart Image',
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
