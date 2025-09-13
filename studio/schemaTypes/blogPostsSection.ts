import {defineField, defineType} from 'sanity'
import {SquareIcon} from '@sanity/icons'
import {SECTION_BASE_FIELDS, SECTION_BASE_GROUPS} from './sectionBase'

export default defineType({
    name: 'blogPostsSection',
    title: 'Blog Preview Section',
    type: 'object',
    icon: SquareIcon,
    groups: SECTION_BASE_GROUPS,
    fields: [
        defineField({
            name: 'maxNumberOfPosts',
            title: 'Max number of Posts',
            type: 'number'
        }),
        ...SECTION_BASE_FIELDS,
    ],
    preview: {
        select: {
            maxNumberOfPosts: 'maxNumberOfPosts'
        },
        prepare(selection) {
            return {
                title: 'Max number of Posts',
                subtitle: `${selection.maxNumberOfPosts}`
            }
        }
    }
})
