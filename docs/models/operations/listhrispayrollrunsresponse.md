# ListHrisPayrollRunsResponse

## Example Usage

```typescript
import { ListHrisPayrollRunsResponse } from "@panora/sdk/models/operations";

let value: ListHrisPayrollRunsResponse = {
    result: {
        prevCursor: "<value>",
        nextCursor: "<value>",
        data: [
            {
                runState: "PAID",
                runType: "REGULAR",
                startDate: new Date("2024-01-01T00:00:00Z"),
                endDate: new Date("2024-01-15T23:59:59Z"),
                checkDate: new Date("2024-01-20T00:00:00Z"),
                fieldMappings: {},
                id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                remoteId: "payroll_run_1234",
                remoteData: {},
                remoteCreatedAt: new Date("2024-10-01T12:00:00Z"),
                createdAt: new Date("2024-10-01T12:00:00Z"),
                modifiedAt: new Date("2024-10-01T12:00:00Z"),
                remoteWasDeleted: false,
                employeePayrollRuns: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
            },
        ],
    },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                 | [operations.ListHrisPayrollRunsResponseBody](../../models/operations/listhrispayrollrunsresponsebody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |