# ListAtsEeocsResponse

## Example Usage

```typescript
import { DisabilityStatus, Race, UnifiedAtsEeocsOutputGender, VeteranStatus } from "@panora/sdk/models/components";
import { ListAtsEeocsResponse } from "@panora/sdk/models/operations";

let value: ListAtsEeocsResponse = {
    result: {
        prevCursor: "<value>",
        nextCursor: "<value>",
        data: [
            {
                candidateId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                submittedAt: new Date("2024-10-01T12:00:00Z"),
                race: Race.AmericanIndianOrAlaskanNative,
                gender: UnifiedAtsEeocsOutputGender.Male,
                veteranStatus: VeteranStatus.IAmNotAProtectedVeteran,
                disabilityStatus: DisabilityStatus.YesIHaveADisabilityOrPreviouslyHadADisability,
                fieldMappings: {
                    fav_dish: "broccoli",
                    fav_color: "red",
                },
                id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                remoteId: "id_1",
                remoteData: {
                    fav_dish: "broccoli",
                    fav_color: "red",
                },
                createdAt: new Date("2024-10-01T12:00:00Z"),
                modifiedAt: new Date("2024-10-01T12:00:00Z"),
            },
        ],
    },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [operations.ListAtsEeocsResponseBody](../../models/operations/listatseeocsresponsebody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |