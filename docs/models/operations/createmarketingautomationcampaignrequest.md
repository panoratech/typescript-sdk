# CreateMarketingautomationCampaignRequest

## Example Usage

```typescript
import { CreateMarketingautomationCampaignRequest } from "@panora/sdk/models/operations";

let value: CreateMarketingautomationCampaignRequest = {
  xConnectionToken: "<value>",
  remoteData: false,
  unifiedMarketingautomationCampaignInput: {},
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xConnectionToken`                                                                                                       | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The connection token                                                                                                     |                                                                                                                          |
| `remoteData`                                                                                                             | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | Set to true to include data from the original Marketingautomation software.                                              | false                                                                                                                    |
| `unifiedMarketingautomationCampaignInput`                                                                                | [components.UnifiedMarketingautomationCampaignInput](../../models/components/unifiedmarketingautomationcampaigninput.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |