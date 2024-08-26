# CreateAccountingJournalEntryRequest

## Example Usage

```typescript
import { UnifiedAccountingJournalentryInputCurrency } from "@panora/sdk/models/components";
import { CreateAccountingJournalEntryRequest } from "@panora/sdk/models/operations";

let value: CreateAccountingJournalEntryRequest = {
    xConnectionToken: "<value>",
    remoteData: false,
    unifiedAccountingJournalentryInput: {
        transactionDate: new Date("2024-06-15T12:00:00Z"),
        payments: ["payment1", "payment2"],
        appliedPayments: ["appliedPayment1", "appliedPayment2"],
        memo: "Monthly expense journal entry",
        currency: UnifiedAccountingJournalentryInputCurrency.Usd,
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
    },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `xConnectionToken`                                                                                             | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The connection token                                                                                           |                                                                                                                |
| `remoteData`                                                                                                   | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | Set to true to include data from the original Accounting software.                                             | false                                                                                                          |
| `unifiedAccountingJournalentryInput`                                                                           | [components.UnifiedAccountingJournalentryInput](../../models/components/unifiedaccountingjournalentryinput.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |