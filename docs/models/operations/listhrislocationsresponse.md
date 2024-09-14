# ListHrisLocationsResponse

## Example Usage

```typescript
import { ListHrisLocationsResponse } from "@panora/sdk/models/operations";

let value: ListHrisLocationsResponse = {
  result: {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
      {
        name: "Headquarters",
        phoneNumber: "+1234567890",
        street1: "123 Main St",
        street2: "Suite 456",
        city: "San Francisco",
        state: "CA",
        zipCode: "94105",
        country: "USA",
        locationType: "WORK",
        companyId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        employeeId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        fieldMappings: {},
        id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        remoteId: "location_1234",
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
| `result`                                                                                             | [operations.ListHrisLocationsResponseBody](../../models/operations/listhrislocationsresponsebody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |