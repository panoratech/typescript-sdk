# ListAccountingExpenseResponseBody

## Example Usage

```typescript
import { UnifiedAccountingExpenseOutputCurrency } from "@panora/sdk/models/components";
import { ListAccountingExpenseResponseBody } from "@panora/sdk/models/operations";

let value: ListAccountingExpenseResponseBody = {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
        {
            transactionDate: new Date("2024-06-15T12:00:00Z"),
            totalAmount: 10000,
            subTotal: 9000,
            totalTaxAmount: 1000,
            currency: UnifiedAccountingExpenseOutputCurrency.Usd,
            exchangeRate: "1.2",
            memo: "Business lunch with client",
            accountId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            contactId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            companyInfoId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            trackingCategories: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
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
            remoteId: "expense_1234",
            remoteData: {},
            remoteCreatedAt: new Date("2024-06-15T12:00:00Z"),
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
| `data`                                                                                                   | [components.UnifiedAccountingExpenseOutput](../../models/components/unifiedaccountingexpenseoutput.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |