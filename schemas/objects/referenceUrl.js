export default {
  title: 'References',
  name: 'referenceUrl',
  type: 'object',
  fields: [
    {
      name: 'aReferenceUrl',
      type: 'url',
      title: 'URL'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Reference Description'
    },
    {
      name: 'free',
      type: 'boolean',
      title: 'True if free to view; false if Login needed'
    }
  ]
}