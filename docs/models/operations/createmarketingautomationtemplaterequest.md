# CreateMarketingautomationTemplateRequest

## Example Usage

```typescript
import { CreateMarketingautomationTemplateRequest } from "@panora/sdk/models/operations";

let value: CreateMarketingautomationTemplateRequest = {
    xConnectionToken: "<value>",
    unifiedMarketingautomationTemplateInput: {},
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `xConnectionToken`                                                                                                       | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The connection token                                                                                                     |
| `remoteData`                                                                                                             | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | Set to true to include data from the original Marketingautomation software.                                              |
| `unifiedMarketingautomationTemplateInput`                                                                                | [components.UnifiedMarketingautomationTemplateInput](../../models/components/unifiedmarketingautomationtemplateinput.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |