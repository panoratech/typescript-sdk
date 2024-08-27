# CreateAtsInterviewRequest

## Example Usage

```typescript
import { CreateAtsInterviewRequest } from "@panora/sdk/models/operations";

let value: CreateAtsInterviewRequest = {
    xConnectionToken: "<value>",
    remoteData: false,
    unifiedAtsInterviewInput: {
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
    },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `xConnectionToken`                                                                         | *string*                                                                                   | :heavy_check_mark:                                                                         | The connection token                                                                       |                                                                                            |
| `remoteData`                                                                               | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Set to true to include data from the original Ats software.                                | false                                                                                      |
| `unifiedAtsInterviewInput`                                                                 | [components.UnifiedAtsInterviewInput](../../models/components/unifiedatsinterviewinput.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |