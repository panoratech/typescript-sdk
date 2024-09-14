# ResyncStatusDto

## Example Usage

```typescript
import { ResyncStatusDto, Status, Vertical } from "@panora/sdk/models/components";

let value: ResyncStatusDto = {
  timestamp: new Date(""),
  vertical: Vertical.Ticketing,
  provider: "gitlab",
  status: Status.Success,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `vertical`                                                                                    | [components.Vertical](../../models/components/vertical.md)                                    | :heavy_check_mark:                                                                            | N/A                                                                                           | ticketing                                                                                     |
| `provider`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | gitlab                                                                                        |
| `status`                                                                                      | [components.Status](../../models/components/status.md)                                        | :heavy_check_mark:                                                                            | N/A                                                                                           | success                                                                                       |