# Phone

## Example Usage

```typescript
import { Phone } from "@panora/sdk/models/components";

let value: Phone = {
  phoneNumber: "434.885.4539 x80306",
  phoneType: "<value>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `phoneNumber`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | The phone number starting with a plus (+) followed by the country code (e.g +336676778890 for France) |
| `phoneType`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | The phone type. Authorized values are either MOBILE or WORK                                           |
| `ownerType`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The owner type of a phone number                                                                      |