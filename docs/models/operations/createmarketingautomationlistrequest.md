# CreateMarketingautomationListRequest

## Example Usage

```typescript
import { CreateMarketingautomationListRequest } from "@panora/sdk/models/operations";

let value: CreateMarketingautomationListRequest = {
  xConnectionToken: "<value>",
  unifiedMarketingautomationListInput: {},
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `xConnectionToken`                                                                                               | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The connection token                                                                                             |
| `remoteData`                                                                                                     | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | Set to true to include data from the original Marketingautomation software.                                      |
| `unifiedMarketingautomationListInput`                                                                            | [components.UnifiedMarketingautomationListInput](../../models/components/unifiedmarketingautomationlistinput.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |