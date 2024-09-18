# Payload

The payload event of the webhook.

## Example Usage

```typescript
import { Payload } from "@panora/sdk/models/components";

let value: Payload = {
  idEvent: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  type: "connection.created",
  data: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `idEvent`                              | *string*                               | :heavy_check_mark:                     | The id of the event.                   | 801f9ede-c698-4e66-a7fc-48d19eebaa4f   |
| `type`                                 | *string*                               | :heavy_check_mark:                     | The type of the event.                 | connection.created                     |
| `data`                                 | Record<string, *any*>                  | :heavy_check_mark:                     | The data payload event of the webhook. |                                        |