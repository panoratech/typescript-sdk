# RetrieveTicketingCommentRequest

## Example Usage

```typescript
import { RetrieveTicketingCommentRequest } from "@panora/sdk/models/operations";

let value: RetrieveTicketingCommentRequest = {
  xConnectionToken: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `xConnectionToken`                                                | *string*                                                          | :heavy_check_mark:                                                | The connection token                                              |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | id of the `comment` you want to retrive.                          |
| `remoteData`                                                      | *boolean*                                                         | :heavy_minus_sign:                                                | Set to true to include data from the original Ticketing software. |