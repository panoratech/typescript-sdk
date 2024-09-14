# Address

## Example Usage

```typescript
import { Address } from "@panora/sdk/models/components";

let value: Address = {
  street1: "5th Avenue",
  street2: "Street 2",
  city: "New York",
  state: "New York",
  postalCode: "10001",
  country: "United States of America",
  addressType: "PERSONAL",
  ownerType: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `street1`                                                        | *string*                                                         | :heavy_check_mark:                                               | The street                                                       | 5th Avenue                                                       |
| `street2`                                                        | *string*                                                         | :heavy_check_mark:                                               | More information about the street                                | Street 2                                                         |
| `city`                                                           | *string*                                                         | :heavy_check_mark:                                               | The city                                                         | New York                                                         |
| `state`                                                          | *string*                                                         | :heavy_check_mark:                                               | The state                                                        | New York                                                         |
| `postalCode`                                                     | *string*                                                         | :heavy_check_mark:                                               | The postal code                                                  | 10001                                                            |
| `country`                                                        | *string*                                                         | :heavy_check_mark:                                               | The country                                                      | United States of America                                         |
| `addressType`                                                    | *string*                                                         | :heavy_check_mark:                                               | The address type. Authorized values are either PERSONAL or WORK. | PERSONAL                                                         |
| `ownerType`                                                      | *string*                                                         | :heavy_check_mark:                                               | The owner type of the address                                    |                                                                  |