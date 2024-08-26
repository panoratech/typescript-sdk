# ListCrmTaskResponseBody

## Example Usage

```typescript
import { UnifiedCrmTaskOutputStatus } from "@panora/sdk/models/components";
import { ListCrmTaskResponseBody } from "@panora/sdk/models/operations";

let value: ListCrmTaskResponseBody = {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
        {
            subject: "Answer customers",
            content: "Prepare email campaign",
            status: UnifiedCrmTaskOutputStatus.Pending,
            dueDate: "2024-10-01T12:00:00Z",
            finishedDate: "2024-10-01T12:00:00Z",
            userId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            companyId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            dealId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
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
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `prevCursor`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `nextCursor`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [components.UnifiedCrmTaskOutput](../../models/components/unifiedcrmtaskoutput.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |