# CreateAtsActivityRequest

## Example Usage

```typescript
import { UnifiedAtsActivityInputActivityType, UnifiedAtsActivityInputVisibility } from "@panora/sdk/models/components";
import { CreateAtsActivityRequest } from "@panora/sdk/models/operations";

let value: CreateAtsActivityRequest = {
    xConnectionToken: "<value>",
    remoteData: false,
    unifiedAtsActivityInput: {
        activityType: UnifiedAtsActivityInputActivityType.Note,
        subject: "Email subject",
        body: "Dear Diana, I love you",
        visibility: UnifiedAtsActivityInputVisibility.Public,
        candidateId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        remoteCreatedAt: new Date("2024-10-01T12:00:00Z"),
        fieldMappings: {
            fav_dish: "broccoli",
            fav_color: "red",
        },
    },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `xConnectionToken`                                                                       | *string*                                                                                 | :heavy_check_mark:                                                                       | The connection token                                                                     |                                                                                          |
| `remoteData`                                                                             | *boolean*                                                                                | :heavy_minus_sign:                                                                       | Set to true to include data from the original Ats software.                              | false                                                                                    |
| `unifiedAtsActivityInput`                                                                | [components.UnifiedAtsActivityInput](../../models/components/unifiedatsactivityinput.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |