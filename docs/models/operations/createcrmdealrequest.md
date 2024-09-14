# CreateCrmDealRequest

## Example Usage

```typescript
import { CreateCrmDealRequest } from "@panora/sdk/models/operations";

let value: CreateCrmDealRequest = {
  xConnectionToken: "<value>",
  unifiedCrmDealInput: {
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
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `xConnectionToken`                                                               | *string*                                                                         | :heavy_check_mark:                                                               | The connection token                                                             |
| `remoteData`                                                                     | *boolean*                                                                        | :heavy_minus_sign:                                                               | Set to true to include data from the original Crm software.                      |
| `unifiedCrmDealInput`                                                            | [components.UnifiedCrmDealInput](../../models/components/unifiedcrmdealinput.md) | :heavy_check_mark:                                                               | N/A                                                                              |