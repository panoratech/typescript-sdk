# CreateAccountingInvoiceRequest

## Example Usage

```typescript
import { CreateAccountingInvoiceRequest } from "@panora/sdk/models/operations";

let value: CreateAccountingInvoiceRequest = {
    xConnectionToken: "<value>",
    remoteData: false,
    unifiedAccountingInvoiceInput: {
        type: "Sales",
        number: "INV-001",
        issueDate: new Date("2024-06-15T12:00:00Z"),
        dueDate: new Date("2024-07-15T12:00:00Z"),
        paidOnDate: new Date("2024-07-10T12:00:00Z"),
        memo: "Payment for services rendered",
        currency: "USD",
        exchangeRate: "1.2",
        totalDiscount: 1000,
        subTotal: 10000,
        status: "Paid",
        totalTaxAmount: 1000,
        totalAmount: 11000,
        balance: 0,
        contactId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        accountingPeriodId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        trackingCategories: [
            "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        ],
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
| `unifiedAccountingInvoiceInput`                                                                      | [components.UnifiedAccountingInvoiceInput](../../models/components/unifiedaccountinginvoiceinput.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |