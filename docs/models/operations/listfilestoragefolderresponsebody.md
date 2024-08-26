# ListFilestorageFolderResponseBody

## Example Usage

```typescript
import { ListFilestorageFolderResponseBody } from "@panora/sdk/models/operations";

let value: ListFilestorageFolderResponseBody = {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
        {
            name: "school",
            size: "2048",
            folderUrl: "https://example.com/school",
            description: "All things school related",
            driveId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            parentFolderId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            sharedLink: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            permission: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
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

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `prevCursor`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `nextCursor`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `data`                                                                                                   | [components.UnifiedFilestorageFolderOutput](../../models/components/unifiedfilestoragefolderoutput.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |