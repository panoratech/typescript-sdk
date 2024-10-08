# UnifiedAtsAttachmentOutput

## Example Usage

```typescript
import { UnifiedAtsAttachmentOutput } from "@panora/sdk/models/components";

let value: UnifiedAtsAttachmentOutput = {
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
  id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  remoteId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  remoteData: {
    "fav_dish": "broccoli",
    "fav_color": "red",
  },
  createdAt: new Date("2024-10-01T12:00:00Z"),
  modifiedAt: new Date("2024-10-01T12:00:00Z"),
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
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the attachment                                                                    | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The remote ID of the attachment                                                               | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `remoteData`                                                                                  | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The remote data of the attachment in the context of the 3rd Party                             | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                    |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The created date of the object                                                                | 2024-10-01T12:00:00Z                                                                          |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The modified date of the object                                                               | 2024-10-01T12:00:00Z                                                                          |