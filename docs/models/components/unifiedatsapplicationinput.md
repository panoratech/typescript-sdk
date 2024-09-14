# UnifiedAtsApplicationInput

## Example Usage

```typescript
import { UnifiedAtsApplicationInput } from "@panora/sdk/models/components";

let value: UnifiedAtsApplicationInput = {
  appliedAt: new Date("2024-10-01T12:00:00Z"),
  rejectedAt: new Date("2024-10-01T12:00:00Z"),
  offers: [
    "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    "12345678-1234-1234-1234-123456789012",
  ],
  source: "Source Name",
  creditedTo: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  currentStage: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  rejectReason: "Candidate not experienced enough",
  candidateId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  jobId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  fieldMappings: {
    "fav_dish": "broccoli",
    "fav_color": "red",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `appliedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The application date                                                                          | 2024-10-01T12:00:00Z                                                                          |
| `rejectedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The rejection date                                                                            | 2024-10-01T12:00:00Z                                                                          |
| `offers`                                                                                      | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | The offers UUIDs for the application                                                          | [<br/>"801f9ede-c698-4e66-a7fc-48d19eebaa4f",<br/>"12345678-1234-1234-1234-123456789012"<br/>] |
| `source`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The source of the application                                                                 | Source Name                                                                                   |
| `creditedTo`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the person credited for the application                                           | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `currentStage`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the current stage of the application                                              | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `rejectReason`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | The rejection reason for the application                                                      | Candidate not experienced enough                                                              |
| `candidateId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the candidate                                                                     | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `jobId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the job                                                                           | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `fieldMappings`                                                                               | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The custom field mappings of the object between the remote 3rd party & Panora                 | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                    |