# ListHrisTimeoffsResponseBody

## Example Usage

```typescript
import { ListHrisTimeoffsResponseBody } from "@panora/sdk/models/operations";

let value: ListHrisTimeoffsResponseBody = {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
        {
            employee: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            approver: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            status: "REQUESTED",
            employeeNote: "Annual vacation",
            units: "DAYS",
            amount: 5,
            requestType: "VACATION",
            startTime: new Date("2024-07-01T09:00:00Z"),
            endTime: new Date("2024-07-05T17:00:00Z"),
            fieldMappings: {},
            id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            remoteId: "timeoff_1234",
            remoteData: {},
            remoteCreatedAt: new Date("2024-06-15T12:00:00Z"),
            createdAt: new Date("2024-06-15T12:00:00Z"),
            modifiedAt: new Date("2024-06-15T12:00:00Z"),
            remoteWasDeleted: false,
        },
    ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `prevCursor`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `nextCursor`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `data`                                                                                       | [components.UnifiedHrisTimeoffOutput](../../models/components/unifiedhristimeoffoutput.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |