# DefineTargetFieldDto

## Example Usage

```typescript
import { DataType, DefineTargetFieldDto, ObjectTypeOwner } from "@panora/sdk/models/components";

let value: DefineTargetFieldDto = {
    objectTypeOwner: ObjectTypeOwner.Company,
    name: "fav_dish",
    description: "My favorite dish",
    dataType: DataType.String,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `objectTypeOwner`                                                        | [components.ObjectTypeOwner](../../models/components/objecttypeowner.md) | :heavy_check_mark:                                                       | N/A                                                                      | company                                                                  |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | The name of the target field                                             | fav_dish                                                                 |
| `description`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | The description of the target field                                      | My favorite dish                                                         |
| `dataType`                                                               | [components.DataType](../../models/components/datatype.md)               | :heavy_check_mark:                                                       | The data type of the target field                                        | string                                                                   |