# TaxItem

## Example Usage

```typescript
import { TaxItem } from "@panora/sdk/models/components";

let value: TaxItem = {
  name: "Federal Income Tax",
  amount: 250,
  employerTax: true,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `name`                               | *string*                             | :heavy_minus_sign:                   | The name of the tax                  | Federal Income Tax                   |
| `amount`                             | *number*                             | :heavy_minus_sign:                   | The amount of the tax                | 250                                  |
| `employerTax`                        | *boolean*                            | :heavy_minus_sign:                   | Indicates if this is an employer tax | true                                 |