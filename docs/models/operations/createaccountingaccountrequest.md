# CreateAccountingAccountRequest

## Example Usage

```typescript
import { UnifiedAccountingAccountInputCurrency } from "@panora/sdk/models/components";
import { CreateAccountingAccountRequest } from "@panora/sdk/models/operations";

let value: CreateAccountingAccountRequest = {
    xConnectionToken: "<value>",
    remoteData: false,
    unifiedAccountingAccountInput: {
        name: "Cash",
        description: "Main cash account for daily operations",
        classification: "Asset",
        type: "Current Asset",
        status: "Active",
        currentBalance: 10000,
        currency: UnifiedAccountingAccountInputCurrency.Usd,
        accountNumber: "1000",
        parentAccount: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
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
| `unifiedAccountingAccountInput`                                                                      | [components.UnifiedAccountingAccountInput](../../models/components/unifiedaccountingaccountinput.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |