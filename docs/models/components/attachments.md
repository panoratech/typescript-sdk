# Attachments

## Example Usage

```typescript
import { Attachments } from "@panora/sdk/models/components";

let value: Attachments = {
    fileName: "features_planning.pdf",
    fileUrl: "https://example.com/features_planning.pdf",
    uploader: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    ticketId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    commentId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    fieldMappings: {
        fav_dish: "broccoli",
        fav_color: "red",
    },
};
```

## Supported Types

### `string`

```typescript
const value: string = /* values here */
```

### `components.UnifiedTicketingAttachmentInput`

```typescript
const value: components.UnifiedTicketingAttachmentInput = /* values here */
```

