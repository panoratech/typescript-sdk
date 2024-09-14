# UnifiedCrmTaskInput

## Example Usage

```typescript
import { UnifiedCrmTaskInput } from "@panora/sdk/models/components";

let value: UnifiedCrmTaskInput = {
  subject: "Answer customers",
  content: "Prepare email campaign",
  status: "PENDING",
  dueDate: "2024-10-01T12:00:00Z",
  finishedDate: "2024-10-01T12:00:00Z",
  userId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  companyId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  dealId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  fieldMappings: {
    "fav_dish": "broccoli",
    "fav_color": "red",
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `subject`                                                                   | *string*                                                                    | :heavy_check_mark:                                                          | The subject of the task                                                     | Answer customers                                                            |
| `content`                                                                   | *string*                                                                    | :heavy_check_mark:                                                          | The content of the task                                                     | Prepare email campaign                                                      |
| `status`                                                                    | *string*                                                                    | :heavy_check_mark:                                                          | The status of the task. Authorized values are PENDING, COMPLETED.           | PENDING                                                                     |
| `dueDate`                                                                   | *string*                                                                    | :heavy_minus_sign:                                                          | The due date of the task                                                    | 2024-10-01T12:00:00Z                                                        |
| `finishedDate`                                                              | *string*                                                                    | :heavy_minus_sign:                                                          | The finished date of the task                                               | 2024-10-01T12:00:00Z                                                        |
| `userId`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | The UUID of the user tied to the task                                       | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                        |
| `companyId`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | The UUID of the company tied to the task                                    | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                        |
| `dealId`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | The UUID of the deal tied to the task                                       | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                        |
| `fieldMappings`                                                             | Record<string, *any*>                                                       | :heavy_minus_sign:                                                          | The custom field mappings of the task between the remote 3rd party & Panora | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                  |