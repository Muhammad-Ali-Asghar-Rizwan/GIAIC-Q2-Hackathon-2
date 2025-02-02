import { type SchemaTypeDefinition } from 'sanity'
import products from './product'
import order from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products , order],
}
