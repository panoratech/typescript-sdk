# ListAccountingInvoiceResponseBody

## Example Usage

```typescript
import { ListAccountingInvoiceResponseBody } from "@panora/sdk/models/operations";

let value: ListAccountingInvoiceResponseBody = {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
        {
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
            id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            remoteId: "invoice_1234",
            remoteData: {},
            remoteUpdatedAt: new Date("2024-06-15T12:00:00Z"),
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
| `data`                                                                                                   | [components.UnifiedAccountingInvoiceOutput](../../models/components/unifiedaccountinginvoiceoutput.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |