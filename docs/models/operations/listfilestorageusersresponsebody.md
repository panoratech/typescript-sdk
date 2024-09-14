# ListFilestorageUsersResponseBody

## Example Usage

```typescript
import { ListFilestorageUsersResponseBody } from "@panora/sdk/models/operations";

let value: ListFilestorageUsersResponseBody = {
  prevCursor: "<value>",
  nextCursor: "<value>",
  data: [
    {
      name: "Joe Doe",
      email: "joe.doe@gmail.com",
      isMe: true,
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
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `prevCursor`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `nextCursor`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `data`                                                                                               | [components.UnifiedFilestorageUserOutput](../../models/components/unifiedfilestorageuseroutput.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |