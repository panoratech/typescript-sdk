# ListTicketingUsersResponseBody

## Example Usage

```typescript
import { ListTicketingUsersResponseBody } from "@panora/sdk/models/operations";

let value: ListTicketingUsersResponseBody = {
  prevCursor: "<value>",
  nextCursor: "<value>",
  data: [
    {
      name: "John Doe",
      emailAddress: "john.doe@example.com",
      teams: [
        "team1",
        "team2",
      ],
      accountId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      fieldMappings: {
        "fav_dish": "broccoli",
        "fav_color": "red",
      },
      id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      remoteId: "id_1",
      remoteData: {
        "key1": "value1",
        "key2": 42,
        "key3": true,
      },
      createdAt: new Date("2024-10-01T12:00:00Z"),
      modifiedAt: new Date("2023-10-01T12:00:00Z"),
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `prevCursor`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `nextCursor`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `data`                                                                                           | [components.UnifiedTicketingUserOutput](../../models/components/unifiedticketinguseroutput.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |