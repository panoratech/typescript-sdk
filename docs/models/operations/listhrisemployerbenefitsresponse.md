# ListHrisEmployerBenefitsResponse

## Example Usage

```typescript
import { BenefitPlanType } from "@panora/sdk/models/components";
import { ListHrisEmployerBenefitsResponse } from "@panora/sdk/models/operations";

let value: ListHrisEmployerBenefitsResponse = {
    result: {
        prevCursor: "<value>",
        nextCursor: "<value>",
        data: [
            {
                benefitPlanType: BenefitPlanType.HealthSavings,
                name: "Company Health Plan",
                description: "Comprehensive health insurance coverage for employees",
                deductionCode: "HEALTH-001",
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

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                           | [operations.ListHrisEmployerBenefitsResponseBody](../../models/operations/listhrisemployerbenefitsresponsebody.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |