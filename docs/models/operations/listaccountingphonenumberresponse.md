# ListAccountingPhonenumberResponse

## Example Usage

```typescript
import { ListAccountingPhonenumberResponse } from "@panora/sdk/models/operations";

let value: ListAccountingPhonenumberResponse = {
    result: {
        prevCursor: "<value>",
        nextCursor: "<value>",
        data: [
            {
                number: "+1234567890",
                type: "Mobile",
                companyInfoId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                contactId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                fieldMappings: {},
                id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                remoteId: "phone_1234",
                remoteData: {},
                createdAt: new Date("2024-06-15T12:00:00Z"),
                modifiedAt: new Date("2024-06-15T12:00:00Z"),
            },
        ],
    },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                             | [operations.ListAccountingPhonenumberResponseBody](../../models/operations/listaccountingphonenumberresponsebody.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |