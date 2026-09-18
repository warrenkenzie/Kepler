import CollectionGroups from '@/shared/CollectionGroups'
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    group: CollectionGroups.PagesCollection,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
}
