# UnifiedAtsAttachmentInput

## Example Usage

```typescript
import { UnifiedAtsAttachmentInput } from "@panora/sdk/models/components";

let value: UnifiedAtsAttachmentInput = {
  fileUrl: "https://example.com/file.pdf",
  fileName: "file.pdf",
  attachmentType: "RESUME",
  remoteCreatedAt: new Date("2024-10-01T12:00:00Z"),
  remoteModifiedAt: new Date("2024-10-01T12:00:00Z"),
  candidateId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  fieldMappings: {
    "fav_dish": "broccoli",
    "fav_color": "red",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `fileUrl`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The URL of the file                                                                           | https://example.com/file.pdf                                                                  |
| `fileName`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the file                                                                          | file.pdf                                                                                      |
| `attachmentType`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | The type of the file                                                                          | RESUME                                                                                        |
| `remoteCreatedAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The remote creation date of the attachment                                                    | 2024-10-01T12:00:00Z                                                                          |
| `remoteModifiedAt`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The remote modification date of the attachment                                                | 2024-10-01T12:00:00Z                                                                          |
| `candidateId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the candidate                                                                     | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `fieldMappings`                                                                               | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The custom field mappings of the object between the remote 3rd party & Panora                 | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                    |