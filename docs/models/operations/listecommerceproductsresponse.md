# ListEcommerceProductsResponse

## Example Usage

```typescript
import { ProductStatus } from "@panora/sdk/models/components";
import { ListEcommerceProductsResponse } from "@panora/sdk/models/operations";

let value: ListEcommerceProductsResponse = {
    result: {
        prevCursor: "<value>",
        nextCursor: "<value>",
        data: [
            {
                productUrl: "https://product_url/tee",
                productType: "teeshirt",
                productStatus: ProductStatus.Active,
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
    },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [operations.ListEcommerceProductsResponseBody](../../models/operations/listecommerceproductsresponsebody.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |