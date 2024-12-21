# CreateEcommerceOrderRequest

## Example Usage

```typescript
import { CreateEcommerceOrderRequest } from "@panora/sdk/models/operations";

let value: CreateEcommerceOrderRequest = {
  xConnectionToken: "<value>",
  remoteData: false,
  unifiedEcommerceOrderInput: {
    orderStatus: "UNSHIPPED",
    orderNumber: "19823838833",
    paymentStatus: "SUCCESS",
    currency: "AUD",
    totalPrice: 300,
    totalDiscount: 10,
    totalShipping: 120,
    totalTax: 120,
    fulfillmentStatus: "PENDING",
    customerId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    items: [
      {
        remoteId: "12345",
      },
    ],
    fieldMappings: {},
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `xConnectionToken`                                                                             | *string*                                                                                       | :heavy_check_mark:                                                                             | The connection token                                                                           |                                                                                                |
| `remoteData`                                                                                   | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | Set to true to include data from the original Accounting software.                             | false                                                                                          |
| `unifiedEcommerceOrderInput`                                                                   | [components.UnifiedEcommerceOrderInput](../../models/components/unifiedecommerceorderinput.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |