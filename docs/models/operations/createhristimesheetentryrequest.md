# CreateHrisTimesheetentryRequest

## Example Usage

```typescript
import { CreateHrisTimesheetentryRequest } from "@panora/sdk/models/operations";

let value: CreateHrisTimesheetentryRequest = {
    xConnectionToken: "<value>",
    unifiedHrisTimesheetEntryInput: {
        hoursWorked: 40,
        startTime: new Date("2024-10-01T08:00:00Z"),
        endTime: new Date("2024-10-01T16:00:00Z"),
        employeeId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        remoteWasDeleted: false,
        fieldMappings: {},
    },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `xConnectionToken`                                                                                     | *string*                                                                                               | :heavy_check_mark:                                                                                     | The connection token                                                                                   |
| `remoteData`                                                                                           | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | Set to true to include data from the original Hris software.                                           |
| `unifiedHrisTimesheetEntryInput`                                                                       | [components.UnifiedHrisTimesheetEntryInput](../../models/components/unifiedhristimesheetentryinput.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |