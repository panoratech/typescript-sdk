# PassThroughRequestDto

## Example Usage

```typescript
import { PassThroughRequestDto, PassThroughRequestDtoMethod } from "@panora/sdk/models/components";

let value: PassThroughRequestDto = {
  method: PassThroughRequestDtoMethod.Post,
  path: "/usr/lib",
  data: {},
  requestFormat: {
    "key": "<value>",
  },
  overrideBaseUrl: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `method`                                                                                         | [components.PassThroughRequestDtoMethod](../../models/components/passthroughrequestdtomethod.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `path`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `data`                                                                                           | [components.Data](../../models/components/data.md)                                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `requestFormat`                                                                                  | *components.RequestFormat*                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `overrideBaseUrl`                                                                                | Record<string, *any*>                                                                            | :heavy_check_mark:                                                                               | N/A                                                                                              |