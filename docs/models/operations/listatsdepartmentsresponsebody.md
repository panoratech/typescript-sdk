# ListAtsDepartmentsResponseBody

## Example Usage

```typescript
import { ListAtsDepartmentsResponseBody } from "@panora/sdk/models/operations";

let value: ListAtsDepartmentsResponseBody = {
  prevCursor: "<value>",
  nextCursor: "<value>",
  data: [
    {
      name: "Sales",
      fieldMappings: {
        "fav_dish": "broccoli",
        "fav_color": "red",
      },
      id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      remoteId: "id_1",
      remoteData: {
        "key1": "value1",
        "key2": 42,
        "key3": true,
      },
      createdAt: new Date("2024-10-01T12:00:00Z"),
      modifiedAt: new Date("2023-10-01T12:00:00Z"),
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `prevCursor`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `nextCursor`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `data`                                                                                           | [components.UnifiedAtsDepartmentOutput](../../models/components/unifiedatsdepartmentoutput.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |