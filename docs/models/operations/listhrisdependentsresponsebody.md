# ListHrisDependentsResponseBody

## Example Usage

```typescript
import { ListHrisDependentsResponseBody } from "@panora/sdk/models/operations";

let value: ListHrisDependentsResponseBody = {
  prevCursor: "<value>",
  nextCursor: "<value>",
  data: [
    {
      firstName: "John",
      lastName: "Doe",
      middleName: "Michael",
      relationship: "CHILD",
      dateOfBirth: new Date("2020-01-01"),
      gender: "MALE",
      phoneNumber: "+1234567890",
      homeLocation: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      isStudent: true,
      ssn: "123-45-6789",
      employeeId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      fieldMappings: {},
      id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      remoteId: "dependent_1234",
      remoteData: {},
      remoteCreatedAt: new Date("2024-10-01T12:00:00Z"),
      createdAt: new Date("2024-10-01T12:00:00Z"),
      modifiedAt: new Date("2024-10-01T12:00:00Z"),
      remoteWasDeleted: false,
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `prevCursor`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `nextCursor`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `data`                                                                                           | [components.UnifiedHrisDependentOutput](../../models/components/unifiedhrisdependentoutput.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |