# ListMarketingAutomationEventsResponseBody

## Example Usage

```typescript
import { ListMarketingAutomationEventsResponseBody } from "@panora/sdk/models/operations";

let value: ListMarketingAutomationEventsResponseBody = {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [{}],
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `prevCursor`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `nextCursor`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `data`                                                                                                                 | [components.UnifiedMarketingautomationEventOutput](../../models/components/unifiedmarketingautomationeventoutput.md)[] | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |