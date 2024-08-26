# UnifiedAtsScorecardOutput

## Example Usage

```typescript
import { OverallRecommendation, UnifiedAtsScorecardOutput } from "@panora/sdk/models/components";

let value: UnifiedAtsScorecardOutput = {
    overallRecommendation: OverallRecommendation.Yes,
    applicationId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    interviewId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    remoteCreatedAt: new Date("2024-10-01T12:00:00Z"),
    submittedAt: new Date("2024-10-01T12:00:00Z"),
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `overallRecommendation`                                                                       | [components.OverallRecommendation](../../models/components/overallrecommendation.md)          | :heavy_minus_sign:                                                                            | The overall recommendation                                                                    | YES                                                                                           |
| `applicationId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the application                                                                   | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `interviewId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the interview                                                                     | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `remoteCreatedAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The remote creation date of the scorecard                                                     | 2024-10-01T12:00:00Z                                                                          |
| `submittedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The submission date of the scorecard                                                          | 2024-10-01T12:00:00Z                                                                          |
| `fieldMappings`                                                                               | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The custom field mappings of the object between the remote 3rd party & Panora                 | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the scorecard                                                                     | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The remote ID of the scorecard in the context of the 3rd Party                                | id_1                                                                                          |
| `remoteData`                                                                                  | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The remote data of the scorecard in the context of the 3rd Party                              | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                    |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The created date of the object                                                                | 2024-10-01T12:00:00Z                                                                          |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The modified date of the object                                                               | 2024-10-01T12:00:00Z                                                                          |