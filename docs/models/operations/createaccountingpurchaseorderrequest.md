# CreateAccountingPurchaseOrderRequest

## Example Usage

```typescript
import { UnifiedAccountingPurchaseorderInputCurrency } from "@panora/sdk/models/components";
import { CreateAccountingPurchaseOrderRequest } from "@panora/sdk/models/operations";

let value: CreateAccountingPurchaseOrderRequest = {
    xConnectionToken: "<value>",
    remoteData: false,
    unifiedAccountingPurchaseorderInput: {
        status: "Pending",
        issueDate: new Date("2024-06-15T12:00:00Z"),
        purchaseOrderNumber: "PO-001",
        deliveryDate: new Date("2024-07-15T12:00:00Z"),
        deliveryAddress: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        customer: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        vendor: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        memo: "Purchase order for Q3 inventory",
        companyId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        totalAmount: 100000,
        currency: UnifiedAccountingPurchaseorderInputCurrency.Usd,
        exchangeRate: "1.2",
        trackingCategories: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
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
    },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `xConnectionToken`                                                                                               | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The connection token                                                                                             |                                                                                                                  |
| `remoteData`                                                                                                     | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | Set to true to include data from the original Accounting software.                                               | false                                                                                                            |
| `unifiedAccountingPurchaseorderInput`                                                                            | [components.UnifiedAccountingPurchaseorderInput](../../models/components/unifiedaccountingpurchaseorderinput.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |