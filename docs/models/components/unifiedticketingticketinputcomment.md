# UnifiedTicketingTicketInputComment

The comment of the ticket

## Example Usage

```typescript
import { UnifiedTicketingTicketInputComment } from "@panora/sdk/models/components";

let value: UnifiedTicketingTicketInputComment = {
  body: "Assigned to Eric !",
  htmlBody: "<p>Assigned to Eric !</p>",
  isPrivate: false,
  creatorType: "USER",
  ticketId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  contactId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  userId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  attachments: [
    "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `body`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | The body of the comment                                                        | Assigned to Eric !                                                             |
| `htmlBody`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The html body of the comment                                                   | <p>Assigned to Eric !</p>                                                      |
| `isPrivate`                                                                    | *boolean*                                                                      | :heavy_minus_sign:                                                             | The public status of the comment                                               | false                                                                          |
| `creatorType`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | The creator type of the comment. Authorized values are either USER or CONTACT  | USER                                                                           |
| `ticketId`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The UUID of the ticket the comment is tied to                                  | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                           |
| `contactId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | The UUID of the contact which the comment belongs to (if no user_id specified) | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                           |
| `userId`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | The UUID of the user which the comment belongs to (if no contact_id specified) | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                           |
| `attachments`                                                                  | *components.UnifiedTicketingTicketInputCommentAttachments*[]                   | :heavy_minus_sign:                                                             | The attachements UUIDs tied to the comment                                     | [<br/>"801f9ede-c698-4e66-a7fc-48d19eebaa4f"<br/>]                             |