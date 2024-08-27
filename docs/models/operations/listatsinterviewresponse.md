# ListAtsInterviewResponse

## Example Usage

```typescript
import { ListAtsInterviewResponse } from "@panora/sdk/models/operations";

let value: ListAtsInterviewResponse = {
    result: {
        prevCursor: "<value>",
        nextCursor: "<value>",
        data: [
            {
                status: "SCHEDULED",
                applicationId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                jobInterviewStageId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                organizedBy: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                interviewers: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
                location: "San Francisco",
                startAt: new Date("2024-10-01T12:00:00Z"),
                endAt: new Date("2024-10-01T12:00:00Z"),
                remoteCreatedAt: new Date("2024-10-01T12:00:00Z"),
                remoteUpdatedAt: new Date("2024-10-01T12:00:00Z"),
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

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [operations.ListAtsInterviewResponseBody](../../models/operations/listatsinterviewresponsebody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |