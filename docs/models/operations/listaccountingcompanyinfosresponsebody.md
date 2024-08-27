# ListAccountingCompanyInfosResponseBody

## Example Usage

```typescript
import { ListAccountingCompanyInfosResponseBody } from "@panora/sdk/models/operations";

let value: ListAccountingCompanyInfosResponseBody = {
    prevCursor: "<value>",
    nextCursor: "<value>",
    data: [
        {
            name: "Acme Corporation",
            legalName: "Acme Corporation LLC",
            taxNumber: "123456789",
            fiscalYearEndMonth: 12,
            fiscalYearEndDay: 31,
            currency: "USD",
            urls: ["https://www.acmecorp.com", "https://store.acmecorp.com"],
            trackingCategories: [
                "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            ],
            fieldMappings: {},
            id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
            remoteId: "company_1234",
            remoteData: {},
            remoteCreatedAt: new Date("2024-06-15T12:00:00Z"),
            createdAt: new Date("2024-06-15T12:00:00Z"),
            modifiedAt: new Date("2024-06-15T12:00:00Z"),
        },
    ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `prevCursor`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `nextCursor`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `data`                                                                                                           | [components.UnifiedAccountingCompanyinfoOutput](../../models/components/unifiedaccountingcompanyinfooutput.md)[] | :heavy_check_mark:                                                                                               | N/A                                                                                                              |