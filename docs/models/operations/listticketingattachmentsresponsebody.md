# ListTicketingAttachmentsResponseBody

## Example Usage

```typescript
import { ListTicketingAttachmentsResponseBody } from "@panora/sdk/models/operations";

let value: ListTicketingAttachmentsResponseBody = {
  prevCursor: "<value>",
  nextCursor: "<value>",
  data: [
    {
      fileName: "features_planning.pdf",
      fileUrl: "https://example.com/features_planning.pdf",
      uploader: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      ticketId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      commentId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      fieldMappings: {
        "fav_dish": "broccoli",
        "fav_color": "red",
      },
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
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `prevCursor`                                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `nextCursor`                                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `data`                                                                                                       | [components.UnifiedTicketingAttachmentOutput](../../models/components/unifiedticketingattachmentoutput.md)[] | :heavy_check_mark:                                                                                           | N/A                                                                                                          |