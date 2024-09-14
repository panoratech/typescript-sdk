# CreateFilestorageFileRequest

## Example Usage

```typescript
import { CreateFilestorageFileRequest } from "@panora/sdk/models/operations";

let value: CreateFilestorageFileRequest = {
  xConnectionToken: "<value>",
  remoteData: false,
  unifiedFilestorageFileInput: {
    name: "my_paris_photo.png",
    fileUrl: "https://example.com/my_paris_photo.png",
    mimeType: "application/pdf",
    size: "1024",
    folderId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    permission: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    sharedLink: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    fieldMappings: {
      "fav_dish": "broccoli",
      "fav_color": "red",
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `xConnectionToken`                                                                               | *string*                                                                                         | :heavy_check_mark:                                                                               | The connection token                                                                             |                                                                                                  |
| `remoteData`                                                                                     | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Set to true to include data from the original Accounting software.                               | false                                                                                            |
| `unifiedFilestorageFileInput`                                                                    | [components.UnifiedFilestorageFileInput](../../models/components/unifiedfilestoragefileinput.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |