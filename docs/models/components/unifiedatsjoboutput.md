# UnifiedAtsJobOutput

## Example Usage

```typescript
import { UnifiedAtsJobOutput } from "@panora/sdk/models/components";

let value: UnifiedAtsJobOutput = {
    name: "Financial Analyst",
    description: "Extract financial data and write detailed investment thesis",
    code: "JOB123",
    status: "OPEN",
    type: "POSTING",
    confidential: true,
    departments: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
    offices: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
    managers: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
    recruiters: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
    remoteCreatedAt: new Date("2024-10-01T12:00:00Z"),
    remoteUpdatedAt: new Date("2024-10-01T12:00:00Z"),
    fieldMappings: {
        fav_dish: "broccoli",
        fav_color: "red",
    },
    id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    remoteId: "id_1",
    remoteData: {
        key1: "value1",
        key2: 42,
        key3: true,
    },
    createdAt: new Date("2024-10-01T12:00:00Z"),
    modifiedAt: new Date("2023-10-01T12:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the job                                                                           | Financial Analyst                                                                             |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The description of the job                                                                    | Extract financial data and write detailed investment thesis                                   |
| `code`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The code of the job                                                                           | JOB123                                                                                        |
| `status`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The status of the job                                                                         | OPEN                                                                                          |
| `type`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The type of the job                                                                           | POSTING                                                                                       |
| `confidential`                                                                                | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether the job is confidential                                                               | true                                                                                          |
| `departments`                                                                                 | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | The departments UUIDs associated with the job                                                 | [<br/>"801f9ede-c698-4e66-a7fc-48d19eebaa4f"<br/>]                                            |
| `offices`                                                                                     | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | The offices UUIDs associated with the job                                                     | [<br/>"801f9ede-c698-4e66-a7fc-48d19eebaa4f"<br/>]                                            |
| `managers`                                                                                    | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | The managers UUIDs associated with the job                                                    | [<br/>"801f9ede-c698-4e66-a7fc-48d19eebaa4f"<br/>]                                            |
| `recruiters`                                                                                  | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | The recruiters UUIDs associated with the job                                                  | [<br/>"801f9ede-c698-4e66-a7fc-48d19eebaa4f"<br/>]                                            |
| `remoteCreatedAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The remote creation date of the job                                                           | 2024-10-01T12:00:00Z                                                                          |
| `remoteUpdatedAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The remote modification date of the job                                                       | 2024-10-01T12:00:00Z                                                                          |
| `fieldMappings`                                                                               | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The custom field mappings of the object between the remote 3rd party & Panora                 | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the job                                                                           | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The remote ID of the job in the context of the 3rd Party                                      | id_1                                                                                          |
| `remoteData`                                                                                  | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | The remote data of the job in the context of the 3rd Party                                    | {<br/>"key1": "value1",<br/>"key2": 42,<br/>"key3": true<br/>}                                |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The created date of the object                                                                | 2024-10-01T12:00:00Z                                                                          |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The modified date of the object                                                               | 2023-10-01T12:00:00Z                                                                          |