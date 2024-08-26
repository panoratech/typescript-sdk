# PassThroughRequestDto

## Example Usage

```typescript
import { PassThroughRequestDto, PassThroughRequestDtoMethod } from "@panora/sdk/models/components";

let value: PassThroughRequestDto = {
    method: PassThroughRequestDtoMethod.Post,
    path: "/private",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `method`                                                                                         | [components.PassThroughRequestDtoMethod](../../models/components/passthroughrequestdtomethod.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `path`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `data`                                                                                           | [components.Data](../../models/components/data.md)                                               | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `requestFormat`                                                                                  | *components.RequestFormat*                                                                       | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `overrideBaseUrl`                                                                                | Record<string, *any*>                                                                            | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `headers`                                                                                        | [components.Headers](../../models/components/headers.md)                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |