# ListEcommerceProductsResponseBody

## Example Usage

```typescript
import { ListEcommerceProductsResponseBody } from "@panora/sdk/models/operations";

let value: ListEcommerceProductsResponseBody = {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
        {
            productUrl: "https://product_url/tee",
            productType: "teeshirt",
            productStatus: "ACTIVE",
            imagesUrls: ["https://myproduct/image"],
            description: "best tee ever",
            vendor: "vendor_extern",
            variants: [{}],
            tags: ["tag_1"],
            fieldMappings: {},
            id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            remoteId: "id_1",
            remoteData: {},
            createdAt: "2024-10-01T12:00:00Z",
            modifiedAt: "2024-10-01T12:00:00Z",
        },
    ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `prevCursor`                                                                                           | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `nextCursor`                                                                                           | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `data`                                                                                                 | [components.UnifiedEcommerceProductOutput](../../models/components/unifiedecommerceproductoutput.md)[] | :heavy_check_mark:                                                                                     | N/A                                                                                                    |