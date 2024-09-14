# ListAccountingAddressResponseBody

## Example Usage

```typescript
import { ListAccountingAddressResponseBody } from "@panora/sdk/models/operations";

let value: ListAccountingAddressResponseBody = {
  prevCursor: "<value>",
  nextCursor: "<value>",
  data: [
    {
      type: "Billing",
      street1: "123 Main St",
      street2: "Apt 4B",
      city: "New York",
      state: "NY",
      countrySubdivision: "New York",
      country: "USA",
      zip: "10001",
      contactId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      companyInfoId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      fieldMappings: {},
      id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      remoteId: "address_1234",
      remoteData: {},
      createdAt: new Date("2024-06-15T12:00:00Z"),
      modifiedAt: new Date("2024-06-15T12:00:00Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `prevCursor`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `nextCursor`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `data`                                                                                                   | [components.UnifiedAccountingAddressOutput](../../models/components/unifiedaccountingaddressoutput.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |