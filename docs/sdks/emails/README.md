# Emails
(*marketingautomation.emails*)

### Available Operations

* [list](#list) - List Emails
* [retrieve](#retrieve) - Retrieve Email

## list

List Emails

### Example Usage

```typescript
import { Panora } from "@panora/sdk";

const panora = new Panora({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await panora.marketingautomation.emails.list({
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
import { marketingautomationEmailsList } from "@panora/sdk/funcs/marketingautomationEmailsList.js";

// Use `PanoraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const panora = new PanoraCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await marketingautomationEmailsList(panora, {
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
| `request`                                                                                                                                                                      | [operations.ListMarketingautomationEmailsRequest](../../models/operations/listmarketingautomationemailsrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ListMarketingautomationEmailsResponse](../../models/operations/listmarketingautomationemailsresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## retrieve

Retrieve an Email from any connected Marketingautomation software

### Example Usage

```typescript
import { Panora } from "@panora/sdk";

const panora = new Panora({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await panora.marketingautomation.emails.retrieve({
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
import { marketingautomationEmailsRetrieve } from "@panora/sdk/funcs/marketingautomationEmailsRetrieve.js";

// Use `PanoraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const panora = new PanoraCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await marketingautomationEmailsRetrieve(panora, {
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
| `request`                                                                                                                                                                      | [operations.RetrieveMarketingautomationEmailRequest](../../models/operations/retrievemarketingautomationemailrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[components.UnifiedMarketingautomationEmailOutput](../../models/components/unifiedmarketingautomationemailoutput.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
