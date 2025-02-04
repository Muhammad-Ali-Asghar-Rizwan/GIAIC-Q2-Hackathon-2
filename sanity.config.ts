// 'use client'

// /**
//  * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
//  */

// import {visionTool} from '@sanity/vision'
// import {defineConfig} from 'sanity'
// // import {structureTool} from 'sanity/structure'

// // Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
// import {apiVersion, dataset, projectId} from './src/sanity/env'
// import {schema} from './src/sanity/schemaTypes'
// import {structure} from './src/sanity/structure'

// export default defineConfig({
//   basePath: '/studio',
//   projectId : "p98zwfgl",
//   dataset,
//   // Add and edit the content schema in the './sanity/schemaTypes' folder
//   schema,
//   plugins: [
//     // structureTool({structure}),
//     // Vision is for querying with GROQ from inside the Studio
//     // https://www.sanity.io/docs/the-vision-plugin
//     visionTool({defaultApiVersion: apiVersion}),
//   ],
// })










import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import  schemas  from './src/sanity/schemaTypes/schemas';
import deskStructure from './src/sanity/schemaTypes/deskStructure';
export default defineConfig({
  name: 'default',
  title: 'Your Project Title',

  projectId: 'p98zwfgl',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemas,
  },
});