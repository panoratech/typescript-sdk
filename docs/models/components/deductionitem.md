# DeductionItem

## Example Usage

```typescript
import { DeductionItem } from "@panora/sdk/models/components";

let value: DeductionItem = {
  name: "Health Insurance",
  employeeDeduction: 100,
  companyDeduction: 200,
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      | Example                          |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `name`                           | *string*                         | :heavy_minus_sign:               | The name of the deduction        | Health Insurance                 |
| `employeeDeduction`              | *number*                         | :heavy_minus_sign:               | The amount of employee deduction | 100                              |
| `companyDeduction`               | *number*                         | :heavy_minus_sign:               | The amount of company deduction  | 200                              |