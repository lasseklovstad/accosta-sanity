import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blockImage',
  type: 'object',
  title: 'Linje med bilder',
  fields: [
    defineField({
      name: 'size',
      type: 'number',
      title: 'Størrelse',
    }),
    defineField({
      name: 'showAltText',
      type: 'boolean',
      title: 'Vis alt-tekst',
    }),
    defineField({
      name: 'lineImages',
      title: 'Bilder',
      description: 'Bildene legger seg etter hverandre i en linje.',
      type: 'array',
      of: [{type: 'reference', name: 'imageWithLink', to: [{type: 'imageWithLink'}]}],
    }),
  ],
})
