import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Sider',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Rekkefølge',
      type: 'number',
    }),
    defineField({
      name: 'slug',
      title: 'Unik Id',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'content',
      title: 'Innhold',
      type: 'blockContent',
    }),
    defineField({
      name: 'sideContent',
      title: 'Sideinnhold',
      type: 'blockContent',
    }),
  ],
})
