# ListCrmStagesResponse

## Example Usage

```typescript
import { ListCrmStagesResponse } from "@panora/sdk/models/operations";

let value: ListCrmStagesResponse = {
    result: {
        prevCursor: "<value>",
        nextCursor: "<value>",
        data: [
            {
                stageName: "Qualified",
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
                createdAt: {},
                modifiedAt: {},
            },
        ],
    },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [operations.ListCrmStagesResponseBody](../../models/operations/listcrmstagesresponsebody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |