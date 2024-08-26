# ListAccountingContactsResponseBody

## Example Usage

```typescript
import { UnifiedAccountingContactOutputCurrency } from "@panora/sdk/models/components";
import { ListAccountingContactsResponseBody } from "@panora/sdk/models/operations";

let value: ListAccountingContactsResponseBody = {
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
            currency: UnifiedAccountingContactOutputCurrency.Usd,
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
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `prevCursor`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `nextCursor`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `data`                                                                                                   | [components.UnifiedAccountingContactOutput](../../models/components/unifiedaccountingcontactoutput.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |