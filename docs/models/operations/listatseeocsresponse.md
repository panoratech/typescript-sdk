# ListAtsEeocsResponse

## Example Usage

```typescript
import { ListAtsEeocsResponse } from "@panora/sdk/models/operations";

let value: ListAtsEeocsResponse = {
  result: {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
      {
        candidateId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        submittedAt: new Date("2024-10-01T12:00:00Z"),
        race: "AMERICAN_INDIAN_OR_ALASKAN_NATIVE",
        gender: "MALE",
        veteranStatus: "I_AM_NOT_A_PROTECTED_VETERAN",
        disabilityStatus:
          "YES_I_HAVE_A_DISABILITY_OR_PREVIOUSLY_HAD_A_DISABILITY",
        fieldMappings: {
          "fav_dish": "broccoli",
          "fav_color": "red",
        },
        id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        remoteId: "id_1",
        remoteData: {
          "fav_dish": "broccoli",
          "fav_color": "red",
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