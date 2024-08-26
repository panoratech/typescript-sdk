# CreateAccountingExpenseRequest

## Example Usage

```typescript
import { UnifiedAccountingExpenseInputCurrency } from "@panora/sdk/models/components";
import { CreateAccountingExpenseRequest } from "@panora/sdk/models/operations";

let value: CreateAccountingExpenseRequest = {
    xConnectionToken: "<value>",
    remoteData: false,
    unifiedAccountingExpenseInput: {
        transactionDate: new Date("2024-06-15T12:00:00Z"),
        totalAmount: 10000,
        subTotal: 9000,
        totalTaxAmount: 1000,
        currency: UnifiedAccountingExpenseInputCurrency.Usd,
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
    },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `xConnectionToken`                                                                                   | *string*                                                                                             | :heavy_check_mark:                                                                                   | The connection token                                                                                 |                                                                                                      |
| `remoteData`                                                                                         | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | Set to true to include data from the original Accounting software.                                   | false                                                                                                |
| `unifiedAccountingExpenseInput`                                                                      | [components.UnifiedAccountingExpenseInput](../../models/components/unifiedaccountingexpenseinput.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |