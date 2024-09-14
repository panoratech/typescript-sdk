# ListAccountingCreditNoteResponseBody

## Example Usage

```typescript
import { ListAccountingCreditNoteResponseBody } from "@panora/sdk/models/operations";

let value: ListAccountingCreditNoteResponseBody = {
  prevCursor: "<value>",
  nextCursor: "<value>",
  data: [
    {
      transactionDate: new Date("2024-06-15T12:00:00Z"),
      status: "Issued",
      number: "CN-001",
      contactId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      companyId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      exchangeRate: "1.2",
      totalAmount: 10000,
      remainingCredit: 5000,
      trackingCategories: [
        "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      ],
      currency: "USD",
      payments: [
        "PAYMENT-001",
        "PAYMENT-002",
      ],
      appliedPayments: [
        "APPLIED-001",
        "APPLIED-002",
      ],
      accountingPeriodId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      fieldMappings: {},
      id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      remoteId: "creditnote_1234",
      remoteData: {},
      remoteCreatedAt: new Date("2024-06-15T12:00:00Z"),
      remoteUpdatedAt: new Date("2024-06-15T12:00:00Z"),
      createdAt: new Date("2024-06-15T12:00:00Z"),
      modifiedAt: new Date("2024-06-15T12:00:00Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `prevCursor`                                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `nextCursor`                                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `data`                                                                                                         | [components.UnifiedAccountingCreditnoteOutput](../../models/components/unifiedaccountingcreditnoteoutput.md)[] | :heavy_check_mark:                                                                                             | N/A                                                                                                            |