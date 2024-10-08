# UnifiedCrmStageOutput

## Example Usage

```typescript
import { UnifiedCrmStageOutput } from "@panora/sdk/models/components";

let value: UnifiedCrmStageOutput = {
  stageName: "Qualified",
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
| `stageName`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The name of the stage                                                                                    | Qualified                                                                                                |
| `fieldMappings`                                                                                          | Record<string, *any*>                                                                                    | :heavy_minus_sign:                                                                                       | The custom field mappings of the stage between the remote 3rd party & Panora                             | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                               |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The UUID of the stage                                                                                    | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                                     |
| `remoteId`                                                                                               | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The ID of the stage in the context of the Crm 3rd Party                                                  | id_1                                                                                                     |
| `remoteData`                                                                                             | Record<string, *any*>                                                                                    | :heavy_minus_sign:                                                                                       | The remote data of the stage in the context of the Crm 3rd Party                                         | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                               |
| `createdAt`                                                                                              | [components.UnifiedCrmStageOutputCreatedAt](../../models/components/unifiedcrmstageoutputcreatedat.md)   | :heavy_minus_sign:                                                                                       | The created date of the object                                                                           | 2024-10-01T12:00:00Z                                                                                     |
| `modifiedAt`                                                                                             | [components.UnifiedCrmStageOutputModifiedAt](../../models/components/unifiedcrmstageoutputmodifiedat.md) | :heavy_minus_sign:                                                                                       | The modified date of the object                                                                          | 2024-10-01T12:00:00Z                                                                                     |