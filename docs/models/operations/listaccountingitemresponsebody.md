# ListAccountingItemResponseBody

## Example Usage

```typescript
import { ListAccountingItemResponseBody } from "@panora/sdk/models/operations";

let value: ListAccountingItemResponseBody = {
  prevCursor: "<value>",
  nextCursor: "<value>",
  data: [
    {
      name: "Product A",
      status: "Active",
      unitPrice: 1000,
      purchasePrice: 800,
      salesAccount: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      purchaseAccount: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      companyInfoId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      fieldMappings: {},
      id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      remoteId: "item_1234",
      remoteUpdatedAt: new Date("2024-06-15T12:00:00Z"),
      remoteData: {},
      createdAt: new Date("2024-06-15T12:00:00Z"),
      modifiedAt: new Date("2024-06-15T12:00:00Z"),
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `prevCursor`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `nextCursor`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `data`                                                                                             | [components.UnifiedAccountingItemOutput](../../models/components/unifiedaccountingitemoutput.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |