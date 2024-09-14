# UnifiedAtsCandidateOutputAttachments

## Example Usage

```typescript
import { UnifiedAtsCandidateOutputAttachments } from "@panora/sdk/models/components";

let value: UnifiedAtsCandidateOutputAttachments = {
  fileUrl: "https://example.com/file.pdf",
  fileName: "file.pdf",
  attachmentType: "RESUME",
  remoteCreatedAt: new Date("2024-10-01T12:00:00Z"),
  remoteModifiedAt: new Date("2024-10-01T12:00:00Z"),
  candidateId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  fieldMappings: {
    "fav_dish": "broccoli",
    "fav_color": "red",
  },
  id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  remoteId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  remoteData: {
    "fav_dish": "broccoli",
    "fav_color": "red",
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

### `components.UnifiedAtsAttachmentOutput`

```typescript
const value: components.UnifiedAtsAttachmentOutput = /* values here */
```

