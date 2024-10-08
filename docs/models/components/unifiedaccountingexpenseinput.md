# UnifiedAccountingExpenseInput

## Example Usage

```typescript
import { UnifiedAccountingExpenseInput } from "@panora/sdk/models/components";

let value: UnifiedAccountingExpenseInput = {
  transactionDate: new Date("2024-06-15T12:00:00Z"),
  totalAmount: 10000,
  subTotal: 9000,
  totalTaxAmount: 1000,
  currency: "USD",
  exchangeRate: "1.2",
  memo: "Business lunch with client",
  accountId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  contactId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  companyInfoId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  trackingCategories: [
    "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  ],
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

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `transactionDate`                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                  | :heavy_minus_sign:                                                                                                             | The date of the expense transaction                                                                                            | 2024-06-15T12:00:00Z                                                                                                           |
| `totalAmount`                                                                                                                  | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The total amount of the expense                                                                                                | 10000                                                                                                                          |
| `subTotal`                                                                                                                     | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The sub-total amount of the expense (before tax)                                                                               | 9000                                                                                                                           |
| `totalTaxAmount`                                                                                                               | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The total tax amount of the expense                                                                                            | 1000                                                                                                                           |
| `currency`                                                                                                                     | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The currency of the expense                                                                                                    | USD                                                                                                                            |
| `exchangeRate`                                                                                                                 | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The exchange rate applied to the expense                                                                                       | 1.2                                                                                                                            |
| `memo`                                                                                                                         | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | A memo or description for the expense                                                                                          | Business lunch with client                                                                                                     |
| `accountId`                                                                                                                    | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The UUID of the associated account                                                                                             | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                                                           |
| `contactId`                                                                                                                    | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The UUID of the associated contact                                                                                             | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                                                           |
| `companyInfoId`                                                                                                                | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The UUID of the associated company info                                                                                        | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                                                           |
| `trackingCategories`                                                                                                           | *string*[]                                                                                                                     | :heavy_minus_sign:                                                                                                             | The UUIDs of the tracking categories associated with the expense                                                               | [<br/>"801f9ede-c698-4e66-a7fc-48d19eebaa4f"<br/>]                                                                             |
| `lineItems`                                                                                                                    | [components.LineItem](../../models/components/lineitem.md)[]                                                                   | :heavy_minus_sign:                                                                                                             | The line items associated with this expense                                                                                    |                                                                                                                                |
| `fieldMappings`                                                                                                                | [components.UnifiedAccountingExpenseInputFieldMappings](../../models/components/unifiedaccountingexpenseinputfieldmappings.md) | :heavy_minus_sign:                                                                                                             | The custom field mappings of the object between the remote 3rd party & Panora                                                  | {<br/>"custom_field_1": "value1",<br/>"custom_field_2": "value2"<br/>}                                                         |