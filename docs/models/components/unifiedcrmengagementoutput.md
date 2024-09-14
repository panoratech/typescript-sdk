# UnifiedCrmEngagementOutput

## Example Usage

```typescript
import { UnifiedCrmEngagementOutput } from "@panora/sdk/models/components";

let value: UnifiedCrmEngagementOutput = {
  content: "Meeting call with CTO",
  direction: "INBOUND",
  subject: "Technical features planning",
  startAt: new Date("2024-10-01T12:00:00Z"),
  endTime: new Date("2024-10-01T22:00:00Z"),
  type: "MEETING",
  userId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  companyId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  contacts: [
    "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  ],
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
| `content`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The content of the engagement                                                                 | Meeting call with CTO                                                                         |
| `direction`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The direction of the engagement. Authorized values are INBOUND or OUTBOUND                    | INBOUND                                                                                       |
| `subject`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The subject of the engagement                                                                 | Technical features planning                                                                   |
| `startAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The start time of the engagement                                                              | 2024-10-01T12:00:00Z                                                                          |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The end time of the engagement                                                                | 2024-10-01T22:00:00Z                                                                          |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The type of the engagement. Authorized values are EMAIL, CALL or MEETING                      | MEETING                                                                                       |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the user tied to the engagement                                                   | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `companyId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the company tied to the engagement                                                | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `contacts`                                                                                    | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | The UUIDs of contacts tied to the engagement object                                           | [<br/>"801f9ede-c698-4e66-a7fc-48d19eebaa4f"<br/>]                                            |
| `fieldMappings`                                                                               | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The custom field mappings of the engagement between the remote 3rd party & Panora             | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the engagement                                                                    | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The id of the engagement in the context of the Crm 3rd Party                                  | id_1                                                                                          |
| `remoteData`                                                                                  | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The remote data of the engagement in the context of the Crm 3rd Party                         | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                    |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The created date of the object                                                                | 2024-10-01T12:00:00Z                                                                          |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The modified date of the object                                                               | 2024-10-01T12:00:00Z                                                                          |