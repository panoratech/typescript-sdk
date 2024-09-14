# UpdatePullFrequencyDto

## Example Usage

```typescript
import { UpdatePullFrequencyDto } from "@panora/sdk/models/components";

let value: UpdatePullFrequencyDto = {
  crm: 1800,
  ats: 3600,
  hris: 7200,
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
| `ats`                | *number*             | :heavy_check_mark:   | Frequency in seconds | 3600                 |
| `hris`               | *number*             | :heavy_check_mark:   | Frequency in seconds | 7200                 |
| `accounting`         | *number*             | :heavy_check_mark:   | Frequency in seconds | 14400                |
| `filestorage`        | *number*             | :heavy_check_mark:   | Frequency in seconds | 28800                |
| `ecommerce`          | *number*             | :heavy_check_mark:   | Frequency in seconds | 43200                |
| `ticketing`          | *number*             | :heavy_check_mark:   | Frequency in seconds | 86400                |