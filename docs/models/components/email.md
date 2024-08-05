# Email


## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `emailAddress`                                                             | *string*                                                                   | :heavy_check_mark:                                                         | The email address                                                          |
| `emailAddressType`                                                         | [components.EmailAddressType](../../models/components/emailaddresstype.md) | :heavy_check_mark:                                                         | The email address type. Authorized values are either PERSONAL or WORK.     |
| `ownerType`                                                                | [components.OwnerType](../../models/components/ownertype.md)               | :heavy_minus_sign:                                                         | The owner type of an email                                                 |