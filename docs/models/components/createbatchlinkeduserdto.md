# CreateBatchLinkedUserDto

## Example Usage

```typescript
import { CreateBatchLinkedUserDto } from "@panora/sdk/models/components";

let value: CreateBatchLinkedUserDto = {
    linkedUserOriginIds: ["id_1"],
    alias: "acme",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `linkedUserOriginIds`                                    | *string*[]                                               | :heavy_check_mark:                                       | The ids of the users in the context of your own software | [<br/>"id_1"<br/>]                                       |
| `alias`                                                  | *string*                                                 | :heavy_check_mark:                                       | Your company alias                                       | acme                                                     |