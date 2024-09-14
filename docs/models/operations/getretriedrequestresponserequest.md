# GetRetriedRequestResponseRequest

## Example Usage

```typescript
import { GetRetriedRequestResponseRequest } from "@panora/sdk/models/operations";

let value: GetRetriedRequestResponseRequest = {
  retryId: "<value>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `retryId`                                                             | *string*                                                              | :heavy_check_mark:                                                    | id of the retryJob returned when you initiated a passthrough request. |