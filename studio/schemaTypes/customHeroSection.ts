import {defineField, defineType} from 'sanity'
import {SquareIcon} from '@sanity/icons'
import {SECTION_BASE_FIELDS, SECTION_BASE_GROUPS} from './sectionBase'

export default defineType({
    name: 'customHeroSection',
    title: 'Custom Hero Section',
    type: 'object',
    icon: SquareIcon,
    groups: SECTION_BASE_GROUPS,
    fields: [
        defineField({
            name: 'src',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'href',
            title: 'Image Link',
            type: 'url',
            description: 'Optional link for the hero image',
        }),
        defineField({
            name: 'alt',
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
        ...SECTION_BASE_FIELDS,
    ],
    preview: {
        select: {
            heading: 'heading',
            body: 'body',
        },
        prepare(selection) {
            return {
                title: `${selection.heading || selection.body || ''}`,
                subtitle: 'Hero',
            }
        }
    }
})
