# ListAtsOfferResponse

## Example Usage

```typescript
import { ListAtsOfferResponse } from "@panora/sdk/models/operations";

let value: ListAtsOfferResponse = {
    result: {
        prevCursor: "<value>",
        nextCursor: "<value>",
        data: [
            {
                createdBy: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                remoteCreatedAt: new Date("2024-10-01T12:00:00Z"),
                closedAt: new Date("2024-10-01T12:00:00Z"),
                sentAt: new Date("2024-10-01T12:00:00Z"),
                startDate: new Date("2024-10-01T12:00:00Z"),
                status: "DRAFT",
                applicationId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
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
                createdAt: {},
                modifiedAt: {},
            },
        ],
    },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [operations.ListAtsOfferResponseBody](../../models/operations/listatsofferresponsebody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |