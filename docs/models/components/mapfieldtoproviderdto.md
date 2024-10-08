# MapFieldToProviderDto

## Example Usage

```typescript
import { MapFieldToProviderDto } from "@panora/sdk/models/components";

let value: MapFieldToProviderDto = {
  attributeId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
  sourceCustomFieldId: "id_1",
  sourceProvider: "hubspot",
  linkedUserId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `attributeId`                        | *string*                             | :heavy_check_mark:                   | The attribute ID                     | 801f9ede-c698-4e66-a7fc-48d19eebaa4f |
| `sourceCustomFieldId`                | *string*                             | :heavy_check_mark:                   | The source custom field ID           | id_1                                 |
| `sourceProvider`                     | *string*                             | :heavy_check_mark:                   | The source provider                  | hubspot                              |
| `linkedUserId`                       | *string*                             | :heavy_check_mark:                   | The linked user ID                   | 801f9ede-c698-4e66-a7fc-48d19eebaa4f |