# CustomFieldCreateDto

## Example Usage

```typescript
import {
  CustomFieldCreateDto,
  CustomFieldCreateDtoDataType,
  CustomFieldCreateDtoObjectTypeOwner,
} from "@panora/sdk/models/components";

let value: CustomFieldCreateDto = {
  objectTypeOwner: CustomFieldCreateDtoObjectTypeOwner.Company,
  name: "my_favorite_dish",
  description: "Favorite Dish",
  dataType: CustomFieldCreateDtoDataType.String,
  sourceCustomFieldId: "id_1",
  sourceProvider: "hubspot",
  linkedUserId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `objectTypeOwner`                                                                                                | [components.CustomFieldCreateDtoObjectTypeOwner](../../models/components/customfieldcreatedtoobjecttypeowner.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              | company                                                                                                          |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The name of the custom field                                                                                     | my_favorite_dish                                                                                                 |
| `description`                                                                                                    | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The description of the custom field                                                                              | Favorite Dish                                                                                                    |
| `dataType`                                                                                                       | [components.CustomFieldCreateDtoDataType](../../models/components/customfieldcreatedtodatatype.md)               | :heavy_check_mark:                                                                                               | The data type of the custom field                                                                                | string                                                                                                           |
| `sourceCustomFieldId`                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The source custom field ID                                                                                       | id_1                                                                                                             |
| `sourceProvider`                                                                                                 | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The name of the source software/provider                                                                         | hubspot                                                                                                          |
| `linkedUserId`                                                                                                   | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The linked user ID                                                                                               | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                                             |