import {defineField, defineType} from 'sanity'
import {SquareIcon} from '@sanity/icons'

export default defineType({
    name: 'customHero',
    title: 'Custom Hero',
    type: 'object',
    icon: SquareIcon,
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'imageHref',
            title: 'Image Link',
            type: 'url',
            description: 'Optional link for the hero image',
        }),
        defineField({
            name: 'imageAlt',
            title: 'Image Alt Text',
            type: 'string',
            description: 'Accessibility description for the image',
        }),
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'markdown',
        }),
        defineField({
            name: 'cta',
            title: 'Call to Action',
            type: 'array',
            of: [
                { type: 'actionButton' },
                { type: 'actionLink' }
            ],
        }),
    ],
    preview: {
        select: {
            heading: 'heading',
            body: 'body',
        },
        prepare(selection) {
            return {
                title: selection.heading || '',
                subtitle: 'Custom Hero',
            }
        },
    },
})