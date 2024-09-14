# ListAccountingVendorCreditResponseBody

## Example Usage

```typescript
import { ListAccountingVendorCreditResponseBody } from "@panora/sdk/models/operations";

let value: ListAccountingVendorCreditResponseBody = {
  prevCursor: "<value>",
  nextCursor: "<value>",
  data: [
    {
      number: "VC-001",
      transactionDate: new Date("2024-06-15T12:00:00Z"),
      vendor: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      totalAmount: "1000",
      currency: "USD",
      exchangeRate: "1.2",
      companyId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
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
      remoteId: "remote_id_1234",
      createdAt: new Date("2024-06-15T12:00:00Z"),
      modifiedAt: new Date("2024-06-15T12:00:00Z"),
      remoteUpdatedAt: new Date("2024-06-15T12:00:00Z"),
      remoteData: {},
    },
  ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `prevCursor`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `nextCursor`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `data`                                                                                                             | [components.UnifiedAccountingVendorcreditOutput](../../models/components/unifiedaccountingvendorcreditoutput.md)[] | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |