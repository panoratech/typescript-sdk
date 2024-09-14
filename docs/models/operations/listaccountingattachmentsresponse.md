# ListAccountingAttachmentsResponse

## Example Usage

```typescript
import { ListAccountingAttachmentsResponse } from "@panora/sdk/models/operations";

let value: ListAccountingAttachmentsResponse = {
  result: {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
      {
        fileName: "invoice.pdf",
        fileUrl: "https://example.com/files/invoice.pdf",
        accountId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        fieldMappings: {},
        id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        remoteId: "attachment_1234",
        remoteData: {},
        createdAt: new Date("2024-06-15T12:00:00Z"),
        modifiedAt: new Date("2024-06-15T12:00:00Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                             | [operations.ListAccountingAttachmentsResponseBody](../../models/operations/listaccountingattachmentsresponsebody.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |