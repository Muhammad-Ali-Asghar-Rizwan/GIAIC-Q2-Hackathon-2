import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import order from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products , order],
}
