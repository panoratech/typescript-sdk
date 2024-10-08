# UnifiedHrisBankinfoOutput

## Example Usage

```typescript
import { UnifiedHrisBankinfoOutput } from "@panora/sdk/models/components";

let value: UnifiedHrisBankinfoOutput = {
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `accountType`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The type of the bank account                                                                  | CHECKING                                                                                      |
| `bankName`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name of the bank                                                                          | Bank of America                                                                               |
| `accountNumber`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The account number                                                                            | 1234567890                                                                                    |
| `routingNumber`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The routing number of the bank                                                                | 021000021                                                                                     |
| `employeeId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UUID of the associated employee                                                           | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `fieldMappings`                                                                               | [components.FieldMappings](../../models/components/fieldmappings.md)                          | :heavy_minus_sign:                                                                            | The custom field mappings of the object between the remote 3rd party & Panora                 | {<br/>"custom_field_1": "value1",<br/>"custom_field_2": "value2"<br/>}                        |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The UUID of the bank info record                                                              | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                          |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The remote ID of the bank info in the context of the 3rd Party                                | id_1                                                                                          |
| `remoteData`                                                                                  | [components.RemoteData](../../models/components/remotedata.md)                                | :heavy_minus_sign:                                                                            | The remote data of the bank info in the context of the 3rd Party                              | {<br/>"raw_data": {<br/>"additional_field": "some value"<br/>}<br/>}                          |
| `remoteCreatedAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date when the bank info was created in the 3rd party system                               | 2024-10-01T12:00:00Z                                                                          |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The created date of the bank info record                                                      | 2024-10-01T12:00:00Z                                                                          |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The last modified date of the bank info record                                                | 2024-10-01T12:00:00Z                                                                          |
| `remoteWasDeleted`                                                                            | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Indicates if the bank info was deleted in the remote system                                   | false                                                                                         |