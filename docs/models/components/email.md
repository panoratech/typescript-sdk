# Email

## Example Usage

```typescript
import { Email } from "@panora/sdk/models/components";

let value: Email = {
  emailAddress: "Rita.Will87@yahoo.com",
  emailAddressType: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `emailAddress`                                                         | *string*                                                               | :heavy_check_mark:                                                     | The email address                                                      |
| `emailAddressType`                                                     | *string*                                                               | :heavy_check_mark:                                                     | The email address type. Authorized values are either PERSONAL or WORK. |
| `ownerType`                                                            | [components.OwnerType](../../models/components/ownertype.md)           | :heavy_minus_sign:                                                     | The owner type of an email                                             |