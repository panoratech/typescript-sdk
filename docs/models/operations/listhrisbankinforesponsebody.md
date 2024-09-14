# ListHrisBankInfoResponseBody

## Example Usage

```typescript
import { ListHrisBankInfoResponseBody } from "@panora/sdk/models/operations";

let value: ListHrisBankInfoResponseBody = {
  prevCursor: "<value>",
  nextCursor: "<value>",
  data: [
    {
      accountType: "CHECKING",
      bankName: "Bank of America",
      accountNumber: "1234567890",
      routingNumber: "021000021",
      employeeId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      fieldMappings: {},
      id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      remoteId: "id_1",
      remoteData: {},
      remoteCreatedAt: new Date("2024-10-01T12:00:00Z"),
      createdAt: new Date("2024-10-01T12:00:00Z"),
      modifiedAt: new Date("2024-10-01T12:00:00Z"),
      remoteWasDeleted: false,
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `prevCursor`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `nextCursor`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `data`                                                                                         | [components.UnifiedHrisBankinfoOutput](../../models/components/unifiedhrisbankinfooutput.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |