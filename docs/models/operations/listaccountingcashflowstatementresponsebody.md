# ListAccountingCashflowStatementResponseBody

## Example Usage

```typescript
import { ListAccountingCashflowStatementResponseBody } from "@panora/sdk/models/operations";

let value: ListAccountingCashflowStatementResponseBody = {
  prevCursor: "<value>",
  nextCursor: "<value>",
  data: [
    {
      name: "Q2 2024 Cash Flow Statement",
      currency: "USD",
      companyId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      startPeriod: new Date("2024-04-01T00:00:00Z"),
      endPeriod: new Date("2024-06-30T23:59:59Z"),
      cashAtBeginningOfPeriod: 1000000,
      cashAtEndOfPeriod: 1200000,
      remoteGeneratedAt: new Date("2024-07-01T12:00:00Z"),
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
      remoteId: "cashflowstatement_1234",
      remoteData: {},
      createdAt: new Date("2024-06-15T12:00:00Z"),
      modifiedAt: new Date("2024-06-15T12:00:00Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `prevCursor`                                                                                                                 | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `nextCursor`                                                                                                                 | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `data`                                                                                                                       | [components.UnifiedAccountingCashflowstatementOutput](../../models/components/unifiedaccountingcashflowstatementoutput.md)[] | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |