# CreateCrmTaskRequest

## Example Usage

```typescript
import { CreateCrmTaskRequest } from "@panora/sdk/models/operations";

let value: CreateCrmTaskRequest = {
    xConnectionToken: "<value>",
    unifiedCrmTaskInput: {
        subject: "Answer customers",
        content: "Prepare email campaign",
        status: "PENDING",
        dueDate: "2024-10-01T12:00:00Z",
        finishedDate: "2024-10-01T12:00:00Z",
        userId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        companyId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        dealId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        fieldMappings: {
            fav_dish: "broccoli",
            fav_color: "red",
        },
    },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `xConnectionToken`                                                               | *string*                                                                         | :heavy_check_mark:                                                               | The connection token                                                             |
| `remoteData`                                                                     | *boolean*                                                                        | :heavy_minus_sign:                                                               | Set to true to include data from the original Crm software.                      |
| `unifiedCrmTaskInput`                                                            | [components.UnifiedCrmTaskInput](../../models/components/unifiedcrmtaskinput.md) | :heavy_check_mark:                                                               | N/A                                                                              |