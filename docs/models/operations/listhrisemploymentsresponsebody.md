# ListHrisEmploymentsResponseBody

## Example Usage

```typescript
import { ListHrisEmploymentsResponseBody } from "@panora/sdk/models/operations";

let value: ListHrisEmploymentsResponseBody = {
  prevCursor: "<value>",
  nextCursor: "<value>",
  data: [
    {
      jobTitle: "Software Engineer",
      payRate: 100000,
      payPeriod: "MONTHLY",
      payFrequency: "WEEKLY",
      payCurrency: "USD",
      flsaStatus: "EXEMPT",
      effectiveDate: new Date("2023-01-01"),
      employmentType: "FULL_TIME",
      payGroupId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      employeeId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      fieldMappings: {},
      id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      remoteId: "employment_1234",
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

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `prevCursor`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `nextCursor`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `data`                                                                                             | [components.UnifiedHrisEmploymentOutput](../../models/components/unifiedhrisemploymentoutput.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |