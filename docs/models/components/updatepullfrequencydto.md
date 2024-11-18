# UpdatePullFrequencyDto

## Example Usage

```typescript
import { UpdatePullFrequencyDto } from "@panora/sdk/models/components";

let value: UpdatePullFrequencyDto = {
  crm: 1800,
  accounting: 14400,
  filestorage: 28800,
  ecommerce: 43200,
  ticketing: 86400,
};
```

## Fields

| Field                | Type                 | Required             | Description          | Example              |
| -------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| `crm`                | *number*             | :heavy_check_mark:   | Frequency in seconds | 1800                 |
| `accounting`         | *number*             | :heavy_check_mark:   | Frequency in seconds | 14400                |
| `filestorage`        | *number*             | :heavy_check_mark:   | Frequency in seconds | 28800                |
| `ecommerce`          | *number*             | :heavy_check_mark:   | Frequency in seconds | 43200                |
| `ticketing`          | *number*             | :heavy_check_mark:   | Frequency in seconds | 86400                |