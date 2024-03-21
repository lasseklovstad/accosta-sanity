import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Tekstboks',
  name: 'textBlock',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Tittel', type: 'string'}),
    defineField({name: 'text', title: 'Tekst', type: 'text'}),
  ],
})
