# ListAtsUsersResponse

## Example Usage

```typescript
import { AccessRole } from "@panora/sdk/models/components";
import { ListAtsUsersResponse } from "@panora/sdk/models/operations";

let value: ListAtsUsersResponse = {
    result: {
        prevCursor: "<value>",
        nextCursor: "<value>",
        data: [
            {
                firstName: "John",
                lastName: "Doe",
                email: "john.doe@example.com",
                disabled: false,
                accessRole: AccessRole.Admin,
                remoteCreatedAt: new Date("2024-10-01T12:00:00Z"),
                remoteModifiedAt: new Date("2024-10-01T12:00:00Z"),
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

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [operations.ListAtsUsersResponseBody](../../models/operations/listatsusersresponsebody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |