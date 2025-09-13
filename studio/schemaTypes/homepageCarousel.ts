import { defineField, defineType } from 'sanity';
import {SquareIcon} from '@sanity/icons'

export default defineType({
    name: 'homepageCarousel',
    title: 'Homepage Carousel',
    type: 'object',
    icon: SquareIcon,
    groups: [
        {
            name: 'content',
            title: 'Content',
            default: true,
        },
    ],
    fields: [
        defineField({
            name: 'images',
            title: 'Carousel Image',
            type: 'array',
            of: [{ type: 'customImage' }],
            group: 'content',
            validation: Rule => Rule.required().min(1),
        })
    ],
    preview: {
        prepare() {
            return {
                title: 'Homepage Carousel',
            }
        },
    },
})
