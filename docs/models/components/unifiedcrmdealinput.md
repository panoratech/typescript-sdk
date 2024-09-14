# UnifiedCrmDealInput

## Example Usage

```typescript
import { UnifiedCrmDealInput } from "@panora/sdk/models/components";

let value: UnifiedCrmDealInput = {
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
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | The name of the deal                                                           | Huge Contract with Acme                                                        |
| `description`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | The description of the deal                                                    | Contract with Sales Operations Team                                            |
| `amount`                                                                       | *number*                                                                       | :heavy_check_mark:                                                             | The amount of the deal                                                         | 1000                                                                           |
| `userId`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | The UUID of the user who is on the deal                                        | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                           |
| `stageId`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | The UUID of the stage of the deal                                              | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                           |
| `companyId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | The UUID of the company tied to the deal                                       | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                           |
| `fieldMappings`                                                                | Record<string, *any*>                                                          | :heavy_minus_sign:                                                             | The custom field mappings of the company between the remote 3rd party & Panora | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                     |