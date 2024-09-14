# CreateTicketingAttachmentRequest

## Example Usage

```typescript
import { CreateTicketingAttachmentRequest } from "@panora/sdk/models/operations";

let value: CreateTicketingAttachmentRequest = {
  xConnectionToken: "<value>",
  unifiedTicketingAttachmentInput: {
    fileName: "features_planning.pdf",
    fileUrl: "https://example.com/features_planning.pdf",
    uploader: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    ticketId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    commentId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    fieldMappings: {
      "fav_dish": "broccoli",
      "fav_color": "red",
    },
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `xConnectionToken`                                                                                       | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The connection token                                                                                     |
| `remoteData`                                                                                             | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | Set to true to include data from the original Ticketing software.                                        |
| `unifiedTicketingAttachmentInput`                                                                        | [components.UnifiedTicketingAttachmentInput](../../models/components/unifiedticketingattachmentinput.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |