# UnifiedCrmCompanyInput

## Example Usage

```typescript
import {
  AddressType,
  EmailAddressType,
  PhoneType,
  UnifiedCrmCompanyInput,
  UnifiedCrmCompanyInputIndustry,
} from "@panora/sdk/models/components";

let value: UnifiedCrmCompanyInput = {
    name: "Acme",
    industry: UnifiedCrmCompanyInputIndustry.Accounting,
    numberOfEmployees: 10,
    userId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    emailAddresses: [
        {
            emailAddress: "acme@gmail.com",
            emailAddressType: EmailAddressType.Work,
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
            addressType: AddressType.Work,
            ownerType: "<value>",
        },
    ],
    phoneNumbers: [
        {
            phoneNumber: "+33660606067",
            phoneType: PhoneType.Work,
        },
    ],
    fieldMappings: {
        fav_dish: "broccoli",
        fav_color: "red",
    },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                        | *string*                                                                                                      | :heavy_check_mark:                                                                                            | The name of the company                                                                                       | Acme                                                                                                          |
| `industry`                                                                                                    | [components.UnifiedCrmCompanyInputIndustry](../../models/components/unifiedcrmcompanyinputindustry.md)        | :heavy_minus_sign:                                                                                            | The industry of the company. Authorized values can be found in the Industry enum.                             | ACCOUNTING                                                                                                    |
| `numberOfEmployees`                                                                                           | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | The number of employees of the company                                                                        | 10                                                                                                            |
| `userId`                                                                                                      | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | The UUID of the user who owns the company                                                                     | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                                          |
| `emailAddresses`                                                                                              | [components.Email](../../models/components/email.md)[]                                                        | :heavy_minus_sign:                                                                                            | The email addresses of the company                                                                            | [<br/>{<br/>"email_address": "acme@gmail.com",<br/>"email_address_type": "WORK"<br/>}<br/>]                   |
| `addresses`                                                                                                   | [components.Address](../../models/components/address.md)[]                                                    | :heavy_minus_sign:                                                                                            | The addresses of the company                                                                                  | [<br/>{<br/>"street_1": "5th Avenue",<br/>"city": "New York",<br/>"state": "NY",<br/>"country": "USA",<br/>"address_type": "WORK"<br/>}<br/>] |
| `phoneNumbers`                                                                                                | [components.Phone](../../models/components/phone.md)[]                                                        | :heavy_minus_sign:                                                                                            | The phone numbers of the company                                                                              | [<br/>{<br/>"phone_number": "+33660606067",<br/>"phone_type": "WORK"<br/>}<br/>]                              |
| `fieldMappings`                                                                                               | Record<string, *any*>                                                                                         | :heavy_minus_sign:                                                                                            | The custom field mappings of the company between the remote 3rd party & Panora                                | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                                    |