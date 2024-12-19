# ListEcommerceOrdersResponse

## Example Usage

```typescript
import { ListEcommerceOrdersResponse } from "@panora/sdk/models/operations";

let value: ListEcommerceOrdersResponse = {
  result: {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
      {
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

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                 | [operations.ListEcommerceOrdersResponseBody](../../models/operations/listecommerceordersresponsebody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |