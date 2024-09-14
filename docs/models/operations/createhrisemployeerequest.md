# CreateHrisEmployeeRequest

## Example Usage

```typescript
import { CreateHrisEmployeeRequest } from "@panora/sdk/models/operations";

let value: CreateHrisEmployeeRequest = {
  xConnectionToken: "<value>",
  unifiedHrisEmployeeInput: {
    groups: [
      "Group1",
      "Group2",
    ],
    locations: [
      "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    ],
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
    gender: "MALE",
    ethnicity: "AMERICAN_INDIAN_OR_ALASKA_NATIVE",
    maritalStatus: "Married",
    dateOfBirth: new Date("1990-01-01"),
    startDate: new Date("2020-01-01"),
    employmentStatus: "ACTIVE",
    terminationDate: new Date("2025-01-01"),
    avatarUrl: "https://example.com/avatar.jpg",
    managerId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    fieldMappings: {},
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `xConnectionToken`                                                                         | *string*                                                                                   | :heavy_check_mark:                                                                         | The connection token                                                                       |
| `remoteData`                                                                               | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Set to true to include data from the original Hris software.                               |
| `unifiedHrisEmployeeInput`                                                                 | [components.UnifiedHrisEmployeeInput](../../models/components/unifiedhrisemployeeinput.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |