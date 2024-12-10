# UnifiedTicketingTicketOutput

## Example Usage

```typescript
import { UnifiedTicketingTicketOutput } from "@panora/sdk/models/components";

let value: UnifiedTicketingTicketOutput = {
  name: "Customer Service Inquiry",
  status: "OPEN",
  description: "Help customer",
  dueDate: new Date("2024-10-01T12:00:00Z"),
  type: "BUG",
  parentTicket: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  collections: [
    "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  ],
  tags: [
    "my_tag",
    "urgent_tag",
  ],
  completedAt: new Date("2024-10-01T12:00:00Z"),
  priority: "HIGH",
  assignedTo: [
    "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  ],
  comment: {
    body: "Assigned to Eric !",
  },
  accountId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  contactId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  attachments: [
    "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  ],
  fieldMappings: {
    "fav_dish": "broccoli",
    "fav_color": "red",
  },
  id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  remoteId: "id_1",
  remoteData: {
    "key1": "value1",
    "key2": 42,
    "key3": true,
  },
  createdAt: new Date("2024-10-01T12:00:00Z"),
  modifiedAt: new Date("2024-10-01T12:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the ticket                                                                        | Customer Service Inquiry                                                                      |
| `status`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The status of the ticket. Authorized values are OPEN or CLOSED.                               | OPEN                                                                                          |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The description of the ticket                                                                 | Help customer                                                                                 |
| `dueDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date the ticket is due                                                                    | 2024-10-01T12:00:00Z                                                                          |
| `type`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The type of the ticket. Authorized values are PROBLEM, QUESTION, or TASK                      | BUG                                                                                           |
| `parentTicket`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the parent ticket                                                                 | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `collections`                                                                                 | *components.Collections*[]                                                                    | :heavy_minus_sign:                                                                            | The collection UUIDs the ticket belongs to                                                    | [<br/>"801f9ede-c698-4e66-a7fc-48d19eebaa4f"<br/>]                                            |
| `tags`                                                                                        | *components.Tags*[]                                                                           | :heavy_minus_sign:                                                                            | The tags names of the ticket                                                                  | [<br/>"my_tag",<br/>"urgent_tag"<br/>]                                                        |
| `completedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date the ticket has been completed                                                        | 2024-10-01T12:00:00Z                                                                          |
| `priority`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The priority of the ticket. Authorized values are HIGH, MEDIUM or LOW.                        | HIGH                                                                                          |
| `assignedTo`                                                                                  | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | The users UUIDs the ticket is assigned to                                                     | [<br/>"801f9ede-c698-4e66-a7fc-48d19eebaa4f"<br/>]                                            |
| `comment`                                                                                     | [components.Comment](../../models/components/comment.md)                                      | :heavy_minus_sign:                                                                            | The comment of the ticket                                                                     | {<br/>"content": "Assigned the issue !"<br/>}                                                 |
| `accountId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the account which the ticket belongs to                                           | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `contactId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the contact which the ticket belongs to                                           | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `attachments`                                                                                 | *components.Attachments*[]                                                                    | :heavy_minus_sign:                                                                            | The attachements UUIDs tied to the ticket                                                     | [<br/>"801f9ede-c698-4e66-a7fc-48d19eebaa4f"<br/>]                                            |
| `fieldMappings`                                                                               | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The custom field mappings of the ticket between the remote 3rd party & Panora                 | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the ticket                                                                        | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The id of the ticket in the context of the 3rd Party                                          | id_1                                                                                          |
| `remoteData`                                                                                  | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The remote data of the ticket in the context of the 3rd Party                                 | {<br/>"key1": "value1",<br/>"key2": 42,<br/>"key3": true<br/>}                                |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The created date of the object                                                                | 2024-10-01T12:00:00Z                                                                          |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The modified date of the object                                                               | 2024-10-01T12:00:00Z                                                                          |