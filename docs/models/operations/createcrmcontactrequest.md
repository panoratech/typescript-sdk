# CreateCrmContactRequest

## Example Usage

```typescript
import { CreateCrmContactRequest } from "@panora/sdk/models/operations";

let value: CreateCrmContactRequest = {
  xConnectionToken: "<value>",
  remoteData: false,
  unifiedCrmContactInput: {
    firstName: "John",
    lastName: "Doe",
    emailAddresses: [
      {
        emailAddress: "Reid62@yahoo.com",
        emailAddressType: "<value>",
      },
    ],
    phoneNumbers: [
      {
        phoneNumber: "(709) 984-5906 x47004",
        phoneType: "<value>",
      },
    ],
    addresses: [
      {
        street1: "5th Avenue",
        street2: "Street 2",
        city: "Anytown",
        state: "CA",
        postalCode: "10001",
        country: "USA",
        addressType: "PERSONAL",
        ownerType: "<value>",
      },
    ],
    userId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
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
| `unifiedCrmContactInput`                                                               | [components.UnifiedCrmContactInput](../../models/components/unifiedcrmcontactinput.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |