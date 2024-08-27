# UnifiedTicketingCollectionOutput

## Example Usage

```typescript
import { UnifiedTicketingCollectionOutput } from "@panora/sdk/models/components";

let value: UnifiedTicketingCollectionOutput = {
    name: "My Personal Collection",
    description: "Collect issues",
    collectionType: "PROJECT",
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

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the collection                                                                    | My Personal Collection                                                                        |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The description of the collection                                                             | Collect issues                                                                                |
| `collectionType`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | The type of the collection. Authorized values are either PROJECT or LIST                      | PROJECT                                                                                       |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the collection                                                                    | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The id of the collection in the context of the 3rd Party                                      | id_1                                                                                          |
| `remoteData`                                                                                  | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The remote data of the collection in the context of the 3rd Party                             | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                    |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The created date of the object                                                                | 2024-10-01T12:00:00Z                                                                          |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The modified date of the object                                                               | 2024-10-01T12:00:00Z                                                                          |