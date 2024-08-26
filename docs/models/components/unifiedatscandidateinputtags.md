# UnifiedAtsCandidateInputTags

## Example Usage

```typescript
import { UnifiedAtsCandidateInputTags } from "@panora/sdk/models/components";

let value: UnifiedAtsCandidateInputTags = {
    name: "Important",
    idAtsCandidate: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    fieldMappings: {
        fav_dish: "broccoli",
        fav_color: "red",
    },
    id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    remoteId: "id_1",
    remoteData: {
        fav_dish: "broccoli",
        fav_color: "red",
    },
    createdAt: new Date("2024-10-01T12:00:00Z"),
    modifiedAt: new Date("2024-10-01T12:00:00Z"),
};
```

## Supported Types

### `string`

```typescript
const value: string = /* values here */
```

### `components.UnifiedAtsTagOutput`

```typescript
const value: components.UnifiedAtsTagOutput = /* values here */
```

