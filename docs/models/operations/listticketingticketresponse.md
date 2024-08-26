# ListTicketingTicketResponse

## Example Usage

```typescript
import { Priority, Status, Type, UnifiedTicketingTicketOutputCreatorType } from "@panora/sdk/models/components";
import { ListTicketingTicketResponse } from "@panora/sdk/models/operations";

let value: ListTicketingTicketResponse = {
    result: {
        prevCursor: "<value>",
        nextCursor: "<value>",
        data: [
            {
                name: "Customer Service Inquiry",
                status: Status.Open,
                description: "Help customer",
                dueDate: new Date("2024-10-01T12:00:00Z"),
                type: Type.Bug,
                parentTicket: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                collections: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
                tags: ["my_tag", "urgent_tag"],
                completedAt: new Date("2024-10-01T12:00:00Z"),
                priority: Priority.High,
                assignedTo: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
                comment: {
                    body: "Assigned to Eric !",
                    htmlBody: "<p>Assigned to Eric !</p>",
                    isPrivate: false,
                    creatorType: UnifiedTicketingTicketOutputCreatorType.User,
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
                id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                remoteId: "id_1",
                remoteData: {
                    key1: "value1",
                    key2: 42,
                    key3: true,
                },
                createdAt: new Date("2024-10-01T12:00:00Z"),
                modifiedAt: new Date("2024-10-01T12:00:00Z"),
            },
        ],
    },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                 | [operations.ListTicketingTicketResponseBody](../../models/operations/listticketingticketresponsebody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |