# QueryRequest

## Example Usage

```typescript
import { QueryRequest } from "@panora/sdk/models/operations";

let value: QueryRequest = {
  xConnectionToken: "<value>",
  queryBody: {
    query: "When does Panora incorporated?",
    topK: 3,
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `xConnectionToken`                                           | *string*                                                     | :heavy_check_mark:                                           | The connection token                                         |
| `queryBody`                                                  | [components.QueryBody](../../models/components/querybody.md) | :heavy_check_mark:                                           | N/A                                                          |