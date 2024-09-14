# ListAccountingAccountsResponse

## Example Usage

```typescript
import { ListAccountingAccountsResponse } from "@panora/sdk/models/operations";

let value: ListAccountingAccountsResponse = {
  result: {
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
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                       | [operations.ListAccountingAccountsResponseBody](../../models/operations/listaccountingaccountsresponsebody.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |