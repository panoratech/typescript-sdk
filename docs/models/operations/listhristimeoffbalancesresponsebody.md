# ListHrisTimeoffbalancesResponseBody

## Example Usage

```typescript
import { PolicyType } from "@panora/sdk/models/components";
import { ListHrisTimeoffbalancesResponseBody } from "@panora/sdk/models/operations";

let value: ListHrisTimeoffbalancesResponseBody = {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
        {
            balance: 80,
            employeeId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            used: 40,
            policyType: PolicyType.Vacation,
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
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `prevCursor`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `nextCursor`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | [components.UnifiedHrisTimeoffbalanceOutput](../../models/components/unifiedhristimeoffbalanceoutput.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |