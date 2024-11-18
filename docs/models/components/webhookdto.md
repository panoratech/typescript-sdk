# WebhookDto

## Example Usage

```typescript
import { WebhookDto } from "@panora/sdk/models/components";

let value: WebhookDto = {
  url: "https://acme.com/webhook_receiver",
  description: "Webhook to receive connection events",
  scope: [
    "connection.created",
  ],
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `url`                                  | *string*                               | :heavy_check_mark:                     | The endpoint url of the webhook.       | https://acme.com/webhook_receiver      |
| `description`                          | *string*                               | :heavy_check_mark:                     | The description of the webhook.        | Webhook to receive connection events   |
| `scope`                                | *string*[]                             | :heavy_check_mark:                     | The events that the webhook listen to. | [<br/>"connection.created"<br/>]       |