import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { markdownSchema } from 'sanity-plugin-markdown'
import { documentInternationalization } from '@sanity/document-internationalization';

export default defineConfig({
  name: 'default',
  title: 'Astro Sanity Starter',

  projectId: (process.env.SANITY_STUDIO_PROJECT_ID ?? process.env.SANITY_PROJECT_ID) as string,
  dataset: (process.env.SANITY_STUDIO_DATASET ?? process.env.SANITY_DATASET) as string,

  plugins: [
      deskTool(),
      visionTool(),
      markdownSchema(),
    documentInternationalization({
      supportedLanguages: [
        {id: 'de', title: 'German'},
        {id: 'ua', title: 'Ukrainian'}
      ],
      schemaTypes: ['page'],
    })
  ],

  schema: {
    types: schemaTypes,
  },
})
