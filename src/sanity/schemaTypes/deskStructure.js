import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      // Add your custom structure here
      S.listItem()
        .title('Products')
        .schemaType('products')
        .child(S.documentTypeList('products').title('Products')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      // Add other document types here
      ...S.documentTypeListItems().filter(
        (listItem) => !['products', 'category'].includes(listItem.getId())
      ),
    ]);