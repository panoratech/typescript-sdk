# CreateEcommerceOrderRequest

## Example Usage

```typescript
import {
  UnifiedEcommerceOrderInputCurrency,
  UnifiedEcommerceOrderInputFulfillmentStatus,
  UnifiedEcommerceOrderInputOrderStatus,
  UnifiedEcommerceOrderInputPaymentStatus,
} from "@panora/sdk/models/components";
import { CreateEcommerceOrderRequest } from "@panora/sdk/models/operations";

let value: CreateEcommerceOrderRequest = {
    xConnectionToken: "<value>",
    remoteData: false,
    unifiedEcommerceOrderInput: {
        orderStatus: UnifiedEcommerceOrderInputOrderStatus.Unshipped,
        orderNumber: "19823838833",
        paymentStatus: UnifiedEcommerceOrderInputPaymentStatus.Success,
        currency: UnifiedEcommerceOrderInputCurrency.Aud,
        totalPrice: 300,
        totalDiscount: 10,
        totalShipping: 120,
        totalTax: 120,
        fulfillmentStatus: UnifiedEcommerceOrderInputFulfillmentStatus.Pending,
        customerId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        items: [
            {
                name: "Net Income",
                value: 100000,
                type: "Operating Activities",
                parentItem: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                remoteId: "12345",
                remoteGeneratedAt: new Date("2024-07-01T12:00:00Z"),
                companyInfoId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                createdAt: new Date("2024-06-15T12:00:00Z"),
                modifiedAt: new Date("2024-06-15T12:00:00Z"),
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