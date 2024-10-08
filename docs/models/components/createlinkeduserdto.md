# CreateLinkedUserDto

## Example Usage

```typescript
import { CreateLinkedUserDto } from "@panora/sdk/models/components";

let value: CreateLinkedUserDto = {
  linkedUserOriginId: "id_1",
  alias: "acme",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `linkedUserOriginId`                                   | *string*                                               | :heavy_check_mark:                                     | The id of the user in the context of your own software | id_1                                                   |
| `alias`                                                | *string*                                               | :heavy_check_mark:                                     | Your company alias                                     | acme                                                   |