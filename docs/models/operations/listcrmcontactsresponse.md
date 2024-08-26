# ListCrmContactsResponse

## Example Usage

```typescript
import { AddressType, EmailAddressType, PhoneType } from "@panora/sdk/models/components";
import { ListCrmContactsResponse } from "@panora/sdk/models/operations";

let value: ListCrmContactsResponse = {
    result: {
        prevCursor: "<value>",
        nextCursor: "<value>",
        data: [
            {
                firstName: "John",
                lastName: "Doe",
                emailAddresses: [
                    {
                        emailAddress: "Leora.Fadel@gmail.com",
                        emailAddressType: EmailAddressType.Work,
                    },
                ],
                phoneNumbers: [
                    {
                        phoneNumber: "<value>",
                        phoneType: PhoneType.Work,
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
                        addressType: AddressType.Personal,
                        ownerType: "<value>",
                    },
                ],
                userId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
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
                createdAt: new Date("2024-10-01T12:00:00Z"),
                modifiedAt: new Date("2024-10-01T12:00:00Z"),
            },
        ],
    },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `result`                                                                                         | [operations.ListCrmContactsResponseBody](../../models/operations/listcrmcontactsresponsebody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |