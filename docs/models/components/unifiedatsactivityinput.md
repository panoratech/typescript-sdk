# UnifiedAtsActivityInput

## Example Usage

```typescript
import { UnifiedAtsActivityInput } from "@panora/sdk/models/components";

let value: UnifiedAtsActivityInput = {
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