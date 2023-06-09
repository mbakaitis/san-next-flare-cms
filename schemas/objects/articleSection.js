export default {
  title: 'Article Sections',
  name: 'articleSection',
  type: 'object',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Section Image'
    }, {
      name: 'title',
      type: 'string',
      title: 'Section Title'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Section Subtitle'
    },
    {
      name: 'meta',
      title: 'Topic Meta (optional, 155 char max)',
      type: 'string',
      validation: Rule => Rule.max(155)
    },
    {
      name: 'content',
      title: 'Content Body',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      type: 'array',
      name: 'referenceUrlList',
      title: 'Reference URL List',
      of: [{ type: 'referenceUrl' }
      ]
    }
  ]
}