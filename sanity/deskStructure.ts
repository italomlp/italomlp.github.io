import { StructureResolver } from 'sanity/desk';

export const deskStructure: StructureResolver = S =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Author')
        .child(
          S.document()
            .title('Author')
            .schemaType('author')
            .documentId('author'),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        listItem => !['author'].includes(listItem?.getId() ?? ''),
      ),
    ]);
