# UnifiedAtsOfferOutput

## Example Usage

```typescript
import { UnifiedAtsOfferOutput } from "@panora/sdk/models/components";

let value: UnifiedAtsOfferOutput = {
  createdBy: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  remoteCreatedAt: new Date("2024-10-01T12:00:00Z"),
  closedAt: new Date("2024-10-01T12:00:00Z"),
  sentAt: new Date("2024-10-01T12:00:00Z"),
  startDate: new Date("2024-10-01T12:00:00Z"),
  status: "DRAFT",
  applicationId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
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
  createdAt: {},
  modifiedAt: {},
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `createdBy`                                                                                              | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The UUID of the creator                                                                                  | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                                     |
| `remoteCreatedAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | The remote creation date of the offer                                                                    | 2024-10-01T12:00:00Z                                                                                     |
| `closedAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | The closing date of the offer                                                                            | 2024-10-01T12:00:00Z                                                                                     |
| `sentAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | The sending date of the offer                                                                            | 2024-10-01T12:00:00Z                                                                                     |
| `startDate`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | The start date of the offer                                                                              | 2024-10-01T12:00:00Z                                                                                     |
| `status`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The status of the offer                                                                                  | DRAFT                                                                                                    |
| `applicationId`                                                                                          | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The UUID of the application                                                                              | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                                     |
| `fieldMappings`                                                                                          | Record<string, *any*>                                                                                    | :heavy_minus_sign:                                                                                       | The custom field mappings of the object between the remote 3rd party & Panora                            | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                               |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The UUID of the offer                                                                                    | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                                     |
| `remoteId`                                                                                               | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The remote ID of the offer in the context of the 3rd Party                                               | id_1                                                                                                     |
| `remoteData`                                                                                             | Record<string, *any*>                                                                                    | :heavy_minus_sign:                                                                                       | The remote data of the offer in the context of the 3rd Party                                             | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                               |
| `createdAt`                                                                                              | [components.UnifiedAtsOfferOutputCreatedAt](../../models/components/unifiedatsofferoutputcreatedat.md)   | :heavy_minus_sign:                                                                                       | The created date of the object                                                                           | 2024-10-01T12:00:00Z                                                                                     |
| `modifiedAt`                                                                                             | [components.UnifiedAtsOfferOutputModifiedAt](../../models/components/unifiedatsofferoutputmodifiedat.md) | :heavy_minus_sign:                                                                                       | The modified date of the object                                                                          | 2024-10-01T12:00:00Z                                                                                     |