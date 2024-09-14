# CreateCrmCompanyRequest

## Example Usage

```typescript
import { CreateCrmCompanyRequest } from "@panora/sdk/models/operations";

let value: CreateCrmCompanyRequest = {
  xConnectionToken: "<value>",
  remoteData: false,
  unifiedCrmCompanyInput: {
    name: "Acme",
    industry: "ACCOUNTING",
    numberOfEmployees: 10,
    userId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    emailAddresses: [
      {
        emailAddress: "acme@gmail.com",
        emailAddressType: "WORK",
      },
    ],
    addresses: [
      {
        street1: "5th Avenue",
        street2: "Street 2",
        city: "New York",
        state: "NY",
        postalCode: "10001",
        country: "USA",
        addressType: "WORK",
        ownerType: "<value>",
      },
    ],
    phoneNumbers: [
      {
        phoneNumber: "+33660606067",
        phoneType: "WORK",
      },
    ],
    fieldMappings: {
      "fav_dish": "broccoli",
      "fav_color": "red",
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `xConnectionToken`                                                                     | *string*                                                                               | :heavy_check_mark:                                                                     | The connection token                                                                   |                                                                                        |
| `remoteData`                                                                           | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Set to true to include data from the original CRM software.                            | false                                                                                  |
| `unifiedCrmCompanyInput`                                                               | [components.UnifiedCrmCompanyInput](../../models/components/unifiedcrmcompanyinput.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |