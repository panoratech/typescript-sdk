# ListAccountingTrackingCategorysResponse

## Example Usage

```typescript
import { ListAccountingTrackingCategorysResponse } from "@panora/sdk/models/operations";

let value: ListAccountingTrackingCategorysResponse = {
    result: {
        prevCursor: "<value>",
        nextCursor: "<value>",
        data: [
            {
                name: "Department",
                status: "Active",
                categoryType: "Expense",
                parentCategory: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                fieldMappings: {},
                id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                remoteId: "tracking_category_1234",
                remoteData: {},
                createdAt: new Date("2024-06-15T12:00:00Z"),
                modifiedAt: new Date("2024-06-15T12:00:00Z"),
            },
        ],
    },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                         | [operations.ListAccountingTrackingCategorysResponseBody](../../models/operations/listaccountingtrackingcategorysresponsebody.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |