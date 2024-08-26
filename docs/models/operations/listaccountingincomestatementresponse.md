# ListAccountingIncomeStatementResponse

## Example Usage

```typescript
import { UnifiedAccountingIncomestatementOutputCurrency } from "@panora/sdk/models/components";
import { ListAccountingIncomeStatementResponse } from "@panora/sdk/models/operations";

let value: ListAccountingIncomeStatementResponse = {
    result: {
        prevCursor: "<value>",
        nextCursor: "<value>",
        data: [
            {
                name: "Q2 2024 Income Statement",
                currency: UnifiedAccountingIncomestatementOutputCurrency.Usd,
                startPeriod: new Date("2024-04-01T00:00:00Z"),
                endPeriod: new Date("2024-06-30T23:59:59Z"),
                grossProfit: 1000000,
                netOperatingIncome: 800000,
                netIncome: 750000,
                fieldMappings: {},
                id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                remoteId: "incomestatement_1234",
                remoteData: {},
                createdAt: new Date("2024-06-15T12:00:00Z"),
                modifiedAt: new Date("2024-06-15T12:00:00Z"),
            },
        ],
    },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                     | [operations.ListAccountingIncomeStatementResponseBody](../../models/operations/listaccountingincomestatementresponsebody.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |