# UnifiedAccountingJournalentryInput

## Example Usage

```typescript
import { UnifiedAccountingJournalentryInput } from "@panora/sdk/models/components";

let value: UnifiedAccountingJournalentryInput = {
  transactionDate: new Date("2024-06-15T12:00:00Z"),
  payments: [
    "payment1",
    "payment2",
  ],
  appliedPayments: [
    "appliedPayment1",
    "appliedPayment2",
  ],
  memo: "Monthly expense journal entry",
  currency: "USD",
  exchangeRate: "1.2",
  idAccCompanyInfo: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  journalNumber: "JE-001",
  trackingCategories: [
    "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  ],
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
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              | Example                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `transactionDate`                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                            | :heavy_minus_sign:                                                                                                                       | The date of the transaction                                                                                                              | 2024-06-15T12:00:00Z                                                                                                                     |
| `payments`                                                                                                                               | *string*[]                                                                                                                               | :heavy_minus_sign:                                                                                                                       | The payments associated with the journal entry                                                                                           | [<br/>"payment1",<br/>"payment2"<br/>]                                                                                                   |
| `appliedPayments`                                                                                                                        | *string*[]                                                                                                                               | :heavy_minus_sign:                                                                                                                       | The applied payments for the journal entry                                                                                               | [<br/>"appliedPayment1",<br/>"appliedPayment2"<br/>]                                                                                     |
| `memo`                                                                                                                                   | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | A memo or note for the journal entry                                                                                                     | Monthly expense journal entry                                                                                                            |
| `currency`                                                                                                                               | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The currency of the journal entry                                                                                                        | USD                                                                                                                                      |
| `exchangeRate`                                                                                                                           | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The exchange rate applied to the journal entry                                                                                           | 1.2                                                                                                                                      |
| `idAccCompanyInfo`                                                                                                                       | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The UUID of the associated company info                                                                                                  | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                                                                     |
| `journalNumber`                                                                                                                          | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The journal number                                                                                                                       | JE-001                                                                                                                                   |
| `trackingCategories`                                                                                                                     | *string*[]                                                                                                                               | :heavy_minus_sign:                                                                                                                       | The UUIDs of the tracking categories associated with the journal entry                                                                   | [<br/>"801f9ede-c698-4e66-a7fc-48d19eebaa4f"<br/>]                                                                                       |
| `idAccAccountingPeriod`                                                                                                                  | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The UUID of the associated accounting period                                                                                             | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                                                                     |
| `postingStatus`                                                                                                                          | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | The posting status of the journal entry                                                                                                  | Posted                                                                                                                                   |
| `lineItems`                                                                                                                              | [components.LineItem](../../models/components/lineitem.md)[]                                                                             | :heavy_minus_sign:                                                                                                                       | The line items associated with this journal entry                                                                                        |                                                                                                                                          |
| `fieldMappings`                                                                                                                          | [components.UnifiedAccountingJournalentryInputFieldMappings](../../models/components/unifiedaccountingjournalentryinputfieldmappings.md) | :heavy_minus_sign:                                                                                                                       | The custom field mappings of the object between the remote 3rd party & Panora                                                            | {<br/>"custom_field_1": "value1",<br/>"custom_field_2": "value2"<br/>}                                                                   |