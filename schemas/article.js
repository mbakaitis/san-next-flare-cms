export default {
  name: 'article',
  title: 'Written Articles',
  type: 'document',
  fieldsets: [
    {
      name: 'authors',
      title: 'Update Details, Authors, &c.',

    },
    {
      name: 'seo',
      title: 'SEO fields and meta',

    },
    {
      name: 'editorial',
      title: 'Document author, update info, and more',

    },
    {
      name: 'content',
      title: 'Main Content',

    }
  ],
  fields: [
    {
      name: 'image',
      title: 'Article Image (header)',
      type: 'image'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Article Title',
      fieldset: 'content'
    },
    {
      name: 'subtitle',
      title: 'Subtitle (optional)',
      type: 'string',
      fieldset: 'content'
    },
    {
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      options: {
        source: 'articleTitle',
        maxLength: 200,
        slugify: input => input.toLowerCase().replace(/\s+/g, '-').replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "").slice(0, 200)
      },
      fieldset: 'content'
    },

    {
      name: 'description',
      title: 'Article Meta Description',
      type: 'text',
      fieldset: 'seo',
      validation: Rule => Rule.max(150)
    },
    {
      name: 'introQuote',
      title: 'Article Introductory Quote',
      type: 'text',
      fieldset: 'content'
    },
    {
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [{ type: 'articleSection' }],
      fieldset: 'content'
    },
    {
      type: 'array',
      name: 'keywordList',
      title: 'Keyword List',
      of: [{
        type: 'reference',
        to: [{ type: 'keyword' }]
      }],
      fieldset: 'seo'
    }
  ]
}