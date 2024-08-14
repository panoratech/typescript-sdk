# Employees
(*hris.employees*)

### Available Operations

* [list](#list) - List Employees
* [create](#create) - Create Employees
* [retrieve](#retrieve) - Retrieve Employee

## list

List Employees

### Example Usage

```typescript
import { Panora } from "@panora/sdk";

const panora = new Panora({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await panora.hris.employees.list({
    xConnectionToken: "<value>",
    remoteData: true,
    limit: 10,
    cursor: "1b8b05bb-5273-4012-b520-8657b0b90874",
  });

  for await (const page of result) {
    // handle page
  }
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { PanoraCore } from "@panora/sdk/core.js";
import { hrisEmployeesList } from "@panora/sdk/funcs/hrisEmployeesList.js";

// Use `PanoraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const panora = new PanoraCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await hrisEmployeesList(panora, {
    xConnectionToken: "<value>",
    remoteData: true,
    limit: 10,
    cursor: "1b8b05bb-5273-4012-b520-8657b0b90874",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // handle page
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListHrisEmployeesRequest](../../models/operations/listhrisemployeesrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ListHrisEmployeesResponse](../../models/operations/listhrisemployeesresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## create

Create Employees in any supported Hris software

### Example Usage

```typescript
import { Panora } from "@panora/sdk";
import {
  UnifiedHrisEmployeeInputEmploymentStatus,
  UnifiedHrisEmployeeInputEthnicity,
  UnifiedHrisEmployeeInputGender,
  UnifiedHrisEmployeeInputMaritalStatus,
} from "@panora/sdk/models/components";

const panora = new Panora({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await panora.hris.employees.create({
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
      gender: UnifiedHrisEmployeeInputGender.Male,
      ethnicity: UnifiedHrisEmployeeInputEthnicity.AmericanIndianOrAlaskaNative,
      maritalStatus: UnifiedHrisEmployeeInputMaritalStatus.MarriedFilingSeparately,
      dateOfBirth: new Date("1990-01-01"),
      startDate: new Date("2020-01-01"),
      employmentStatus: UnifiedHrisEmployeeInputEmploymentStatus.Active,
      terminationDate: new Date("2025-01-01"),
      avatarUrl: "https://example.com/avatar.jpg",
      managerId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      fieldMappings: {},
    },
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { PanoraCore } from "@panora/sdk/core.js";
import { hrisEmployeesCreate } from "@panora/sdk/funcs/hrisEmployeesCreate.js";
import {
  UnifiedHrisEmployeeInputEmploymentStatus,
  UnifiedHrisEmployeeInputEthnicity,
  UnifiedHrisEmployeeInputGender,
  UnifiedHrisEmployeeInputMaritalStatus,
} from "@panora/sdk/models/components";

// Use `PanoraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const panora = new PanoraCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await hrisEmployeesCreate(panora, {
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
      gender: UnifiedHrisEmployeeInputGender.Male,
      ethnicity: UnifiedHrisEmployeeInputEthnicity.AmericanIndianOrAlaskaNative,
      maritalStatus: UnifiedHrisEmployeeInputMaritalStatus.HeadOfHousehold,
      dateOfBirth: new Date("1990-01-01"),
      startDate: new Date("2020-01-01"),
      employmentStatus: UnifiedHrisEmployeeInputEmploymentStatus.Active,
      terminationDate: new Date("2025-01-01"),
      avatarUrl: "https://example.com/avatar.jpg",
      managerId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      fieldMappings: {},
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateHrisEmployeeRequest](../../models/operations/createhrisemployeerequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[components.UnifiedHrisEmployeeOutput](../../models/components/unifiedhrisemployeeoutput.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## retrieve

Retrieve an Employee from any connected Hris software

### Example Usage

```typescript
import { Panora } from "@panora/sdk";

const panora = new Panora({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await panora.hris.employees.retrieve({
    xConnectionToken: "<value>",
    id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    remoteData: false,
  });

  // Handle the result
  console.log(result)
}

run();
```


### Standalone function

The standalone function version of this method:

```typescript
import { PanoraCore } from "@panora/sdk/core.js";
import { hrisEmployeesRetrieve } from "@panora/sdk/funcs/hrisEmployeesRetrieve.js";

// Use `PanoraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const panora = new PanoraCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await hrisEmployeesRetrieve(panora, {
    xConnectionToken: "<value>",
    id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    remoteData: false,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RetrieveHrisEmployeeRequest](../../models/operations/retrievehrisemployeerequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[components.UnifiedHrisEmployeeOutput](../../models/components/unifiedhrisemployeeoutput.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
