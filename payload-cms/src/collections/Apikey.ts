import type { CollectionConfig } from 'payload'
import CollectionGroups from '@/shared/CollectionGroups'

export const ApiKey: CollectionConfig = {
  slug: 'apikey',
  admin: {
    group: CollectionGroups.SystemCollections,
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'Description',
      type: 'textarea',
    },
  ],
  auth: {
    useAPIKey: true,
    disableLocalStrategy: true,
  },
}
