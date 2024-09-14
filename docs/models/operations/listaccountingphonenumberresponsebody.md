# ListAccountingPhonenumberResponseBody

## Example Usage

```typescript
import { ListAccountingPhonenumberResponseBody } from "@panora/sdk/models/operations";

let value: ListAccountingPhonenumberResponseBody = {
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
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `prevCursor`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `nextCursor`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `data`                                                                                                           | [components.UnifiedAccountingPhonenumberOutput](../../models/components/unifiedaccountingphonenumberoutput.md)[] | :heavy_check_mark:                                                                                               | N/A                                                                                                              |