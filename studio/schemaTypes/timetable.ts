import {defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'
import timetableJesuiten from './timetableJesuiten';
import timetableJosaphat from './timetableJosaphat';

export default defineType({
    name: 'timetable',
    title: 'Timetable',
    type: 'document',
    icon: HomeIcon,
    groups: [
        {
            name: 'content',
            title: 'Content',
            default: true,
        },
    ],
    fields: [
        defineField({
            name: 'published',
            title: 'Published',
            type: 'boolean',
        }),
        defineField({
            name: 'month',
            title: 'Month',
            type: 'string',
            options: {
                list: [
                    { title: 'January', value: 'January' },
                    { title: 'February', value: 'February' },
                    { title: 'March', value: 'March' },
                    { title: 'April', value: 'April' },
                    { title: 'May', value: 'May' },
                    { title: 'June', value: 'June' },
                    { title: 'July', value: 'July' },
                    { title: 'August', value: 'August' },
                    { title: 'September', value: 'September' },
                    { title: 'October', value: 'October' },
                    { title: 'November', value: 'November' },
                    { title: 'December', value: 'December' },
                ],
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'jesuitenTimetable',
            title: 'Jesuiten Timetable',
            type: 'object',
            fields: timetableJesuiten.fields
        }),
        defineField({
            name: 'josaphatTimetable',
            title: 'Josaphat Timetable',
            type: 'object',
            fields: timetableJosaphat.fields
        }),
    ],
    preview: {
        select: {
            month: 'month'
        },
        prepare(selection) {
            return {
                title: `${selection.month || ''}`,
                subtitle: 'Monthly Timetable',
            }
        }
    },
})
