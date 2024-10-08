# ListHrisCompaniesResponse

## Example Usage

```typescript
import { ListHrisCompaniesResponse } from "@panora/sdk/models/operations";

let value: ListHrisCompaniesResponse = {
  result: {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
      {
        legalName: "Acme Corporation",
        locations: [
          "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        ],
        displayName: "Acme Corp",
        eins: [
          "12-3456789",
          "98-7654321",
        ],
        fieldMappings: {},
        id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        remoteId: "company_1234",
        remoteData: {},
        remoteCreatedAt: new Date("2024-10-01T12:00:00Z"),
        createdAt: new Date("2024-10-01T12:00:00Z"),
        modifiedAt: new Date("2024-10-01T12:00:00Z"),
        remoteWasDeleted: false,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `result`                                                                                             | [operations.ListHrisCompaniesResponseBody](../../models/operations/listhriscompaniesresponsebody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |