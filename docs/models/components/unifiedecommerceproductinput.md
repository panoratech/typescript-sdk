# UnifiedEcommerceProductInput

## Example Usage

```typescript
import { UnifiedEcommerceProductInput } from "@panora/sdk/models/components";

let value: UnifiedEcommerceProductInput = {
  productUrl: "https://product_url/tee",
  productType: "teeshirt",
  productStatus: "ACTIVE",
  imagesUrls: [
    "https://myproduct/image",
  ],
  description: "best tee ever",
  vendor: "vendor_extern",
  variants: [
    {},
  ],
  tags: [
    "tag_1",
  ],
  fieldMappings: {},
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `productUrl`                                                                                                                 | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The URL of the product                                                                                                       | https://product_url/tee                                                                                                      |
| `productType`                                                                                                                | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The type of the product                                                                                                      | teeshirt                                                                                                                     |
| `productStatus`                                                                                                              | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The status of the product. Either ACTIVE, DRAFT OR ARCHIVED.                                                                 | ACTIVE                                                                                                                       |
| `imagesUrls`                                                                                                                 | *string*[]                                                                                                                   | :heavy_minus_sign:                                                                                                           | The URLs of the product images                                                                                               | [<br/>"https://myproduct/image"<br/>]                                                                                        |
| `description`                                                                                                                | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The description of the product                                                                                               | best tee ever                                                                                                                |
| `vendor`                                                                                                                     | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The vendor of the product                                                                                                    | vendor_extern                                                                                                                |
| `variants`                                                                                                                   | [components.Variant](../../models/components/variant.md)[]                                                                   | :heavy_minus_sign:                                                                                                           | The variants of the product                                                                                                  | [<br/>{<br/>"title": "teeshirt",<br/>"price": 20,<br/>"sku": "3",<br/>"options": null,<br/>"weight": 10,<br/>"inventory_quantity": 100<br/>}<br/>] |
| `tags`                                                                                                                       | *string*[]                                                                                                                   | :heavy_minus_sign:                                                                                                           | The tags associated with the product                                                                                         | [<br/>"tag_1"<br/>]                                                                                                          |
| `fieldMappings`                                                                                                              | [components.UnifiedEcommerceProductInputFieldMappings](../../models/components/unifiedecommerceproductinputfieldmappings.md) | :heavy_minus_sign:                                                                                                           | The custom field mappings of the object between the remote 3rd party & Panora                                                | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                                                   |