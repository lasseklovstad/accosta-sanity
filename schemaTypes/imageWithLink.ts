import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imageWithLink',
  type: 'document',
  title: 'Bilder',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Bilde',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Beskrivelse',
    }),
    defineField({
      name: 'link',
      type: 'url',
      title: 'Lenke',
    }),
  ],
})
