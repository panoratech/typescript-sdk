# CreateAccountingAttachmentRequest

## Example Usage

```typescript
import { CreateAccountingAttachmentRequest } from "@panora/sdk/models/operations";

let value: CreateAccountingAttachmentRequest = {
    xConnectionToken: "<value>",
    remoteData: false,
    unifiedAccountingAttachmentInput: {
        fileName: "invoice.pdf",
        fileUrl: "https://example.com/files/invoice.pdf",
        accountId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        fieldMappings: {},
    },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `xConnectionToken`                                                                                         | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The connection token                                                                                       |                                                                                                            |
| `remoteData`                                                                                               | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | Set to true to include data from the original Accounting software.                                         | false                                                                                                      |
| `unifiedAccountingAttachmentInput`                                                                         | [components.UnifiedAccountingAttachmentInput](../../models/components/unifiedaccountingattachmentinput.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |                                                                                                            |