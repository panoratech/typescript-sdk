# ListAtsActivityResponse

## Example Usage

```typescript
import { ActivityType, Visibility } from "@panora/sdk/models/components";
import { ListAtsActivityResponse } from "@panora/sdk/models/operations";

let value: ListAtsActivityResponse = {
    result: {
        prevCursor: "<value>",
        nextCursor: "<value>",
        data: [
            {
                activityType: ActivityType.Note,
                subject: "Email subject",
                body: "Dear Diana, I love you",
                visibility: Visibility.Public,
                candidateId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                remoteCreatedAt: new Date("2024-10-01T12:00:00Z"),
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

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `result`                                                                                         | [operations.ListAtsActivityResponseBody](../../models/operations/listatsactivityresponsebody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |