# UnifiedCrmCompanyOutput

## Example Usage

```typescript
import { UnifiedCrmCompanyOutput } from "@panora/sdk/models/components";

let value: UnifiedCrmCompanyOutput = {
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
  id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  remoteId: "id_1",
  remoteData: {
    "fav_dish": "broccoli",
    "fav_color": "red",
  },
  createdAt: {},
  modifiedAt: {},
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                        | *string*                                                                                                      | :heavy_check_mark:                                                                                            | The name of the company                                                                                       | Acme                                                                                                          |
| `industry`                                                                                                    | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | The industry of the company. Authorized values can be found in the Industry enum.                             | ACCOUNTING                                                                                                    |
| `numberOfEmployees`                                                                                           | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | The number of employees of the company                                                                        | 10                                                                                                            |
| `userId`                                                                                                      | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | The UUID of the user who owns the company                                                                     | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                                          |
| `emailAddresses`                                                                                              | [components.Email](../../models/components/email.md)[]                                                        | :heavy_minus_sign:                                                                                            | The email addresses of the company                                                                            | [<br/>{<br/>"email_address": "acme@gmail.com",<br/>"email_address_type": "WORK"<br/>}<br/>]                   |
| `addresses`                                                                                                   | [components.Address](../../models/components/address.md)[]                                                    | :heavy_minus_sign:                                                                                            | The addresses of the company                                                                                  | [<br/>{<br/>"street_1": "5th Avenue",<br/>"city": "New York",<br/>"state": "NY",<br/>"country": "USA",<br/>"address_type": "WORK"<br/>}<br/>] |
| `phoneNumbers`                                                                                                | [components.Phone](../../models/components/phone.md)[]                                                        | :heavy_minus_sign:                                                                                            | The phone numbers of the company                                                                              | [<br/>{<br/>"phone_number": "+33660606067",<br/>"phone_type": "WORK"<br/>}<br/>]                              |
| `fieldMappings`                                                                                               | Record<string, *any*>                                                                                         | :heavy_minus_sign:                                                                                            | The custom field mappings of the company between the remote 3rd party & Panora                                | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                                    |
| `id`                                                                                                          | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | The UUID of the company                                                                                       | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                                          |
| `remoteId`                                                                                                    | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | The id of the company in the context of the Crm 3rd Party                                                     | id_1                                                                                                          |
| `remoteData`                                                                                                  | Record<string, *any*>                                                                                         | :heavy_minus_sign:                                                                                            | The remote data of the company in the context of the Crm 3rd Party                                            | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                                    |
| `createdAt`                                                                                                   | [components.CreatedAt](../../models/components/createdat.md)                                                  | :heavy_minus_sign:                                                                                            | The created date of the object                                                                                | 2024-10-01T12:00:00Z                                                                                          |
| `modifiedAt`                                                                                                  | [components.ModifiedAt](../../models/components/modifiedat.md)                                                | :heavy_minus_sign:                                                                                            | The modified date of the object                                                                               | 2024-10-01T12:00:00Z                                                                                          |