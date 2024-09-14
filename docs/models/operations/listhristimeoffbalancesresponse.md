# ListHrisTimeoffbalancesResponse

## Example Usage

```typescript
import { ListHrisTimeoffbalancesResponse } from "@panora/sdk/models/operations";

let value: ListHrisTimeoffbalancesResponse = {
  result: {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
      {
        balance: 80,
        employeeId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        used: 40,
        policyType: "VACATION",
        fieldMappings: {},
        id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        remoteId: "timeoff_balance_1234",
        remoteData: {},
        remoteCreatedAt: "2024-06-15T12:00:00Z",
        createdAt: "2024-06-15T12:00:00Z",
        modifiedAt: "2024-06-15T12:00:00Z",
        remoteWasDeleted: false,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                         | [operations.ListHrisTimeoffbalancesResponseBody](../../models/operations/listhristimeoffbalancesresponsebody.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |