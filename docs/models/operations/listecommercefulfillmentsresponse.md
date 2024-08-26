# ListEcommerceFulfillmentsResponse

## Example Usage

```typescript
import { ListEcommerceFulfillmentsResponse } from "@panora/sdk/models/operations";

let value: ListEcommerceFulfillmentsResponse = {
    result: {
        prevCursor: "<value>",
        nextCursor: "<value>",
        data: [
            {
                carrier: "DHL",
                trackingUrls: ["https://tracing-url.sf.com"],
                trackingNumbers: ["track_1029_191919"],
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
    },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                             | [operations.ListEcommerceFulfillmentsResponseBody](../../models/operations/listecommercefulfillmentsresponsebody.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |