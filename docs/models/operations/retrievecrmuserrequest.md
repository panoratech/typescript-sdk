# RetrieveCrmUserRequest

## Example Usage

```typescript
import { RetrieveCrmUserRequest } from "@panora/sdk/models/operations";

let value: RetrieveCrmUserRequest = {
  xConnectionToken: "<value>",
  id: "b008e199-eda9-4629-bd41-a01b6195864a",
  remoteData: true,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `xConnectionToken`                                          | *string*                                                    | :heavy_check_mark:                                          | The connection token                                        |                                                             |
| `id`                                                        | *string*                                                    | :heavy_check_mark:                                          | id of the user you want to retrieve.                        | b008e199-eda9-4629-bd41-a01b6195864a                        |
| `remoteData`                                                | *boolean*                                                   | :heavy_minus_sign:                                          | Set to true to include data from the original Crm software. | true                                                        |