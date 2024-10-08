# UnifiedTicketingCommentOutput

## Example Usage

```typescript
import { UnifiedTicketingCommentOutput } from "@panora/sdk/models/components";

let value: UnifiedTicketingCommentOutput = {
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
  id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  remoteId: "id_1",
  remoteData: {
    "fav_dish": "broccoli",
    "fav_color": "red",
  },
  createdAt: new Date("2024-10-01T12:00:00Z"),
  modifiedAt: new Date("2024-10-01T12:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `body`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The body of the comment                                                                       | Assigned to Eric !                                                                            |
| `htmlBody`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The html body of the comment                                                                  | <p>Assigned to Eric !</p>                                                                     |
| `isPrivate`                                                                                   | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | The public status of the comment                                                              | false                                                                                         |
| `creatorType`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The creator type of the comment. Authorized values are either USER or CONTACT                 | USER                                                                                          |
| `ticketId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the ticket the comment is tied to                                                 | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `contactId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the contact which the comment belongs to (if no user_id specified)                | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the user which the comment belongs to (if no contact_id specified)                | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `attachments`                                                                                 | *components.UnifiedTicketingCommentOutputAttachments*[]                                       | :heavy_minus_sign:                                                                            | The attachements UUIDs tied to the comment                                                    | [<br/>"801f9ede-c698-4e66-a7fc-48d19eebaa4f"<br/>]                                            |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the comment                                                                       | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The id of the comment in the context of the 3rd Party                                         | id_1                                                                                          |
| `remoteData`                                                                                  | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The remote data of the comment in the context of the 3rd Party                                | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                    |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The created date of the object                                                                | 2024-10-01T12:00:00Z                                                                          |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The modified date of the object                                                               | 2024-10-01T12:00:00Z                                                                          |