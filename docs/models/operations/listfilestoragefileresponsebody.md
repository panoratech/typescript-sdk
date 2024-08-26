# ListFilestorageFileResponseBody

## Example Usage

```typescript
import { ListFilestorageFileResponseBody } from "@panora/sdk/models/operations";

let value: ListFilestorageFileResponseBody = {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
        {
            name: "my_paris_photo.png",
            fileUrl: "https://example.com/my_paris_photo.png",
            mimeType: "application/pdf",
            size: "1024",
            folderId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            permission: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            sharedLink: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            fieldMappings: {
                fav_dish: "broccoli",
                fav_color: "red",
            },
            id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            remoteId: "id_1",
            remoteData: {
                fav_dish: "broccoli",
                fav_color: "red",
            },
            createdAt: new Date("2024-10-01T12:00:00Z"),
            modifiedAt: new Date("2024-10-01T12:00:00Z"),
        },
    ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `prevCursor`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `nextCursor`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `data`                                                                                               | [components.UnifiedFilestorageFileOutput](../../models/components/unifiedfilestoragefileoutput.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |