# CreateCrmNoteRequest

## Example Usage

```typescript
import { CreateCrmNoteRequest } from "@panora/sdk/models/operations";

let value: CreateCrmNoteRequest = {
    xConnectionToken: "<value>",
    remoteData: false,
    unifiedCrmNoteInput: {
        content: "My notes taken during the meeting",
        userId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        companyId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        contactId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        dealId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        fieldMappings: {
            fav_dish: "broccoli",
            fav_color: "red",
        },
    },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `xConnectionToken`                                                               | *string*                                                                         | :heavy_check_mark:                                                               | The connection token                                                             |                                                                                  |
| `remoteData`                                                                     | *boolean*                                                                        | :heavy_minus_sign:                                                               | Set to true to include data from the original Crm software.                      | false                                                                            |
| `unifiedCrmNoteInput`                                                            | [components.UnifiedCrmNoteInput](../../models/components/unifiedcrmnoteinput.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |