# ListHrisTimesheetentriesResponse

## Example Usage

```typescript
import { ListHrisTimesheetentriesResponse } from "@panora/sdk/models/operations";

let value: ListHrisTimesheetentriesResponse = {
  result: {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
      {
        hoursWorked: 40,
        startTime: new Date("2024-10-01T08:00:00Z"),
        endTime: new Date("2024-10-01T16:00:00Z"),
        employeeId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        remoteWasDeleted: false,
        fieldMappings: {},
        id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        remoteId: "id_1",
        remoteCreatedAt: new Date("2024-10-01T12:00:00Z"),
        createdAt: new Date("2024-10-01T12:00:00Z"),
        modifiedAt: new Date("2024-10-01T12:00:00Z"),
        remoteData: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                           | [operations.ListHrisTimesheetentriesResponseBody](../../models/operations/listhristimesheetentriesresponsebody.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |