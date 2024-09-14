# CreateAccountingContactRequest

## Example Usage

```typescript
import { CreateAccountingContactRequest } from "@panora/sdk/models/operations";

let value: CreateAccountingContactRequest = {
  xConnectionToken: "<value>",
  remoteData: false,
  unifiedAccountingContactInput: {
    name: "John Doe",
    isSupplier: true,
    isCustomer: false,
    emailAddress: "john.doe@example.com",
    taxNumber: "123456789",
    status: "Active",
    currency: "USD",
    remoteUpdatedAt: "2024-06-15T12:00:00Z",
    companyInfoId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    fieldMappings: {},
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `xConnectionToken`                                                                                   | *string*                                                                                             | :heavy_check_mark:                                                                                   | The connection token                                                                                 |                                                                                                      |
| `remoteData`                                                                                         | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | Set to true to include data from the original Accounting software.                                   | false                                                                                                |
| `unifiedAccountingContactInput`                                                                      | [components.UnifiedAccountingContactInput](../../models/components/unifiedaccountingcontactinput.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |