# ListHrisEmployeesResponse

## Example Usage

```typescript
import { EmploymentStatus, Ethnicity, MaritalStatus, UnifiedHrisEmployeeOutputGender } from "@panora/sdk/models/components";
import { ListHrisEmployeesResponse } from "@panora/sdk/models/operations";

let value: ListHrisEmployeesResponse = {
    result: {
        prevCursor: "<value>",
        nextCursor: "<value>",
        data: [
            {
                groups: ["Group1", "Group2"],
                locations: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
                employeeNumber: "EMP001",
                companyId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                firstName: "John",
                lastName: "Doe",
                preferredName: "Johnny",
                displayFullName: "John Doe",
                username: "johndoe",
                workEmail: "john.doe@company.com",
                personalEmail: "john.doe@personal.com",
                mobilePhoneNumber: "+1234567890",
                employments: [
                    "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                    "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                ],
                ssn: "123-45-6789",
                gender: UnifiedHrisEmployeeOutputGender.Male,
                ethnicity: Ethnicity.AmericanIndianOrAlaskaNative,
                maritalStatus: MaritalStatus.HeadOfHousehold,
                dateOfBirth: new Date("1990-01-01"),
                startDate: new Date("2020-01-01"),
                employmentStatus: EmploymentStatus.Active,
                terminationDate: new Date("2025-01-01"),
                avatarUrl: "https://example.com/avatar.jpg",
                managerId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                fieldMappings: {},
                id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
                remoteId: "employee_1234",
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

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `result`                                                                                             | [operations.ListHrisEmployeesResponseBody](../../models/operations/listhrisemployeesresponsebody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |