# UnifiedCrmContactOutput

## Example Usage

```typescript
import { UnifiedCrmContactOutput } from "@panora/sdk/models/components";

let value: UnifiedCrmContactOutput = {
  firstName: "John",
  lastName: "Doe",
  emailAddresses: [
    {
      emailAddress: "Jacky_Auer@hotmail.com",
      emailAddressType: "<value>",
    },
  ],
  phoneNumbers: [
    {
      phoneNumber: "734.706.6213 x35491",
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
  id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  remoteId: "id_1",
  remoteData: {
    "fav_dish": "broccoli",
    "fav_color": "red",
  },
  createdAt: new Date("2024-10-01T12:00:00Z"),
  modifiedAt: new Date("2024-10-01T12:00:00Z"),
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
| `id`                                                                                                                | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The UUID of the contact                                                                                             | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                                                |
| `remoteId`                                                                                                          | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The id of the contact in the context of the Crm 3rd Party                                                           | id_1                                                                                                                |
| `remoteData`                                                                                                        | Record<string, *any*>                                                                                               | :heavy_minus_sign:                                                                                                  | The remote data of the contact in the context of the Crm 3rd Party                                                  | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                                          |
| `createdAt`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                       | :heavy_minus_sign:                                                                                                  | The created date of the object                                                                                      | 2024-10-01T12:00:00Z                                                                                                |
| `modifiedAt`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                       | :heavy_minus_sign:                                                                                                  | The modified date of the object                                                                                     | 2024-10-01T12:00:00Z                                                                                                |