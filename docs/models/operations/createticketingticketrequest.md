# CreateTicketingTicketRequest

## Example Usage

```typescript
import { CreateTicketingTicketRequest } from "@panora/sdk/models/operations";

let value: CreateTicketingTicketRequest = {
  xConnectionToken: "<value>",
  remoteData: false,
  unifiedTicketingTicketInput: {
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
      htmlBody: "<p>Assigned to Eric !</p>",
      isPrivate: false,
      creatorType: "USER",
      ticketId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      contactId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      userId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      attachments: [
        "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      ],
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
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `xConnectionToken`                                                                               | *string*                                                                                         | :heavy_check_mark:                                                                               | The connection token                                                                             |                                                                                                  |
| `remoteData`                                                                                     | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Set to true to include data from the original Ticketing software.                                | false                                                                                            |
| `unifiedTicketingTicketInput`                                                                    | [components.UnifiedTicketingTicketInput](../../models/components/unifiedticketingticketinput.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |