# Tickets
(*ticketing.tickets*)

### Available Operations

* [list](#list) - List  Tickets
* [create](#create) - Create Tickets
* [retrieve](#retrieve) - Retrieve Tickets

## list

List  Tickets

### Example Usage

```typescript
import { Panora } from "@panora/sdk";

const panora = new Panora({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await panora.ticketing.tickets.list({
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
import { ticketingTicketsList } from "@panora/sdk/funcs/ticketingTicketsList.js";

// Use `PanoraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const panora = new PanoraCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await ticketingTicketsList(panora, {
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
| `request`                                                                                                                                                                      | [operations.ListTicketingTicketRequest](../../models/operations/listticketingticketrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.ListTicketingTicketResponse](../../models/operations/listticketingticketresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## create

Create Tickets in any supported Ticketing software

### Example Usage

```typescript
import { Panora } from "@panora/sdk";
import {
  UnifiedTicketingTicketInputCreatorType,
  UnifiedTicketingTicketInputPriority,
  UnifiedTicketingTicketInputStatus,
  UnifiedTicketingTicketInputType,
} from "@panora/sdk/models/components";

const panora = new Panora({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await panora.ticketing.tickets.create({
    xConnectionToken: "<value>",
    remoteData: false,
    unifiedTicketingTicketInput: {
      name: "Customer Service Inquiry",
      status: UnifiedTicketingTicketInputStatus.Open,
      description: "Help customer",
      dueDate: new Date("2024-10-01T12:00:00Z"),
      type: UnifiedTicketingTicketInputType.Bug,
      parentTicket: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      collections: [
        "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      ],
      tags: [
        "my_tag",
        "urgent_tag",
      ],
      completedAt: new Date("2024-10-01T12:00:00Z"),
      priority: UnifiedTicketingTicketInputPriority.High,
      assignedTo: [
        "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      ],
      comment: {
        body: "Assigned to Eric !",
        htmlBody: "<p>Assigned to Eric !</p>",
        isPrivate: false,
        creatorType: UnifiedTicketingTicketInputCreatorType.User,
        ticketId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        contactId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        userId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        attachments: [
          "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        ],
      },
      accountId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      contactId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      attachments: [
        "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      ],
      fieldMappings: {
        "fav_dish": "broccoli",
        "fav_color": "red",
      },
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
import { ticketingTicketsCreate } from "@panora/sdk/funcs/ticketingTicketsCreate.js";
import {
  UnifiedTicketingTicketInputCreatorType,
  UnifiedTicketingTicketInputPriority,
  UnifiedTicketingTicketInputStatus,
  UnifiedTicketingTicketInputType,
} from "@panora/sdk/models/components";

// Use `PanoraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const panora = new PanoraCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await ticketingTicketsCreate(panora, {
    xConnectionToken: "<value>",
    remoteData: false,
    unifiedTicketingTicketInput: {
      name: "Customer Service Inquiry",
      status: UnifiedTicketingTicketInputStatus.Open,
      description: "Help customer",
      dueDate: new Date("2024-10-01T12:00:00Z"),
      type: UnifiedTicketingTicketInputType.Bug,
      parentTicket: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      collections: [
        "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      ],
      tags: [
        "my_tag",
        "urgent_tag",
      ],
      completedAt: new Date("2024-10-01T12:00:00Z"),
      priority: UnifiedTicketingTicketInputPriority.High,
      assignedTo: [
        "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      ],
      comment: {
        body: "Assigned to Eric !",
        htmlBody: "<p>Assigned to Eric !</p>",
        isPrivate: false,
        creatorType: UnifiedTicketingTicketInputCreatorType.User,
        ticketId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        contactId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        userId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        attachments: [
          "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
        ],
      },
      accountId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      contactId: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      attachments: [
        "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      ],
      fieldMappings: {
        "fav_dish": "broccoli",
        "fav_color": "red",
      },
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
| `request`                                                                                                                                                                      | [operations.CreateTicketingTicketRequest](../../models/operations/createticketingticketrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[components.UnifiedTicketingTicketOutput](../../models/components/unifiedticketingticketoutput.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## retrieve

Retrieve Tickets from any connected Ticketing software

### Example Usage

```typescript
import { Panora } from "@panora/sdk";

const panora = new Panora({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await panora.ticketing.tickets.retrieve({
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
import { ticketingTicketsRetrieve } from "@panora/sdk/funcs/ticketingTicketsRetrieve.js";

// Use `PanoraCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const panora = new PanoraCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await ticketingTicketsRetrieve(panora, {
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
| `request`                                                                                                                                                                      | [operations.RetrieveTicketingTicketRequest](../../models/operations/retrieveticketingticketrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[components.UnifiedTicketingTicketOutput](../../models/components/unifiedticketingticketoutput.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
