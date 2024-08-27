# ListAccountingJournalEntryResponseBody

## Example Usage

```typescript
import { ListAccountingJournalEntryResponseBody } from "@panora/sdk/models/operations";

let value: ListAccountingJournalEntryResponseBody = {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
        {
            transactionDate: new Date("2024-06-15T12:00:00Z"),
            payments: ["payment1", "payment2"],
            appliedPayments: ["appliedPayment1", "appliedPayment2"],
            memo: "Monthly expense journal entry",
            currency: "USD",
            exchangeRate: "1.2",
            idAccCompanyInfo: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            journalNumber: "JE-001",
            trackingCategories: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
            idAccAccountingPeriod: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            postingStatus: "Posted",
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
            remoteId: "journal_entry_1234",
            remoteCreatedAt: new Date("2024-06-15T12:00:00Z"),
            remoteModiifiedAt: new Date("2024-06-15T12:00:00Z"),
            remoteData: {},
            createdAt: new Date("2024-06-15T12:00:00Z"),
            modifiedAt: new Date("2024-06-15T12:00:00Z"),
        },
    ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `prevCursor`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `nextCursor`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `data`                                                                                                             | [components.UnifiedAccountingJournalentryOutput](../../models/components/unifiedaccountingjournalentryoutput.md)[] | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |