# UnifiedAtsEeocsOutput

## Example Usage

```typescript
import { UnifiedAtsEeocsOutput } from "@panora/sdk/models/components";

let value: UnifiedAtsEeocsOutput = {
    candidateId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    submittedAt: new Date("2024-10-01T12:00:00Z"),
    race: "AMERICAN_INDIAN_OR_ALASKAN_NATIVE",
    gender: "MALE",
    veteranStatus: "I_AM_NOT_A_PROTECTED_VETERAN",
    disabilityStatus: "YES_I_HAVE_A_DISABILITY_OR_PREVIOUSLY_HAD_A_DISABILITY",
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
| `candidateId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the candidate                                                                     | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `submittedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The submission date of the EEOC                                                               | 2024-10-01T12:00:00Z                                                                          |
| `race`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The race of the candidate                                                                     | AMERICAN_INDIAN_OR_ALASKAN_NATIVE                                                             |
| `gender`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The gender of the candidate                                                                   | MALE                                                                                          |
| `veteranStatus`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The veteran status of the candidate                                                           | I_AM_NOT_A_PROTECTED_VETERAN                                                                  |
| `disabilityStatus`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | The disability status of the candidate                                                        | YES_I_HAVE_A_DISABILITY_OR_PREVIOUSLY_HAD_A_DISABILITY                                        |
| `fieldMappings`                                                                               | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The custom field mappings of the object between the remote 3rd party & Panora                 | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the EEOC                                                                          | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The remote ID of the EEOC in the context of the 3rd Party                                     | id_1                                                                                          |
| `remoteData`                                                                                  | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The remote data of the EEOC in the context of the 3rd Party                                   | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                    |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The created date of the object                                                                | 2024-10-01T12:00:00Z                                                                          |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The modified date of the object                                                               | 2024-10-01T12:00:00Z                                                                          |