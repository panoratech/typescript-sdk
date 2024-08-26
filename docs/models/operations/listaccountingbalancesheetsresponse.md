# ListAccountingBalanceSheetsResponse

## Example Usage

```typescript
import { UnifiedAccountingBalancesheetOutputCurrency } from "@panora/sdk/models/components";
import { ListAccountingBalanceSheetsResponse } from "@panora/sdk/models/operations";

let value: ListAccountingBalanceSheetsResponse = {
    result: {
        prevCursor: "<value>",
        nextCursor: "<value>",
        data: [
            {
                name: "Q2 2024 Balance Sheet",
                currency: UnifiedAccountingBalancesheetOutputCurrency.Usd,
                companyInfoId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                date: new Date("2024-06-30T23:59:59Z"),
                netAssets: 1000000,
                assets: ["Cash", "Accounts Receivable", "Inventory"],
                liabilities: ["Accounts Payable", "Long-term Debt"],
                equity: ["Common Stock", "Retained Earnings"],
                remoteGeneratedAt: new Date("2024-07-01T12:00:00Z"),
                lineItems: [
                    {
                        name: "Net Income",
                        value: 100000,
                        type: "Operating Activities",
                        parentItem: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                        remoteId: "report_item_1234",
                        remoteGeneratedAt: new Date("2024-07-01T12:00:00Z"),
                        companyInfoId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                        createdAt: new Date("2024-06-15T12:00:00Z"),
                        modifiedAt: new Date("2024-06-15T12:00:00Z"),
                    },
                ],
                fieldMappings: {},
                id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                remoteId: "balancesheet_1234",
                remoteData: {},
                createdAt: new Date("2024-06-15T12:00:00Z"),
                modifiedAt: new Date("2024-06-15T12:00:00Z"),
            },
        ],
    },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                                 | [operations.ListAccountingBalanceSheetsResponseBody](../../models/operations/listaccountingbalancesheetsresponsebody.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |