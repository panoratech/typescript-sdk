# Invoices
(*accounting.invoices*)

## Overview

### Available Operations

* [list](#list) - List  Invoices
* [create](#create) - Create Invoices
* [retrieve](#retrieve) - Retrieve Invoices

## list

List  Invoices

### Example Usage

```typescript
import { Panora } from "@panora/sdk";

const panora = new Panora({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await panora.accounting.invoices.list({
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
import { accountingInvoicesList } from "@panora/sdk/funcs/accountingInvoicesList.js";

// Use `PanoraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const panora = new PanoraCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await accountingInvoicesList(panora, {
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
| `request`                                                                                                                                                                      | [operations.ListAccountingInvoiceRequest](../../models/operations/listaccountinginvoicerequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListAccountingInvoiceResponse](../../models/operations/listaccountinginvoiceresponse.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## create

Create invoices in any supported Accounting software

### Example Usage

```typescript
import { Panora } from "@panora/sdk";

const panora = new Panora({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await panora.accounting.invoices.create({
    xConnectionToken: "<value>",
    remoteData: false,
    unifiedAccountingInvoiceInput: {
      type: "Sales",
      number: "INV-001",
      issueDate: new Date("2024-06-15T12:00:00Z"),
      dueDate: new Date("2024-07-15T12:00:00Z"),
      paidOnDate: new Date("2024-07-10T12:00:00Z"),
      memo: "Payment for services rendered",
      currency: "USD",
      exchangeRate: "1.2",
      totalDiscount: 1000,
      subTotal: 10000,
      status: "Paid",
      totalTaxAmount: 1000,
      totalAmount: 11000,
      balance: 0,
      contactId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      accountingPeriodId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      trackingCategories: [
        "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      ],
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
import { accountingInvoicesCreate } from "@panora/sdk/funcs/accountingInvoicesCreate.js";

// Use `PanoraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const panora = new PanoraCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await accountingInvoicesCreate(panora, {
    xConnectionToken: "<value>",
    remoteData: false,
    unifiedAccountingInvoiceInput: {
      type: "Sales",
      number: "INV-001",
      issueDate: new Date("2024-06-15T12:00:00Z"),
      dueDate: new Date("2024-07-15T12:00:00Z"),
      paidOnDate: new Date("2024-07-10T12:00:00Z"),
      memo: "Payment for services rendered",
      currency: "USD",
      exchangeRate: "1.2",
      totalDiscount: 1000,
      subTotal: 10000,
      status: "Paid",
      totalTaxAmount: 1000,
      totalAmount: 11000,
      balance: 0,
      contactId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      accountingPeriodId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      trackingCategories: [
        "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      ],
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
| `request`                                                                                                                                                                      | [operations.CreateAccountingInvoiceRequest](../../models/operations/createaccountinginvoicerequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.UnifiedAccountingInvoiceOutput](../../models/components/unifiedaccountinginvoiceoutput.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## retrieve

Retrieve Invoices from any connected Accounting software

### Example Usage

```typescript
import { Panora } from "@panora/sdk";

const panora = new Panora({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await panora.accounting.invoices.retrieve({
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
import { accountingInvoicesRetrieve } from "@panora/sdk/funcs/accountingInvoicesRetrieve.js";

// Use `PanoraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const panora = new PanoraCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await accountingInvoicesRetrieve(panora, {
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
| `request`                                                                                                                                                                      | [operations.RetrieveAccountingInvoiceRequest](../../models/operations/retrieveaccountinginvoicerequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.UnifiedAccountingInvoiceOutput](../../models/components/unifiedaccountinginvoiceoutput.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
