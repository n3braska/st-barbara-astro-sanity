import { defineType, defineField } from 'sanity'

export default defineType({
    type: 'object',
    name: 'dayItem',
    fields: [
        defineField({
            name: 'd',
            title: 'Day Number',
            type: 'number',
            validation: Rule => Rule.min(1).max(31),
        }),
        defineField({
            name: 'event',
            title: 'Event',
            type: 'array',
            of: [{ type: 'eventItem' }]
        }),
        defineField({
            name: 'occasion',
            title: 'Occasion',
            type: 'string'
        }),
    ],
})