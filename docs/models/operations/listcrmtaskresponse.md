# ListCrmTaskResponse

## Example Usage

```typescript
import { ListCrmTaskResponse } from "@panora/sdk/models/operations";

let value: ListCrmTaskResponse = {
  result: {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
      {
        subject: "Answer customers",
        content: "Prepare email campaign",
        status: "PENDING",
        dueDate: "2024-10-01T12:00:00Z",
        finishedDate: "2024-10-01T12:00:00Z",
        userId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        companyId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        dealId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
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
      },
    ],
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [operations.ListCrmTaskResponseBody](../../models/operations/listcrmtaskresponsebody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |