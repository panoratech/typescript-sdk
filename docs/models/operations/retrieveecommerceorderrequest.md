# RetrieveEcommerceOrderRequest

## Example Usage

```typescript
import { RetrieveEcommerceOrderRequest } from "@panora/sdk/models/operations";

let value: RetrieveEcommerceOrderRequest = {
  xConnectionToken: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `xConnectionToken`                                          | *string*                                                    | :heavy_check_mark:                                          | The connection token                                        |
| `id`                                                        | *string*                                                    | :heavy_check_mark:                                          | id of the order you want to retrieve.                       |
| `remoteData`                                                | *boolean*                                                   | :heavy_minus_sign:                                          | Set to true to include data from the original Ats software. |