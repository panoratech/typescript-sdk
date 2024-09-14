# UnifiedAtsActivityOutput

## Example Usage

```typescript
import { UnifiedAtsActivityOutput } from "@panora/sdk/models/components";

let value: UnifiedAtsActivityOutput = {
  activityType: "NOTE",
  subject: "Email subject",
  body: "Dear Diana, I love you",
  visibility: "PUBLIC",
  candidateId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  remoteCreatedAt: new Date("2024-10-01T12:00:00Z"),
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
| `activityType`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | The type of activity. NOTE, EMAIL or OTHER                                                    | NOTE                                                                                          |
| `subject`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The subject of the activity                                                                   | Email subject                                                                                 |
| `body`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The body of the activity                                                                      | Dear Diana, I love you                                                                        |
| `visibility`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | The visibility of the activity. ADMIN_ONLY, PUBLIC or PRIVATE                                 | PUBLIC                                                                                        |
| `candidateId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the candidate                                                                     | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `remoteCreatedAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The remote creation date of the activity                                                      | 2024-10-01T12:00:00Z                                                                          |
| `fieldMappings`                                                                               | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The custom field mappings of the object between the remote 3rd party & Panora                 | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the activity                                                                      | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The remote ID of the activity in the context of the 3rd Party                                 | id_1                                                                                          |
| `remoteData`                                                                                  | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The remote data of the activity in the context of the 3rd Party                               | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                    |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The created date of the object                                                                | 2024-10-01T12:00:00Z                                                                          |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The modified date of the object                                                               | 2024-10-01T12:00:00Z                                                                          |