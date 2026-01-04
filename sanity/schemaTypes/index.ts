import { type SchemaTypeDefinition } from 'sanity'
import { landingPage } from './landingPage'
import { hackathon } from './hackathon'
import { blogPost } from './blogPost'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [landingPage, hackathon, blogPost],
}
