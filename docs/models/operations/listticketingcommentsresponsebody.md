# ListTicketingCommentsResponseBody

## Example Usage

```typescript
import { ListTicketingCommentsResponseBody } from "@panora/sdk/models/operations";

let value: ListTicketingCommentsResponseBody = {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
        {
            body: "Assigned to Eric !",
            htmlBody: "<p>Assigned to Eric !</p>",
            isPrivate: false,
            creatorType: "USER",
            ticketId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            contactId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            userId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            attachments: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
            id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            remoteId: "id_1",
            remoteData: {
                fav_dish: "broccoli",
                fav_color: "red",
            },
            createdAt: new Date("2024-10-01T12:00:00Z"),
            modifiedAt: new Date("2024-10-01T12:00:00Z"),
        },
    ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `prevCursor`                                                                                           | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `nextCursor`                                                                                           | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `data`                                                                                                 | [components.UnifiedTicketingCommentOutput](../../models/components/unifiedticketingcommentoutput.md)[] | :heavy_check_mark:                                                                                     | N/A                                                                                                    |