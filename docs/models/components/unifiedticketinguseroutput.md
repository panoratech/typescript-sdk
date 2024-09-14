# UnifiedTicketingUserOutput

## Example Usage

```typescript
import { UnifiedTicketingUserOutput } from "@panora/sdk/models/components";

let value: UnifiedTicketingUserOutput = {
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the user                                                                          | John Doe                                                                                      |
| `emailAddress`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | The email address of the user                                                                 | john.doe@example.com                                                                          |
| `teams`                                                                                       | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | The teams whose the user is part of                                                           | [<br/>"team1",<br/>"team2"<br/>]                                                              |
| `accountId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The account or organization the user is part of                                               | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `fieldMappings`                                                                               | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The custom field mappings of the user between the remote 3rd party & Panora                   | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the user                                                                          | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The id of the user in the context of the 3rd Party                                            | id_1                                                                                          |
| `remoteData`                                                                                  | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The remote data of the user in the context of the 3rd Party                                   | {<br/>"key1": "value1",<br/>"key2": 42,<br/>"key3": true<br/>}                                |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The created date of the object                                                                | 2024-10-01T12:00:00Z                                                                          |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The modified date of the object                                                               | 2023-10-01T12:00:00Z                                                                          |