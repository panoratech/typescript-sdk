# EventPayload

## Example Usage

```typescript
import { EventPayload } from "@panora/sdk/models/components";

let value: EventPayload = {
  idEvent: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  type: "connection.created",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `idEvent`                            | *string*                             | :heavy_check_mark:                   | The id of the event.                 | 801f9ede-c698-4e66-a7fc-48d19eebaa4f |
| `type`                               | *string*                             | :heavy_check_mark:                   | The type of the event.               | connection.created                   |