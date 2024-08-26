# UnifiedTicketingTicketInputCollections

## Example Usage

```typescript
import { CollectionType, UnifiedTicketingTicketInputCollections } from "@panora/sdk/models/components";

let value: UnifiedTicketingTicketInputCollections = {
    name: "My Personal Collection",
    description: "Collect issues",
    collectionType: CollectionType.Project,
    id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    remoteId: "id_1",
    remoteData: {
        fav_dish: "broccoli",
        fav_color: "red",
    },
    createdAt: new Date("2024-10-01T12:00:00Z"),
    modifiedAt: new Date("2024-10-01T12:00:00Z"),
};
```

## Supported Types

### `string`

```typescript
const value: string = /* values here */
```

### `components.UnifiedTicketingCollectionOutput`

```typescript
const value: components.UnifiedTicketingCollectionOutput = /* values here */
```

