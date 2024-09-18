# QueryBody

## Example Usage

```typescript
import { QueryBody } from "@panora/sdk/models/components";

let value: QueryBody = {
  query: "When does Panora incorporated?",
  topK: 3,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `query`                                                  | *string*                                                 | :heavy_check_mark:                                       | The query you want to received embeddings and chunks for | When does Panora incorporated?                           |
| `topK`                                                   | *number*                                                 | :heavy_minus_sign:                                       | The number of most appropriate documents for your query. | 3                                                        |