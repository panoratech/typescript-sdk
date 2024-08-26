# CreateCrmEngagementRequest

## Example Usage

```typescript
import { UnifiedCrmEngagementInputDirection, UnifiedCrmEngagementInputType } from "@panora/sdk/models/components";
import { CreateCrmEngagementRequest } from "@panora/sdk/models/operations";

let value: CreateCrmEngagementRequest = {
    xConnectionToken: "<value>",
    remoteData: false,
    unifiedCrmEngagementInput: {
        content: "Meeting call with CTO",
        direction: UnifiedCrmEngagementInputDirection.Inbound,
        subject: "Technical features planning",
        startAt: new Date("2024-10-01T12:00:00Z"),
        endTime: new Date("2024-10-01T22:00:00Z"),
        type: UnifiedCrmEngagementInputType.Meeting,
        userId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        companyId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        contacts: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
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
| `remoteData`                                                                                 | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Set to true to include data from the original Crm software.                                  | false                                                                                        |
| `unifiedCrmEngagementInput`                                                                  | [components.UnifiedCrmEngagementInput](../../models/components/unifiedcrmengagementinput.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |