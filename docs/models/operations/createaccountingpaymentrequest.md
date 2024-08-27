# CreateAccountingPaymentRequest

## Example Usage

```typescript
import { CreateAccountingPaymentRequest } from "@panora/sdk/models/operations";

let value: CreateAccountingPaymentRequest = {
    xConnectionToken: "<value>",
    remoteData: false,
    unifiedAccountingPaymentInput: {
        invoiceId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        transactionDate: new Date("2024-06-15T12:00:00Z"),
        contactId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        accountId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        currency: "USD",
        exchangeRate: "1.2",
        totalAmount: 10000,
        type: "Credit Card",
        companyInfoId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        accountingPeriodId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
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
| `unifiedAccountingPaymentInput`                                                                      | [components.UnifiedAccountingPaymentInput](../../models/components/unifiedaccountingpaymentinput.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |