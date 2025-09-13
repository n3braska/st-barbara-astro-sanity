import { defineType, defineField } from 'sanity'

export default defineType({
    type: 'object',
    name: 'eventItem',
    fields: [
        defineField({
            name: 'time',
            title: 'Time',
            type: 'string',
            description: 'Use format H:mm'
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
    ],
})