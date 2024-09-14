# ListAccountingTaxRateResponseBody

## Example Usage

```typescript
import { ListAccountingTaxRateResponseBody } from "@panora/sdk/models/operations";

let value: ListAccountingTaxRateResponseBody = {
  prevCursor: "<value>",
  nextCursor: "<value>",
  data: [
    {
      description: "VAT 20%",
      totalTaxRatge: 2000,
      effectiveTaxRate: 1900,
      companyId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      fieldMappings: {},
      id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      remoteId: "tax_rate_1234",
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
| `data`                                                                                                   | [components.UnifiedAccountingTaxrateOutput](../../models/components/unifiedaccountingtaxrateoutput.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |