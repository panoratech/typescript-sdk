# CreateMarketingAutomationContactRequest

## Example Usage

```typescript
import { CreateMarketingAutomationContactRequest } from "@panora/sdk/models/operations";

let value: CreateMarketingAutomationContactRequest = {
    xConnectionToken: "<value>",
    remoteData: false,
    unifiedMarketingautomationContactInput: {},
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `xConnectionToken`                                                                                                     | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The connection token                                                                                                   |                                                                                                                        |
| `remoteData`                                                                                                           | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | Set to true to include data from the original Marketingautomation software.                                            | false                                                                                                                  |
| `unifiedMarketingautomationContactInput`                                                                               | [components.UnifiedMarketingautomationContactInput](../../models/components/unifiedmarketingautomationcontactinput.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |