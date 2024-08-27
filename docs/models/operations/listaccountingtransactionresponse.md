# ListAccountingTransactionResponse

## Example Usage

```typescript
import { ListAccountingTransactionResponse } from "@panora/sdk/models/operations";

let value: ListAccountingTransactionResponse = {
    result: {
        prevCursor: "<value>",
        nextCursor: "<value>",
        data: [
            {
                transactionType: "Sale",
                number: "1001",
                transactionDate: new Date("2024-06-15T12:00:00Z"),
                totalAmount: "1000",
                exchangeRate: "1.2",
                currency: "USD",
                trackingCategories: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
                accountId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                contactId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                companyInfoId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                accountingPeriodId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                lineItems: [
                    {
                        name: "Net Income",
                        value: 100000,
                        type: "Operating Activities",
                        parentItem: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                        remoteId: "report_item_1234",
                        remoteGeneratedAt: new Date("2024-07-01T12:00:00Z"),
                        companyInfoId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                        createdAt: new Date("2024-06-15T12:00:00Z"),
                        modifiedAt: new Date("2024-06-15T12:00:00Z"),
                    },
                ],
                fieldMappings: {},
                id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                remoteId: "remote_id_1234",
                createdAt: new Date("2024-06-15T12:00:00Z"),
                remoteData: {},
                modifiedAt: new Date("2024-06-15T12:00:00Z"),
                remoteUpdatedAt: new Date("2024-06-15T12:00:00Z"),
            },
        ],
    },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                             | [operations.ListAccountingTransactionResponseBody](../../models/operations/listaccountingtransactionresponsebody.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |