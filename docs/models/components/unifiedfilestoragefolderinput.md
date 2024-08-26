# UnifiedFilestorageFolderInput

## Example Usage

```typescript
import { UnifiedFilestorageFolderInput } from "@panora/sdk/models/components";

let value: UnifiedFilestorageFolderInput = {
    name: "school",
    size: "2048",
    folderUrl: "https://example.com/school",
    description: "All things school related",
    driveId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    parentFolderId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    sharedLink: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    permission: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    fieldMappings: {
        fav_dish: "broccoli",
        fav_color: "red",
    },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `name`                                                                        | *string*                                                                      | :heavy_check_mark:                                                            | The name of the folder                                                        | school                                                                        |
| `size`                                                                        | *string*                                                                      | :heavy_check_mark:                                                            | The size of the folder                                                        | 2048                                                                          |
| `folderUrl`                                                                   | *string*                                                                      | :heavy_check_mark:                                                            | The url of the folder                                                         | https://example.com/school                                                    |
| `description`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | The description of the folder                                                 | All things school related                                                     |
| `driveId`                                                                     | *string*                                                                      | :heavy_check_mark:                                                            | The UUID of the drive tied to the folder                                      | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                          |
| `parentFolderId`                                                              | *string*                                                                      | :heavy_check_mark:                                                            | The UUID of the parent folder                                                 | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                          |
| `sharedLink`                                                                  | *string*                                                                      | :heavy_check_mark:                                                            | The UUID of the shared link tied to the folder                                | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                          |
| `permission`                                                                  | *string*                                                                      | :heavy_check_mark:                                                            | The UUID of the permission tied to the folder                                 | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                          |
| `fieldMappings`                                                               | Record<string, *any*>                                                         | :heavy_minus_sign:                                                            | The custom field mappings of the object between the remote 3rd party & Panora | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                    |