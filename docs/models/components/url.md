# Url

## Example Usage

```typescript
import { Url } from "@panora/sdk/models/components";

let value: Url = {
  url: "https://jagged-report.com",
  urlType: "<value>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `url`                                                               | *string*                                                            | :heavy_check_mark:                                                  | The url.                                                            |
| `urlType`                                                           | *string*                                                            | :heavy_check_mark:                                                  | The url type. It takes [WEBSITE \| BLOG \| LINKEDIN \| GITHUB \| OTHER] |