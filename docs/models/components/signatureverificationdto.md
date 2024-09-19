# SignatureVerificationDto

## Example Usage

```typescript
import { SignatureVerificationDto } from "@panora/sdk/models/components";

let value: SignatureVerificationDto = {
  payload: {
    "key": "<value>",
  },
  signature: "<value>",
  secret: "<value>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `payload`                         | Record<string, *any*>             | :heavy_check_mark:                | The payload event of the webhook. |
| `signature`                       | *string*                          | :heavy_check_mark:                | The signature of the webhook.     |
| `secret`                          | *string*                          | :heavy_check_mark:                | The secret of the webhook.        |