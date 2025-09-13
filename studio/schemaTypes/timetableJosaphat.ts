import { defineType, defineField } from 'sanity'
import { SquareIcon } from '@sanity/icons';

export default defineType({
    name: 'timetableJosaphat',
    title: 'Calendar Josaphatskapelle',
    type: 'object',
    fields: [
        defineField({
            name: 'monthDate',
            title: 'Month Date',
            type: 'string',
            description: 'Format MM-YYYY'
        }),
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
