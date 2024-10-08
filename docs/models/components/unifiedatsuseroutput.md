# UnifiedAtsUserOutput

## Example Usage

```typescript
import { UnifiedAtsUserOutput } from "@panora/sdk/models/components";

let value: UnifiedAtsUserOutput = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  disabled: false,
  accessRole: "ADMIN",
  remoteCreatedAt: new Date("2024-10-01T12:00:00Z"),
  remoteModifiedAt: new Date("2024-10-01T12:00:00Z"),
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `firstName`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The first name of the user                                                                    | John                                                                                          |
| `lastName`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The last name of the user                                                                     | Doe                                                                                           |
| `email`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The email of the user                                                                         | john.doe@example.com                                                                          |
| `disabled`                                                                                    | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether the user is disabled                                                                  | false                                                                                         |
| `accessRole`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | The access role of the user                                                                   | ADMIN                                                                                         |
| `remoteCreatedAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The remote creation date of the user                                                          | 2024-10-01T12:00:00Z                                                                          |
| `remoteModifiedAt`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The remote modification date of the user                                                      | 2024-10-01T12:00:00Z                                                                          |
| `fieldMappings`                                                                               | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The custom field mappings of the object between the remote 3rd party & Panora                 | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the user                                                                          | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The remote ID of the user in the context of the 3rd Party                                     | id_1                                                                                          |
| `remoteData`                                                                                  | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The remote data of the user in the context of the 3rd Party                                   | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                    |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The created date of the object                                                                | 2024-10-01T12:00:00Z                                                                          |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The modified date of the object                                                               | 2024-10-01T12:00:00Z                                                                          |