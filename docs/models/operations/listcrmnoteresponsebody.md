# ListCrmNoteResponseBody

## Example Usage

```typescript
import { ListCrmNoteResponseBody } from "@panora/sdk/models/operations";

let value: ListCrmNoteResponseBody = {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
        {
            content: "My notes taken during the meeting",
            userId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            companyId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            contactId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            dealId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            fieldMappings: {
                fav_dish: "broccoli",
                fav_color: "red",
            },
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

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `prevCursor`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `nextCursor`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [components.UnifiedCrmNoteOutput](../../models/components/unifiedcrmnoteoutput.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |