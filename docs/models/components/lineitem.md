# LineItem

## Example Usage

```typescript
import { LineItem } from "@panora/sdk/models/components";

let value: LineItem = {
    name: "Net Income",
    value: 100000,
    type: "Operating Activities",
    parentItem: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    remoteId: "report_item_1234",
    remoteGeneratedAt: new Date("2024-07-01T12:00:00Z"),
    companyInfoId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    createdAt: new Date("2024-06-15T12:00:00Z"),
    modifiedAt: new Date("2024-06-15T12:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the report item                                                                   | Net Income                                                                                    |
| `value`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | The value of the report item                                                                  | 100000                                                                                        |
| `type`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The type of the report item                                                                   | Operating Activities                                                                          |
| `parentItem`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the parent item                                                                   | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The remote ID of the report item                                                              | report_item_1234                                                                              |
| `remoteGeneratedAt`                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date when the report item was generated in the remote system                              | 2024-07-01T12:00:00Z                                                                          |
| `companyInfoId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the associated company info object                                                | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The created date of the report item                                                           | 2024-06-15T12:00:00Z                                                                          |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The last modified date of the report item                                                     | 2024-06-15T12:00:00Z                                                                          |