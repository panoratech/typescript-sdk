# RequestRequest

## Example Usage

```typescript
import { PassThroughRequestDtoMethod } from "@panora/sdk/models/components";
import { RequestRequest } from "@panora/sdk/models/operations";

let value: RequestRequest = {
  xConnectionToken: "<value>",
  passThroughRequestDto: {
    method: PassThroughRequestDtoMethod.Post,
    path: "/usr/local/src",
    data: {},
    requestFormat: [
      {
        "key": "<value>",
      },
    ],
    overrideBaseUrl: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `xConnectionToken`                                                                   | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `passThroughRequestDto`                                                              | [components.PassThroughRequestDto](../../models/components/passthroughrequestdto.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |