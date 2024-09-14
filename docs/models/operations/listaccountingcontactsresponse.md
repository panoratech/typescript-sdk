# ListAccountingContactsResponse

## Example Usage

```typescript
import { ListAccountingContactsResponse } from "@panora/sdk/models/operations";

let value: ListAccountingContactsResponse = {
  result: {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
      {
        name: "John Doe",
        isSupplier: true,
        isCustomer: false,
        emailAddress: "john.doe@example.com",
        taxNumber: "123456789",
        status: "Active",
        currency: "USD",
        remoteUpdatedAt: "2024-06-15T12:00:00Z",
        companyInfoId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        fieldMappings: {},
        id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        remoteId: "contact_1234",
        remoteData: {},
        createdAt: new Date("2024-06-15T12:00:00Z"),
        modifiedAt: new Date("2024-06-15T12:00:00Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                       | [operations.ListAccountingContactsResponseBody](../../models/operations/listaccountingcontactsresponsebody.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |