# ListAtsJobInterviewStageResponse

## Example Usage

```typescript
import { ListAtsJobInterviewStageResponse } from "@panora/sdk/models/operations";

let value: ListAtsJobInterviewStageResponse = {
  result: {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
      {
        name: "Second Call",
        stageOrder: 1,
        jobId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
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

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                           | [operations.ListAtsJobInterviewStageResponseBody](../../models/operations/listatsjobinterviewstageresponsebody.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |