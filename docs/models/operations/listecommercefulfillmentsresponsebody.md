# ListEcommerceFulfillmentsResponseBody

## Example Usage

```typescript
import { ListEcommerceFulfillmentsResponseBody } from "@panora/sdk/models/operations";

let value: ListEcommerceFulfillmentsResponseBody = {
  prevCursor: "<value>",
  nextCursor: "<value>",
  data: [
    {
      carrier: "DHL",
      trackingUrls: [
        "https://tracing-url.sf.com",
      ],
      trackingNumbers: [
        "track_1029_191919",
      ],
      items: {},
      orderId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `prevCursor`                                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `nextCursor`                                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `data`                                                                                                         | [components.UnifiedEcommerceFulfillmentOutput](../../models/components/unifiedecommercefulfillmentoutput.md)[] | :heavy_check_mark:                                                                                             | N/A                                                                                                            |