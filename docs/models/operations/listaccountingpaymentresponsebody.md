# ListAccountingPaymentResponseBody

## Example Usage

```typescript
import { UnifiedAccountingPaymentOutputCurrency } from "@panora/sdk/models/components";
import { ListAccountingPaymentResponseBody } from "@panora/sdk/models/operations";

let value: ListAccountingPaymentResponseBody = {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
        {
            invoiceId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            transactionDate: new Date("2024-06-15T12:00:00Z"),
            contactId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            accountId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            currency: UnifiedAccountingPaymentOutputCurrency.Usd,
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
            id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            remoteId: "payment_1234",
            remoteUpdatedAt: new Date("2024-06-15T12:00:00Z"),
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
| `data`                                                                                                   | [components.UnifiedAccountingPaymentOutput](../../models/components/unifiedaccountingpaymentoutput.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |