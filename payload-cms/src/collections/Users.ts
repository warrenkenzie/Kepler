import CollectionGroups from '@/shared/CollectionGroups'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    group: CollectionGroups.SystemCollections,
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
