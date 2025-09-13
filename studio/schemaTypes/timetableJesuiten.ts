import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'calendarJesuiten',
    title: 'Calendar Jesuitenkirche',
    type: 'object',
    fields: [
        defineField({
            name: 'announcement',
            title: 'Announcement',
            type: 'string',
        }),
        defineField({
            name: 'days',
            title: 'Days',
            type: 'array',
            of: [{ type: 'dayItem' }],
            validation: Rule => Rule.required().min(1),
        })
    ],
    preview: {
        select: {
            monthDate: 'monthDate'
        },
        prepare(selection) {
            return {
                title: selection.monthDate
            }
        },
    }
})
