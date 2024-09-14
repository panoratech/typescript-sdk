# ListAccountingAccountsResponseBody

## Example Usage

```typescript
import { ListAccountingAccountsResponseBody } from "@panora/sdk/models/operations";

let value: ListAccountingAccountsResponseBody = {
  prevCursor: "<value>",
  nextCursor: "<value>",
  data: [
    {
      name: "Cash",
      description: "Main cash account for daily operations",
      classification: "Asset",
      type: "Current Asset",
      status: "Active",
      currentBalance: 10000,
      currency: "USD",
      accountNumber: "1000",
      parentAccount: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      companyInfoId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      fieldMappings: {},
      id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      remoteId: "account_1234",
      remoteData: {},
      createdAt: new Date("2024-06-15T12:00:00Z"),
      modifiedAt: new Date("2024-06-15T12:00:00Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `prevCursor`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `nextCursor`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `data`                                                                                                   | [components.UnifiedAccountingAccountOutput](../../models/components/unifiedaccountingaccountoutput.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |