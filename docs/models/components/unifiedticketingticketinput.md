# UnifiedTicketingTicketInput

## Example Usage

```typescript
import {
  UnifiedTicketingTicketInput,
  UnifiedTicketingTicketInputCreatorType,
  UnifiedTicketingTicketInputPriority,
  UnifiedTicketingTicketInputStatus,
  UnifiedTicketingTicketInputType,
} from "@panora/sdk/models/components";

let value: UnifiedTicketingTicketInput = {
    name: "Customer Service Inquiry",
    status: UnifiedTicketingTicketInputStatus.Open,
    description: "Help customer",
    dueDate: new Date("2024-10-01T12:00:00Z"),
    type: UnifiedTicketingTicketInputType.Bug,
    parentTicket: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    collections: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
    tags: ["my_tag", "urgent_tag"],
    completedAt: new Date("2024-10-01T12:00:00Z"),
    priority: UnifiedTicketingTicketInputPriority.High,
    assignedTo: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
    comment: {
        body: "Assigned to Eric !",
        htmlBody: "<p>Assigned to Eric !</p>",
        isPrivate: false,
        creatorType: UnifiedTicketingTicketInputCreatorType.User,
        ticketId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        contactId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        userId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        attachments: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
    },
    accountId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    contactId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    attachments: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
    fieldMappings: {
        fav_dish: "broccoli",
        fav_color: "red",
    },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The name of the ticket                                                                                           | Customer Service Inquiry                                                                                         |
| `status`                                                                                                         | [components.UnifiedTicketingTicketInputStatus](../../models/components/unifiedticketingticketinputstatus.md)     | :heavy_minus_sign:                                                                                               | The status of the ticket. Authorized values are OPEN or CLOSED.                                                  | OPEN                                                                                                             |
| `description`                                                                                                    | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The description of the ticket                                                                                    | Help customer                                                                                                    |
| `dueDate`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_minus_sign:                                                                                               | The date the ticket is due                                                                                       | 2024-10-01T12:00:00Z                                                                                             |
| `type`                                                                                                           | [components.UnifiedTicketingTicketInputType](../../models/components/unifiedticketingticketinputtype.md)         | :heavy_minus_sign:                                                                                               | The type of the ticket. Authorized values are PROBLEM, QUESTION, or TASK                                         | BUG                                                                                                              |
| `parentTicket`                                                                                                   | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The UUID of the parent ticket                                                                                    | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                                             |
| `collections`                                                                                                    | *components.UnifiedTicketingTicketInputCollections*[]                                                            | :heavy_minus_sign:                                                                                               | The collection UUIDs the ticket belongs to                                                                       | [<br/>"801f9ede-c698-4e66-a7fc-48d19eebaa4f"<br/>]                                                               |
| `tags`                                                                                                           | *components.UnifiedTicketingTicketInputTags*[]                                                                   | :heavy_minus_sign:                                                                                               | The tags names of the ticket                                                                                     | [<br/>"my_tag",<br/>"urgent_tag"<br/>]                                                                           |
| `completedAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_minus_sign:                                                                                               | The date the ticket has been completed                                                                           | 2024-10-01T12:00:00Z                                                                                             |
| `priority`                                                                                                       | [components.UnifiedTicketingTicketInputPriority](../../models/components/unifiedticketingticketinputpriority.md) | :heavy_minus_sign:                                                                                               | The priority of the ticket. Authorized values are HIGH, MEDIUM or LOW.                                           | HIGH                                                                                                             |
| `assignedTo`                                                                                                     | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | The users UUIDs the ticket is assigned to                                                                        | [<br/>"801f9ede-c698-4e66-a7fc-48d19eebaa4f"<br/>]                                                               |
| `comment`                                                                                                        | [components.UnifiedTicketingTicketInputComment](../../models/components/unifiedticketingticketinputcomment.md)   | :heavy_minus_sign:                                                                                               | The comment of the ticket                                                                                        | {<br/>"content": "Assigned the issue !"<br/>}                                                                    |
| `accountId`                                                                                                      | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The UUID of the account which the ticket belongs to                                                              | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                                             |
| `contactId`                                                                                                      | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The UUID of the contact which the ticket belongs to                                                              | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                                             |
| `attachments`                                                                                                    | *components.UnifiedTicketingTicketInputAttachments*[]                                                            | :heavy_minus_sign:                                                                                               | The attachements UUIDs tied to the ticket                                                                        | [<br/>"801f9ede-c698-4e66-a7fc-48d19eebaa4f"<br/>]                                                               |
| `fieldMappings`                                                                                                  | Record<string, *any*>                                                                                            | :heavy_minus_sign:                                                                                               | The custom field mappings of the ticket between the remote 3rd party & Panora                                    | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                                       |