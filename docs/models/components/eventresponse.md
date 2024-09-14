# EventResponse

## Example Usage

```typescript
import { EventResponse, EventResponseStatus, Method, Type } from "@panora/sdk/models/components";

let value: EventResponse = {
  idEvent: "123e4567-e89b-12d3-a456-426614174000",
  idConnection: "123e4567-e89b-12d3-a456-426614174001",
  idProject: "123e4567-e89b-12d3-a456-426614174002",
  type: Type.ConnectionCreated,
  status: EventResponseStatus.Success,
  direction: "0",
  method: Method.Post,
  url: "/crm/companies",
  provider: "hubspot",
  timestamp: new Date("2024-10-01T12:00:00Z"),
  idLinkedUser: "123e4567-e89b-12d3-a456-426614174003",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `idEvent`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the event                                                               | 123e4567-e89b-12d3-a456-426614174000                                                          |
| `idConnection`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | Connection ID associated with the event                                                       | 123e4567-e89b-12d3-a456-426614174001                                                          |
| `idProject`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Project ID associated with the event                                                          | 123e4567-e89b-12d3-a456-426614174002                                                          |
| `type`                                                                                        | [components.Type](../../models/components/type.md)                                            | :heavy_check_mark:                                                                            | Scope of the event                                                                            | connection.created                                                                            |
| `status`                                                                                      | [components.EventResponseStatus](../../models/components/eventresponsestatus.md)              | :heavy_check_mark:                                                                            | Status of the event                                                                           | success                                                                                       |
| `direction`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Direction of the event                                                                        | 0                                                                                             |
| `method`                                                                                      | [components.Method](../../models/components/method.md)                                        | :heavy_check_mark:                                                                            | HTTP method used for the event                                                                | POST                                                                                          |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | URL associated with the event                                                                 | /crm/companies                                                                                |
| `provider`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Provider associated with the event                                                            | hubspot                                                                                       |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp of the event                                                                        | 2024-10-01T12:00:00Z                                                                          |
| `idLinkedUser`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | Linked user ID associated with the event                                                      | 123e4567-e89b-12d3-a456-426614174003                                                          |