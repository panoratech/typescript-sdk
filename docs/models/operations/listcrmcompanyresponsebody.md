# ListCrmCompanyResponseBody

## Example Usage

```typescript
import { AddressType, EmailAddressType, Industry, PhoneType } from "@panora/sdk/models/components";
import { ListCrmCompanyResponseBody } from "@panora/sdk/models/operations";

let value: ListCrmCompanyResponseBody = {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
        {
            name: "Acme",
            industry: Industry.Accounting,
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
            id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            remoteId: "id_1",
            remoteData: {
                fav_dish: "broccoli",
                fav_color: "red",
            },
            createdAt: {},
            modifiedAt: {},
        },
    ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `prevCursor`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `nextCursor`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `data`                                                                                     | [components.UnifiedCrmCompanyOutput](../../models/components/unifiedcrmcompanyoutput.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |