# ListHrisBenefitsResponse

## Example Usage

```typescript
import { ListHrisBenefitsResponse } from "@panora/sdk/models/operations";

let value: ListHrisBenefitsResponse = {
  result: {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
      {
        providerName: "Health Insurance Provider",
        employeeId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        employeeContribution: 100,
        companyContribution: 200,
        startDate: new Date("2024-01-01T00:00:00Z"),
        endDate: new Date("2024-12-31T23:59:59Z"),
        employerBenefitId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        fieldMappings: {},
        id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        remoteId: "benefit_1234",
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

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [operations.ListHrisBenefitsResponseBody](../../models/operations/listhrisbenefitsresponsebody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |