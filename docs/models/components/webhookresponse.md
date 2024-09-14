# WebhookResponse

## Example Usage

```typescript
import { WebhookResponse } from "@panora/sdk/models/components";

let value: WebhookResponse = {
  idWebhookEndpoint: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  endpointDescription: "Webhook to receive connection events",
  url: "https://acme.com/webhook_receiver",
  secret: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  active: true,
  createdAt: new Date("2024-10-01T12:00:00Z"),
  scope: [
    "connection.created",
  ],
  idProject: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  lastUpdate: new Date("2024-10-01T12:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `idWebhookEndpoint`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique UUID of the webhook.                                                               | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `endpointDescription`                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | The description of the webhook.                                                               | Webhook to receive connection events                                                          |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | The endpoint url of the webhook.                                                              | https://acme.com/webhook_receiver                                                             |
| `secret`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The secret of the webhook.                                                                    | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `active`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | The status of the webhook.                                                                    | true                                                                                          |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The created date of the webhook.                                                              | 2024-10-01T12:00:00Z                                                                          |
| `scope`                                                                                       | *string*[]                                                                                    | :heavy_check_mark:                                                                            | The events that the webhook listen to.                                                        | [<br/>"connection.created"<br/>]                                                              |
| `idProject`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The project id tied to the webhook.                                                           | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `lastUpdate`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The last update date of the webhook.                                                          | 2024-10-01T12:00:00Z                                                                          |