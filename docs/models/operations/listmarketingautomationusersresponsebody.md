# ListMarketingAutomationUsersResponseBody

## Example Usage

```typescript
import { ListMarketingAutomationUsersResponseBody } from "@panora/sdk/models/operations";

let value: ListMarketingAutomationUsersResponseBody = {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [{}],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `prevCursor`                                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `nextCursor`                                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.UnifiedMarketingautomationUserOutput](../../models/components/unifiedmarketingautomationuseroutput.md)[] | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |