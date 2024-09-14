# ListTicketingCollectionsResponse

## Example Usage

```typescript
import { ListTicketingCollectionsResponse } from "@panora/sdk/models/operations";

let value: ListTicketingCollectionsResponse = {
  result: {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
      {
        name: "My Personal Collection",
        description: "Collect issues",
        collectionType: "PROJECT",
        id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        remoteId: "id_1",
        remoteData: {
          "fav_dish": "broccoli",
          "fav_color": "red",
        },
        createdAt: new Date("2024-10-01T12:00:00Z"),
        modifiedAt: new Date("2024-10-01T12:00:00Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                           | [operations.ListTicketingCollectionsResponseBody](../../models/operations/listticketingcollectionsresponsebody.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |