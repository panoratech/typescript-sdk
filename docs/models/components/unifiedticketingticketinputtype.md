# UnifiedTicketingTicketInputType

The type of the ticket. Authorized values are PROBLEM, QUESTION, or TASK

## Example Usage

```typescript
import { UnifiedTicketingTicketInputType } from "@panora/sdk/models/components";

let value: UnifiedTicketingTicketInputType = UnifiedTicketingTicketInputType.Bug;
```

## Values

| Name      | Value     |
| --------- | --------- |
| `Bug`     | BUG       |
| `Subtask` | SUBTASK   |
| `Task`    | TASK      |
| `ToDo`    | TO-DO     |