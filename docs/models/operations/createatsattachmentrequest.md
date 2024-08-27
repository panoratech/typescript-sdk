# CreateAtsAttachmentRequest

## Example Usage

```typescript
import { CreateAtsAttachmentRequest } from "@panora/sdk/models/operations";

let value: CreateAtsAttachmentRequest = {
    xConnectionToken: "<value>",
    remoteData: false,
    unifiedAtsAttachmentInput: {
        fileUrl: "https://example.com/file.pdf",
        fileName: "file.pdf",
        attachmentType: "RESUME",
        remoteCreatedAt: new Date("2024-10-01T12:00:00Z"),
        remoteModifiedAt: new Date("2024-10-01T12:00:00Z"),
        candidateId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        fieldMappings: {
            fav_dish: "broccoli",
            fav_color: "red",
        },
    },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `xConnectionToken`                                                                           | *string*                                                                                     | :heavy_check_mark:                                                                           | The connection token                                                                         |                                                                                              |
| `remoteData`                                                                                 | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Set to true to include data from the original Ats software.                                  | false                                                                                        |
| `unifiedAtsAttachmentInput`                                                                  | [components.UnifiedAtsAttachmentInput](../../models/components/unifiedatsattachmentinput.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |