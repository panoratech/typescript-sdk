# UnifiedAtsInterviewOutput

## Example Usage

```typescript
import { UnifiedAtsInterviewOutput } from "@panora/sdk/models/components";

let value: UnifiedAtsInterviewOutput = {
  status: "SCHEDULED",
  applicationId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  jobInterviewStageId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  organizedBy: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  interviewers: [
    "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  ],
  location: "San Francisco",
  startAt: new Date("2024-10-01T12:00:00Z"),
  endAt: new Date("2024-10-01T12:00:00Z"),
  remoteCreatedAt: new Date("2024-10-01T12:00:00Z"),
  remoteUpdatedAt: new Date("2024-10-01T12:00:00Z"),
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
| `status`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The status of the interview                                                                   | SCHEDULED                                                                                     |
| `applicationId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the application                                                                   | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `jobInterviewStageId`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the job interview stage                                                           | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `organizedBy`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the organizer                                                                     | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `interviewers`                                                                                | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | The UUIDs of the interviewers                                                                 | [<br/>"801f9ede-c698-4e66-a7fc-48d19eebaa4f"<br/>]                                            |
| `location`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The location of the interview                                                                 | San Francisco                                                                                 |
| `startAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The start date and time of the interview                                                      | 2024-10-01T12:00:00Z                                                                          |
| `endAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The end date and time of the interview                                                        | 2024-10-01T12:00:00Z                                                                          |
| `remoteCreatedAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The remote creation date of the interview                                                     | 2024-10-01T12:00:00Z                                                                          |
| `remoteUpdatedAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The remote modification date of the interview                                                 | 2024-10-01T12:00:00Z                                                                          |
| `fieldMappings`                                                                               | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The custom field mappings of the object between the remote 3rd party & Panora                 | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the interview                                                                     | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The remote ID of the interview in the context of the 3rd Party                                | id_1                                                                                          |
| `remoteData`                                                                                  | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The remote data of the interview in the context of the 3rd Party                              | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                    |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The created date of the object                                                                | 2024-10-01T12:00:00Z                                                                          |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The modified date of the object                                                               | 2024-10-01T12:00:00Z                                                                          |