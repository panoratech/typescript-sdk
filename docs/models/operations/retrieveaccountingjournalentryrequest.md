# RetrieveAccountingJournalEntryRequest

## Example Usage

```typescript
import { RetrieveAccountingJournalEntryRequest } from "@panora/sdk/models/operations";

let value: RetrieveAccountingJournalEntryRequest = {
  xConnectionToken: "<value>",
  id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  remoteData: false,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `xConnectionToken`                                                 | *string*                                                           | :heavy_check_mark:                                                 | The connection token                                               |                                                                    |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | id of the journalentry you want to retrieve.                       | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                               |
| `remoteData`                                                       | *boolean*                                                          | :heavy_minus_sign:                                                 | Set to true to include data from the original Accounting software. | false                                                              |