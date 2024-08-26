# Email

## Example Usage

```typescript
import { Email, EmailAddressType } from "@panora/sdk/models/components";

let value: Email = {
    emailAddress: "Randy_Lehner@hotmail.com",
    emailAddressType: EmailAddressType.Personal,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `emailAddress`                                                             | *string*                                                                   | :heavy_check_mark:                                                         | The email address                                                          |
| `emailAddressType`                                                         | [components.EmailAddressType](../../models/components/emailaddresstype.md) | :heavy_check_mark:                                                         | The email address type. Authorized values are either PERSONAL or WORK.     |
| `ownerType`                                                                | [components.OwnerType](../../models/components/ownertype.md)               | :heavy_minus_sign:                                                         | The owner type of an email                                                 |