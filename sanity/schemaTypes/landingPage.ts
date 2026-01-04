import { defineField, defineType } from 'sanity'

export const landingPage = defineType({
    name: 'landingPage',
    title: 'Landing Page',
    type: 'document',
    fields: [
        defineField({
            name: 'heroHeadline',
            title: 'Hero Headline',
            type: 'string',
        }),
        defineField({
            name: 'heroDescription',
            title: 'Hero Description',
            type: 'text',
        }),
        defineField({
            name: 'theoryBlocks',
            title: 'Theory of Change Blocks',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'theoryBlock',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'icon',
                            title: 'Icon Name (Lucide)',
                            type: 'string',
                            description: 'e.g. "Zap", "Users", "Globe"'
                        }),
                        defineField({
                            name: 'content',
                            title: 'Content',
                            type: 'text',
                        }),
                    ],
                },
            ],
        }),
    ],
})
