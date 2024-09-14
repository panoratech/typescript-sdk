# ListHrisGroupsResponseBody

## Example Usage

```typescript
import { ListHrisGroupsResponseBody } from "@panora/sdk/models/operations";

let value: ListHrisGroupsResponseBody = {
  prevCursor: "<value>",
  nextCursor: "<value>",
  data: [
    {
      parentGroup: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      name: "Engineering Team",
      type: "DEPARTMENT",
      fieldMappings: {},
      id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      remoteId: "group_1234",
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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `prevCursor`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `nextCursor`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `data`                                                                                   | [components.UnifiedHrisGroupOutput](../../models/components/unifiedhrisgroupoutput.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |