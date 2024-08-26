# ListAtsInterviewResponseBody

## Example Usage

```typescript
import { UnifiedAtsInterviewOutputStatus } from "@panora/sdk/models/components";
import { ListAtsInterviewResponseBody } from "@panora/sdk/models/operations";

let value: ListAtsInterviewResponseBody = {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
        {
            status: UnifiedAtsInterviewOutputStatus.Scheduled,
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
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `prevCursor`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `nextCursor`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `data`                                                                                         | [components.UnifiedAtsInterviewOutput](../../models/components/unifiedatsinterviewoutput.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |