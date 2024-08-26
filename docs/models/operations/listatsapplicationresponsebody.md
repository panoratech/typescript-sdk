# ListAtsApplicationResponseBody

## Example Usage

```typescript
import { ListAtsApplicationResponseBody } from "@panora/sdk/models/operations";

let value: ListAtsApplicationResponseBody = {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
        {
            appliedAt: new Date("2024-10-01T12:00:00Z"),
            rejectedAt: new Date("2024-10-01T12:00:00Z"),
            offers: [
                "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                "12345678-1234-1234-1234-123456789012",
            ],
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

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `prevCursor`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `nextCursor`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `data`                                                                                             | [components.UnifiedAtsApplicationOutput](../../models/components/unifiedatsapplicationoutput.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |