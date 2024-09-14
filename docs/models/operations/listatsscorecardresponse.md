# ListAtsScorecardResponse

## Example Usage

```typescript
import { ListAtsScorecardResponse } from "@panora/sdk/models/operations";

let value: ListAtsScorecardResponse = {
  result: {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
      {
        overallRecommendation: "YES",
        applicationId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        interviewId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        remoteCreatedAt: new Date("2024-10-01T12:00:00Z"),
        submittedAt: new Date("2024-10-01T12:00:00Z"),
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

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [operations.ListAtsScorecardResponseBody](../../models/operations/listatsscorecardresponsebody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |