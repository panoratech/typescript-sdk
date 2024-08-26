# CreateAtsApplicationRequest

## Example Usage

```typescript
import { CreateAtsApplicationRequest } from "@panora/sdk/models/operations";

let value: CreateAtsApplicationRequest = {
    xConnectionToken: "<value>",
    remoteData: false,
    unifiedAtsApplicationInput: {
        appliedAt: new Date("2024-10-01T12:00:00Z"),
        rejectedAt: new Date("2024-10-01T12:00:00Z"),
        offers: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f", "12345678-1234-1234-1234-123456789012"],
        source: "Source Name",
        creditedTo: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        currentStage: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        rejectReason: "Candidate not experienced enough",
        candidateId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        jobId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        fieldMappings: {
            fav_dish: "broccoli",
            fav_color: "red",
        },
    },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `xConnectionToken`                                                                             | *string*                                                                                       | :heavy_check_mark:                                                                             | The connection token                                                                           |                                                                                                |
| `remoteData`                                                                                   | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | Set to true to include data from the original Ats software.                                    | false                                                                                          |
| `unifiedAtsApplicationInput`                                                                   | [components.UnifiedAtsApplicationInput](../../models/components/unifiedatsapplicationinput.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |