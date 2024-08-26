# CreateTicketingCommentRequest

## Example Usage

```typescript
import { UnifiedTicketingCommentInputCreatorType } from "@panora/sdk/models/components";
import { CreateTicketingCommentRequest } from "@panora/sdk/models/operations";

let value: CreateTicketingCommentRequest = {
    xConnectionToken: "<value>",
    unifiedTicketingCommentInput: {
        body: "Assigned to Eric !",
        htmlBody: "<p>Assigned to Eric !</p>",
        isPrivate: false,
        creatorType: UnifiedTicketingCommentInputCreatorType.User,
        ticketId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        contactId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        userId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        attachments: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
    },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `xConnectionToken`                                                                                 | *string*                                                                                           | :heavy_check_mark:                                                                                 | The connection token                                                                               |
| `remoteData`                                                                                       | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | Set to true to include data from the original Ticketing software.                                  |
| `unifiedTicketingCommentInput`                                                                     | [components.UnifiedTicketingCommentInput](../../models/components/unifiedticketingcommentinput.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |