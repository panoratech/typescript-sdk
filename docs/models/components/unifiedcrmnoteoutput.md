# UnifiedCrmNoteOutput

## Example Usage

```typescript
import { UnifiedCrmNoteOutput } from "@panora/sdk/models/components";

let value: UnifiedCrmNoteOutput = {
  content: "My notes taken during the meeting",
  userId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  companyId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  contactId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  dealId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
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
| `content`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The content of the note                                                                       | My notes taken during the meeting                                                             |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the user tied to the note                                                         | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `companyId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the company tied to the note                                                      | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `contactId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the contact tied to the note                                                      | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `dealId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the deal tied to the note                                                         | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `fieldMappings`                                                                               | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The custom field mappings of the note between the remote 3rd party & Panora                   | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the note                                                                          | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the note in the context of the Crm 3rd Party                                        | id_1                                                                                          |
| `remoteData`                                                                                  | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The remote data of the note in the context of the Crm 3rd Party                               | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                    |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The created date of the object                                                                | 2024-10-01T12:00:00Z                                                                          |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The modified date of the object                                                               | 2024-10-01T12:00:00Z                                                                          |