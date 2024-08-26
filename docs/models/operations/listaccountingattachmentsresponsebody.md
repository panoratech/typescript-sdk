# ListAccountingAttachmentsResponseBody

## Example Usage

```typescript
import { ListAccountingAttachmentsResponseBody } from "@panora/sdk/models/operations";

let value: ListAccountingAttachmentsResponseBody = {
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
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `prevCursor`                                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `nextCursor`                                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `data`                                                                                                         | [components.UnifiedAccountingAttachmentOutput](../../models/components/unifiedaccountingattachmentoutput.md)[] | :heavy_check_mark:                                                                                             | N/A                                                                                                            |