# UnifiedCrmDealOutput

## Example Usage

```typescript
import { UnifiedCrmDealOutput } from "@panora/sdk/models/components";

let value: UnifiedCrmDealOutput = {
  name: "Huge Contract with Acme",
  description: "Contract with Sales Operations Team",
  amount: 1000,
  userId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  stageId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  companyId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
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
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the deal                                                                          | Huge Contract with Acme                                                                       |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The description of the deal                                                                   | Contract with Sales Operations Team                                                           |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | The amount of the deal                                                                        | 1000                                                                                          |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the user who is on the deal                                                       | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `stageId`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the stage of the deal                                                             | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `companyId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the company tied to the deal                                                      | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `fieldMappings`                                                                               | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The custom field mappings of the company between the remote 3rd party & Panora                | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the deal                                                                          | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The id of the deal in the context of the Crm 3rd Party                                        | id_1                                                                                          |
| `remoteData`                                                                                  | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The remote data of the deal in the context of the Crm 3rd Party                               | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                    |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The created date of the object                                                                | 2024-10-01T12:00:00Z                                                                          |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The modified date of the object                                                               | 2024-10-01T12:00:00Z                                                                          |