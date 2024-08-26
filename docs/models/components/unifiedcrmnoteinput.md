# UnifiedCrmNoteInput

## Example Usage

```typescript
import { UnifiedCrmNoteInput } from "@panora/sdk/models/components";

let value: UnifiedCrmNoteInput = {
    content: "My notes taken during the meeting",
    userId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    companyId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    contactId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    dealId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    fieldMappings: {
        fav_dish: "broccoli",
        fav_color: "red",
    },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `content`                                                                   | *string*                                                                    | :heavy_check_mark:                                                          | The content of the note                                                     | My notes taken during the meeting                                           |
| `userId`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | The UUID of the user tied to the note                                       | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                        |
| `companyId`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | The UUID of the company tied to the note                                    | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                        |
| `contactId`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | The UUID of the contact tied to the note                                    | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                        |
| `dealId`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | The UUID of the deal tied to the note                                       | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                        |
| `fieldMappings`                                                             | Record<string, *any*>                                                       | :heavy_minus_sign:                                                          | The custom field mappings of the note between the remote 3rd party & Panora | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                  |