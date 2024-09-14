# ListEcommerceCustomersResponse

## Example Usage

```typescript
import { ListEcommerceCustomersResponse } from "@panora/sdk/models/operations";

let value: ListEcommerceCustomersResponse = {
  result: {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
      {
        email: "joedoe@gmail.com",
        firstName: "Joe",
        lastName: "Doe",
        phoneNumber: "+336666666",
        addresses: [
          {
            street1: "5th Avenue",
            street2: "Street 2",
            city: "New York",
            state: "New York",
            postalCode: "10001",
            country: "United States of America",
            addressType: "PERSONAL",
            ownerType: "<value>",
          },
        ],
        fieldMappings: {},
        id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        remoteId: "id_1",
        remoteData: {},
        createdAt: "2024-10-01T12:00:00Z",
        modifiedAt: "2024-10-01T12:00:00Z",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                       | [operations.ListEcommerceCustomersResponseBody](../../models/operations/listecommercecustomersresponsebody.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |