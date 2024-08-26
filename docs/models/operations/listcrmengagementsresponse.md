# ListCrmEngagementsResponse

## Example Usage

```typescript
import { Direction, UnifiedCrmEngagementOutputType } from "@panora/sdk/models/components";
import { ListCrmEngagementsResponse } from "@panora/sdk/models/operations";

let value: ListCrmEngagementsResponse = {
    result: {
        prevCursor: "<value>",
        nextCursor: "<value>",
        data: [
            {
                content: "Meeting call with CTO",
                direction: Direction.Inbound,
                subject: "Technical features planning",
                startAt: new Date("2024-10-01T12:00:00Z"),
                endTime: new Date("2024-10-01T22:00:00Z"),
                type: UnifiedCrmEngagementOutputType.Meeting,
                userId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                companyId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                contacts: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
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

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `result`                                                                                               | [operations.ListCrmEngagementsResponseBody](../../models/operations/listcrmengagementsresponsebody.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |