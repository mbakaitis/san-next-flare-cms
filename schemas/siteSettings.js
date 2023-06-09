export default {
  name: 'siteSettings',
  title: 'Site Config & Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site Title',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Main Page Meta Description',
      validation: Rule => Rule.max(160)
    }
  ]
}