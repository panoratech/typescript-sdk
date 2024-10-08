# CreateMarketingautomationAutomationRequest

## Example Usage

```typescript
import { CreateMarketingautomationAutomationRequest } from "@panora/sdk/models/operations";

let value: CreateMarketingautomationAutomationRequest = {
  xConnectionToken: "<value>",
  remoteData: false,
  unifiedMarketingautomationAutomationInput: {},
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `xConnectionToken`                                                                                                           | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The connection token                                                                                                         |                                                                                                                              |
| `remoteData`                                                                                                                 | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           | Set to true to include data from the original Marketingautomation software.                                                  | false                                                                                                                        |
| `unifiedMarketingautomationAutomationInput`                                                                                  | [components.UnifiedMarketingautomationAutomationInput](../../models/components/unifiedmarketingautomationautomationinput.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |