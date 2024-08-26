# CreateEcommerceProductRequest

## Example Usage

```typescript
import { UnifiedEcommerceProductInputProductStatus } from "@panora/sdk/models/components";
import { CreateEcommerceProductRequest } from "@panora/sdk/models/operations";

let value: CreateEcommerceProductRequest = {
    xConnectionToken: "<value>",
    remoteData: false,
    unifiedEcommerceProductInput: {
        productUrl: "https://product_url/tee",
        productType: "teeshirt",
        productStatus: UnifiedEcommerceProductInputProductStatus.Active,
        imagesUrls: ["https://myproduct/image"],
        description: "best tee ever",
        vendor: "vendor_extern",
        variants: [{}],
        tags: ["tag_1"],
        fieldMappings: {},
    },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `xConnectionToken`                                                                                 | *string*                                                                                           | :heavy_check_mark:                                                                                 | The connection token                                                                               |                                                                                                    |
| `remoteData`                                                                                       | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | Set to true to include data from the original Accounting software.                                 | false                                                                                              |
| `unifiedEcommerceProductInput`                                                                     | [components.UnifiedEcommerceProductInput](../../models/components/unifiedecommerceproductinput.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |