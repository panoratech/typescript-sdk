# Phone

## Example Usage

```typescript
import { Phone } from "@panora/sdk/models/components";

let value: Phone = {
  phoneNumber: "1-937-659-0008 x78974",
  phoneType: "<value>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `phoneNumber`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | The phone number starting with a plus (+) followed by the country code (e.g +336676778890 for France) |
| `phoneType`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | The phone type. Authorized values are either MOBILE or WORK                                           |
| `ownerType`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The owner type of a phone number                                                                      |