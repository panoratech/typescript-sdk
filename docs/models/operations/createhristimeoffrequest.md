# CreateHrisTimeoffRequest

## Example Usage

```typescript
import {
  UnifiedHrisTimeoffInputRequestType,
  UnifiedHrisTimeoffInputStatus,
  UnifiedHrisTimeoffInputUnits,
} from "@panora/sdk/models/components";
import { CreateHrisTimeoffRequest } from "@panora/sdk/models/operations";

let value: CreateHrisTimeoffRequest = {
    xConnectionToken: "<value>",
    unifiedHrisTimeoffInput: {
        employee: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        approver: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        status: UnifiedHrisTimeoffInputStatus.Requested,
        employeeNote: "Annual vacation",
        units: UnifiedHrisTimeoffInputUnits.Days,
        amount: 5,
        requestType: UnifiedHrisTimeoffInputRequestType.Vacation,
        startTime: new Date("2024-07-01T09:00:00Z"),
        endTime: new Date("2024-07-05T17:00:00Z"),
        fieldMappings: {},
    },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `xConnectionToken`                                                                       | *string*                                                                                 | :heavy_check_mark:                                                                       | The connection token                                                                     |
| `remoteData`                                                                             | *boolean*                                                                                | :heavy_minus_sign:                                                                       | Set to true to include data from the original Hris software.                             |
| `unifiedHrisTimeoffInput`                                                                | [components.UnifiedHrisTimeoffInput](../../models/components/unifiedhristimeoffinput.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |