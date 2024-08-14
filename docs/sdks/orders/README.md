# Orders
(*ecommerce.orders*)

### Available Operations

* [list](#list) - List Orders
* [create](#create) - Create Orders
* [retrieve](#retrieve) - Retrieve Orders

## list

List Orders

### Example Usage

```typescript
import { Panora } from "@panora/sdk";

const panora = new Panora({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await panora.ecommerce.orders.list({
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
import { ecommerceOrdersList } from "@panora/sdk/funcs/ecommerceOrdersList.js";

// Use `PanoraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const panora = new PanoraCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await ecommerceOrdersList(panora, {
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
| `request`                                                                                                                                                                      | [operations.ListEcommerceOrdersRequest](../../models/operations/listecommerceordersrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ListEcommerceOrdersResponse](../../models/operations/listecommerceordersresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## create

Create Orders in any supported Ecommerce software

### Example Usage

```typescript
import { Panora } from "@panora/sdk";
import {
  UnifiedEcommerceOrderInputCurrency,
  UnifiedEcommerceOrderInputFulfillmentStatus,
  UnifiedEcommerceOrderInputOrderStatus,
  UnifiedEcommerceOrderInputPaymentStatus,
} from "@panora/sdk/models/components";

const panora = new Panora({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await panora.ecommerce.orders.create({
    xConnectionToken: "<value>",
    remoteData: false,
    unifiedEcommerceOrderInput: {
      orderStatus: UnifiedEcommerceOrderInputOrderStatus.Unshipped,
      orderNumber: "19823838833",
      paymentStatus: UnifiedEcommerceOrderInputPaymentStatus.Success,
      currency: UnifiedEcommerceOrderInputCurrency.Aud,
      totalPrice: 300,
      totalDiscount: 10,
      totalShipping: 120,
      totalTax: 120,
      fulfillmentStatus: UnifiedEcommerceOrderInputFulfillmentStatus.Pending,
      customerId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      items: [
        {
          name: "Net Income",
          value: 100000,
          type: "Operating Activities",
          parentItem: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
          remoteId: "12345",
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
import { ecommerceOrdersCreate } from "@panora/sdk/funcs/ecommerceOrdersCreate.js";
import {
  UnifiedEcommerceOrderInputCurrency,
  UnifiedEcommerceOrderInputFulfillmentStatus,
  UnifiedEcommerceOrderInputOrderStatus,
  UnifiedEcommerceOrderInputPaymentStatus,
} from "@panora/sdk/models/components";

// Use `PanoraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const panora = new PanoraCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await ecommerceOrdersCreate(panora, {
    xConnectionToken: "<value>",
    remoteData: false,
    unifiedEcommerceOrderInput: {
      orderStatus: UnifiedEcommerceOrderInputOrderStatus.Unshipped,
      orderNumber: "19823838833",
      paymentStatus: UnifiedEcommerceOrderInputPaymentStatus.Success,
      currency: UnifiedEcommerceOrderInputCurrency.Aud,
      totalPrice: 300,
      totalDiscount: 10,
      totalShipping: 120,
      totalTax: 120,
      fulfillmentStatus: UnifiedEcommerceOrderInputFulfillmentStatus.Pending,
      customerId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      items: [
        {
          name: "Net Income",
          value: 100000,
          type: "Operating Activities",
          parentItem: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
          remoteId: "12345",
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
| `request`                                                                                                                                                                      | [operations.CreateEcommerceOrderRequest](../../models/operations/createecommerceorderrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[components.UnifiedEcommerceOrderOutput](../../models/components/unifiedecommerceorderoutput.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## retrieve

Retrieve orders from any connected Ats software

### Example Usage

```typescript
import { Panora } from "@panora/sdk";

const panora = new Panora({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await panora.ecommerce.orders.retrieve({
    xConnectionToken: "<value>",
    id: "<id>",
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
import { ecommerceOrdersRetrieve } from "@panora/sdk/funcs/ecommerceOrdersRetrieve.js";

// Use `PanoraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const panora = new PanoraCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await ecommerceOrdersRetrieve(panora, {
    xConnectionToken: "<value>",
    id: "<id>",
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
| `request`                                                                                                                                                                      | [operations.RetrieveEcommerceOrderRequest](../../models/operations/retrieveecommerceorderrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[components.UnifiedEcommerceOrderOutput](../../models/components/unifiedecommerceorderoutput.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
