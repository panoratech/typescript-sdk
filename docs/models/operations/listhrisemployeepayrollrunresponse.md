# ListHrisEmployeePayrollRunResponse

## Example Usage

```typescript
import { ListHrisEmployeePayrollRunResponse } from "@panora/sdk/models/operations";

let value: ListHrisEmployeePayrollRunResponse = {
    result: {
        prevCursor: "<value>",
        nextCursor: "<value>",
        data: [
            {
                employeeId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                payrollRunId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                grossPay: 5000,
                netPay: 4000,
                startDate: new Date("2023-01-01T00:00:00Z"),
                endDate: new Date("2023-01-15T23:59:59Z"),
                checkDate: new Date("2023-01-20T00:00:00Z"),
                deductions: [
                    {
                        name: "Health Insurance",
                        employeeDeduction: 100,
                        companyDeduction: 200,
                    },
                ],
                earnings: [
                    {
                        amount: 1000,
                        type: "Salary",
                    },
                ],
                taxes: [
                    {
                        name: "Federal Income Tax",
                        amount: 250,
                        employerTax: true,
                    },
                ],
                fieldMappings: {},
                id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                remoteId: "payroll_run_1234",
                remoteData: {},
                remoteCreatedAt: new Date("2024-10-01T12:00:00Z"),
                createdAt: new Date("2024-10-01T12:00:00Z"),
                modifiedAt: new Date("2024-10-01T12:00:00Z"),
                remoteWasDeleted: false,
            },
        ],
    },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                               | [operations.ListHrisEmployeePayrollRunResponseBody](../../models/operations/listhrisemployeepayrollrunresponsebody.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |