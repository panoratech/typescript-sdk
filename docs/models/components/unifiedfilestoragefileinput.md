# UnifiedFilestorageFileInput

## Example Usage

```typescript
import { UnifiedFilestorageFileInput } from "@panora/sdk/models/components";

let value: UnifiedFilestorageFileInput = {
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
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `name`                                                                        | *string*                                                                      | :heavy_check_mark:                                                            | The name of the file                                                          | my_paris_photo.png                                                            |
| `fileUrl`                                                                     | *string*                                                                      | :heavy_check_mark:                                                            | The url of the file                                                           | https://example.com/my_paris_photo.png                                        |
| `mimeType`                                                                    | *string*                                                                      | :heavy_check_mark:                                                            | The mime type of the file                                                     | application/pdf                                                               |
| `size`                                                                        | *string*                                                                      | :heavy_check_mark:                                                            | The size of the file                                                          | 1024                                                                          |
| `folderId`                                                                    | *string*                                                                      | :heavy_check_mark:                                                            | The UUID of the folder tied to the file                                       | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                          |
| `permission`                                                                  | *string*                                                                      | :heavy_check_mark:                                                            | The UUID of the permission tied to the file                                   | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                          |
| `sharedLink`                                                                  | *string*                                                                      | :heavy_check_mark:                                                            | The UUID of the shared link tied to the file                                  | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                          |
| `fieldMappings`                                                               | Record<string, *any*>                                                         | :heavy_minus_sign:                                                            | The custom field mappings of the object between the remote 3rd party & Panora | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                    |