# Type

The type of the ticket. Authorized values are PROBLEM, QUESTION, or TASK

## Example Usage

```typescript
import { Type } from "@panora/sdk/models/components";

let value: Type = Type.Bug;
```

## Values

| Name      | Value     |
| --------- | --------- |
| `Bug`     | BUG       |
| `Subtask` | SUBTASK   |
| `Task`    | TASK      |
| `ToDo`    | TO-DO     |