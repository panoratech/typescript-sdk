# UnifiedTicketingAttachmentInput

## Example Usage

```typescript
import { UnifiedTicketingAttachmentInput } from "@panora/sdk/models/components";

let value: UnifiedTicketingAttachmentInput = {
  fileName: "features_planning.pdf",
  fileUrl: "https://example.com/features_planning.pdf",
  uploader: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  ticketId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  commentId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  fieldMappings: {
    "fav_dish": "broccoli",
    "fav_color": "red",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `fileName`                                                                        | *string*                                                                          | :heavy_check_mark:                                                                | The file name of the attachment                                                   | features_planning.pdf                                                             |
| `fileUrl`                                                                         | *string*                                                                          | :heavy_check_mark:                                                                | The file url of the attachment                                                    | https://example.com/features_planning.pdf                                         |
| `uploader`                                                                        | *string*                                                                          | :heavy_check_mark:                                                                | The uploader's UUID of the attachment                                             | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                              |
| `ticketId`                                                                        | *string*                                                                          | :heavy_minus_sign:                                                                | The UUID of the ticket the attachment is tied to                                  | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                              |
| `commentId`                                                                       | *string*                                                                          | :heavy_minus_sign:                                                                | The UUID of the comment the attachment is tied to                                 | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                              |
| `fieldMappings`                                                                   | Record<string, *any*>                                                             | :heavy_minus_sign:                                                                | The custom field mappings of the attachment between the remote 3rd party & Panora | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                        |