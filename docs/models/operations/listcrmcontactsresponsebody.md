# ListCrmContactsResponseBody

## Example Usage

```typescript
import { ListCrmContactsResponseBody } from "@panora/sdk/models/operations";

let value: ListCrmContactsResponseBody = {
  prevCursor: "<value>",
  nextCursor: "<value>",
  data: [
    {
      firstName: "John",
      lastName: "Doe",
      emailAddresses: [
        {
          emailAddress: "Larue_Rau85@yahoo.com",
          emailAddressType: "<value>",
        },
      ],
      phoneNumbers: [
        {
          phoneNumber: "846-734-2809 x2347",
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
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `prevCursor`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `nextCursor`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `data`                                                                                     | [components.UnifiedCrmContactOutput](../../models/components/unifiedcrmcontactoutput.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |