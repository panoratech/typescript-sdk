# ListAtsAttachmentResponseBody

## Example Usage

```typescript
import { AttachmentType } from "@panora/sdk/models/components";
import { ListAtsAttachmentResponseBody } from "@panora/sdk/models/operations";

let value: ListAtsAttachmentResponseBody = {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
        {
            fileUrl: "https://example.com/file.pdf",
            fileName: "file.pdf",
            attachmentType: AttachmentType.Resume,
            remoteCreatedAt: new Date("2024-10-01T12:00:00Z"),
            remoteModifiedAt: new Date("2024-10-01T12:00:00Z"),
            candidateId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            fieldMappings: {
                fav_dish: "broccoli",
                fav_color: "red",
            },
            id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            remoteId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
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

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `prevCursor`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `nextCursor`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `data`                                                                                           | [components.UnifiedAtsAttachmentOutput](../../models/components/unifiedatsattachmentoutput.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |