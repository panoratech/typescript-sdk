# Balancesheets
(*accounting.balancesheets*)

## Overview

### Available Operations

* [list](#list) - List  BalanceSheets
* [retrieve](#retrieve) - Retrieve BalanceSheets

## list

List  BalanceSheets

### Example Usage

```typescript
import { Panora } from "@panora/sdk";

const panora = new Panora({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await panora.accounting.balancesheets.list({
    xConnectionToken: "<value>",
    remoteData: true,
    limit: 10,
    cursor: "1b8b05bb-5273-4012-b520-8657b0b90874",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PanoraCore } from "@panora/sdk/core.js";
import { accountingBalancesheetsList } from "@panora/sdk/funcs/accountingBalancesheetsList.js";

// Use `PanoraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const panora = new PanoraCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await accountingBalancesheetsList(panora, {
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
    // Handle the page
    console.log(page);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAccountingBalanceSheetsRequest](../../models/operations/listaccountingbalancesheetsrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListAccountingBalanceSheetsResponse](../../models/operations/listaccountingbalancesheetsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## retrieve

Retrieve BalanceSheets from any connected Accounting software

### Example Usage

```typescript
import { Panora } from "@panora/sdk";

const panora = new Panora({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await panora.accounting.balancesheets.retrieve({
    xConnectionToken: "<value>",
    id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    remoteData: false,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PanoraCore } from "@panora/sdk/core.js";
import { accountingBalancesheetsRetrieve } from "@panora/sdk/funcs/accountingBalancesheetsRetrieve.js";

// Use `PanoraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const panora = new PanoraCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await accountingBalancesheetsRetrieve(panora, {
    xConnectionToken: "<value>",
    id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    remoteData: false,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RetrieveAccountingBalanceSheetRequest](../../models/operations/retrieveaccountingbalancesheetrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.UnifiedAccountingBalancesheetOutput](../../models/components/unifiedaccountingbalancesheetoutput.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |