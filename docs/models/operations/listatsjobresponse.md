# ListAtsJobResponse

## Example Usage

```typescript
import { ListAtsJobResponse } from "@panora/sdk/models/operations";

let value: ListAtsJobResponse = {
    result: {
        prevCursor: "<value>",
        nextCursor: "<value>",
        data: [
            {
                name: "Financial Analyst",
                description: "Extract financial data and write detailed investment thesis",
                code: "JOB123",
                status: "OPEN",
                type: "POSTING",
                confidential: true,
                departments: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
                offices: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
                managers: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
                recruiters: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
                remoteCreatedAt: new Date("2024-10-01T12:00:00Z"),
                remoteUpdatedAt: new Date("2024-10-01T12:00:00Z"),
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
                modifiedAt: new Date("2023-10-01T12:00:00Z"),
            },
        ],
    },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [operations.ListAtsJobResponseBody](../../models/operations/listatsjobresponsebody.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |