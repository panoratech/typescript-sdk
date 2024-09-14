# UnifiedCrmContactInput

## Example Usage

```typescript
import { UnifiedCrmContactInput } from "@panora/sdk/models/components";

let value: UnifiedCrmContactInput = {
  firstName: "John",
  lastName: "Doe",
  emailAddresses: [
    {
      emailAddress: "Carmelo67@yahoo.com",
      emailAddressType: "<value>",
    },
  ],
  phoneNumbers: [
    {
      phoneNumber: "1-417-393-6800 x6860",
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
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `firstName`                                                                                                         | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The first name of the contact                                                                                       | John                                                                                                                |
| `lastName`                                                                                                          | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The last name of the contact                                                                                        | Doe                                                                                                                 |
| `emailAddresses`                                                                                                    | [components.Email](../../models/components/email.md)[]                                                              | :heavy_minus_sign:                                                                                                  | The email addresses of the contact                                                                                  | [<br/>{<br/>"email": "john.doe@example.com",<br/>"type": "WORK"<br/>}<br/>]                                         |
| `phoneNumbers`                                                                                                      | [components.Phone](../../models/components/phone.md)[]                                                              | :heavy_minus_sign:                                                                                                  | The phone numbers of the contact                                                                                    | [<br/>{<br/>"phone": "1234567890",<br/>"type": "WORK"<br/>}<br/>]                                                   |
| `addresses`                                                                                                         | [components.Address](../../models/components/address.md)[]                                                          | :heavy_minus_sign:                                                                                                  | The addresses of the contact                                                                                        | [<br/>{<br/>"street": "123 Main St",<br/>"city": "Anytown",<br/>"state": "CA",<br/>"zip": "12345",<br/>"country": "USA",<br/>"type": "WORK"<br/>}<br/>] |
| `userId`                                                                                                            | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The UUID of the user who owns the contact                                                                           | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                                                |
| `fieldMappings`                                                                                                     | Record<string, *any*>                                                                                               | :heavy_minus_sign:                                                                                                  | The custom field mappings of the contact between the remote 3rd party & Panora                                      | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                                          |