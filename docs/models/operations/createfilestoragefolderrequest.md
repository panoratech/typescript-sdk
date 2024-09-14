# CreateFilestorageFolderRequest

## Example Usage

```typescript
import { CreateFilestorageFolderRequest } from "@panora/sdk/models/operations";

let value: CreateFilestorageFolderRequest = {
  xConnectionToken: "<value>",
  remoteData: false,
  unifiedFilestorageFolderInput: {
    name: "school",
    size: "2048",
    folderUrl: "https://example.com/school",
    description: "All things school related",
    driveId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    parentFolderId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    sharedLink: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    permission: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    fieldMappings: {
      "fav_dish": "broccoli",
      "fav_color": "red",
    },
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `xConnectionToken`                                                                                   | *string*                                                                                             | :heavy_check_mark:                                                                                   | The connection token                                                                                 |                                                                                                      |
| `remoteData`                                                                                         | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | Set to true to include data from the original Accounting software.                                   | false                                                                                                |
| `unifiedFilestorageFolderInput`                                                                      | [components.UnifiedFilestorageFolderInput](../../models/components/unifiedfilestoragefolderinput.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |