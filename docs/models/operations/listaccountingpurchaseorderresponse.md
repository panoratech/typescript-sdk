# ListAccountingPurchaseOrderResponse

## Example Usage

```typescript
import { ListAccountingPurchaseOrderResponse } from "@panora/sdk/models/operations";

let value: ListAccountingPurchaseOrderResponse = {
  result: {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
      {
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
        currency: "USD",
        exchangeRate: "1.2",
        trackingCategories: [
          "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        ],
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
        remoteId: "po_1234",
        remoteCreatedAt: new Date("2024-06-15T12:00:00Z"),
        remoteUpdatedAt: new Date("2024-06-15T12:00:00Z"),
        remoteData: {},
        createdAt: new Date("2024-06-15T12:00:00Z"),
        modifiedAt: new Date("2024-06-15T12:00:00Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                                 | [operations.ListAccountingPurchaseOrderResponseBody](../../models/operations/listaccountingpurchaseorderresponsebody.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |