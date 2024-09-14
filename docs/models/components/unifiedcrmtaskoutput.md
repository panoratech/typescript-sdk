# UnifiedCrmTaskOutput

## Example Usage

```typescript
import { UnifiedCrmTaskOutput } from "@panora/sdk/models/components";

let value: UnifiedCrmTaskOutput = {
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
  id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  remoteId: "id_1",
  remoteData: {
    "key1": "value1",
    "key2": 42,
    "key3": true,
  },
  createdAt: new Date("2024-10-01T12:00:00Z"),
  modifiedAt: new Date("2024-10-01T12:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `subject`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The subject of the task                                                                       | Answer customers                                                                              |
| `content`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The content of the task                                                                       | Prepare email campaign                                                                        |
| `status`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The status of the task. Authorized values are PENDING, COMPLETED.                             | PENDING                                                                                       |
| `dueDate`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The due date of the task                                                                      | 2024-10-01T12:00:00Z                                                                          |
| `finishedDate`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | The finished date of the task                                                                 | 2024-10-01T12:00:00Z                                                                          |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the user tied to the task                                                         | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `companyId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the company tied to the task                                                      | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `dealId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the deal tied to the task                                                         | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `fieldMappings`                                                                               | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The custom field mappings of the task between the remote 3rd party & Panora                   | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the task                                                                          | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the task in the context of the Crm 3rd Party                                        | id_1                                                                                          |
| `remoteData`                                                                                  | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The remote data of the task in the context of the Crm 3rd Party                               | {<br/>"key1": "value1",<br/>"key2": 42,<br/>"key3": true<br/>}                                |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The created date of the object                                                                | 2024-10-01T12:00:00Z                                                                          |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The modified date of the object                                                               | 2024-10-01T12:00:00Z                                                                          |