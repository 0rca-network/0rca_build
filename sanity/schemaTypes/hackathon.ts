import { defineField, defineType } from 'sanity'

export const hackathon = defineType({
    name: 'hackathon',
    title: 'Hackathon',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Live', value: 'Live' },
                    { title: 'Upcoming', value: 'Upcoming' },
                    { title: 'Completed', value: 'Completed' },
                ],
            },
        }),
        defineField({
            name: 'prizePool',
            title: 'Prize Pool',
            type: 'string',
        }),
        defineField({
            name: 'dateRange',
            title: 'Date Range',
            type: 'string',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        defineField({
            name: 'about',
            title: 'About',
            type: 'text',
        }),
        defineField({
            name: 'requirements',
            title: 'Requirements',
            type: 'array',
            of: [{ type: 'string' }]
        }),
    ],
})
