# CreateMarketingautomationActionRequest

## Example Usage

```typescript
import { CreateMarketingautomationActionRequest } from "@panora/sdk/models/operations";

let value: CreateMarketingautomationActionRequest = {
  xConnectionToken: "<value>",
  remoteData: false,
  unifiedMarketingautomationActionInput: {},
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `xConnectionToken`                                                                                                   | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The connection token                                                                                                 |                                                                                                                      |
| `remoteData`                                                                                                         | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | Set to true to include data from the original Marketingautomation software.                                          | false                                                                                                                |
| `unifiedMarketingautomationActionInput`                                                                              | [components.UnifiedMarketingautomationActionInput](../../models/components/unifiedmarketingautomationactioninput.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |