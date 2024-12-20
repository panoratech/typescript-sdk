# Email

## Example Usage

```typescript
import { Email } from "@panora/sdk/models/components";

let value: Email = {
  emailAddress: "Lucie_Welch41@gmail.com",
  emailAddressType: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `emailAddress`                                                         | *string*                                                               | :heavy_check_mark:                                                     | The email address                                                      |
| `emailAddressType`                                                     | *string*                                                               | :heavy_check_mark:                                                     | The email address type. Authorized values are either PERSONAL or WORK. |
| `ownerType`                                                            | [components.OwnerType](../../models/components/ownertype.md)           | :heavy_minus_sign:                                                     | The owner type of an email                                             |