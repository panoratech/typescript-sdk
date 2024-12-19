# @panora/sdk

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/advanced-setup/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start Summary [summary] -->
## Summary

Panora API: A unified API to ship integrations
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@panora/sdk](#panorasdk)
  * [🏗 **Welcome to your new SDK!** 🏗](#welcome-to-your-new-sdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Retries](#retries)
  * [Authentication](#authentication)
  * [Pagination](#pagination)
  * [Standalone functions](#standalone-functions)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @panora/sdk
```

### PNPM

```bash
pnpm add @panora/sdk
```

### Bun

```bash
bun add @panora/sdk
```

### Yarn

```bash
yarn add @panora/sdk zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Panora } from "@panora/sdk";

const panora = new Panora({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await panora.hello();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [accounting](docs/sdks/accounting/README.md)


#### [accounting.accounts](docs/sdks/panoraaccounts/README.md)

* [list](docs/sdks/panoraaccounts/README.md#list) - List  Accounts
* [create](docs/sdks/panoraaccounts/README.md#create) - Create Accounts
* [retrieve](docs/sdks/panoraaccounts/README.md#retrieve) - Retrieve Accounts

#### [accounting.addresses](docs/sdks/addresses/README.md)

* [list](docs/sdks/addresses/README.md#list) - List  Addresss
* [retrieve](docs/sdks/addresses/README.md#retrieve) - Retrieve Addresses

#### [accounting.attachments](docs/sdks/attachments/README.md)

* [list](docs/sdks/attachments/README.md#list) - List  Attachments
* [create](docs/sdks/attachments/README.md#create) - Create Attachments
* [retrieve](docs/sdks/attachments/README.md#retrieve) - Retrieve Attachments

#### [accounting.balancesheets](docs/sdks/balancesheets/README.md)

* [list](docs/sdks/balancesheets/README.md#list) - List  BalanceSheets
* [retrieve](docs/sdks/balancesheets/README.md#retrieve) - Retrieve BalanceSheets

#### [accounting.cashflowstatements](docs/sdks/cashflowstatements/README.md)

* [list](docs/sdks/cashflowstatements/README.md#list) - List  CashflowStatements
* [retrieve](docs/sdks/cashflowstatements/README.md#retrieve) - Retrieve Cashflow Statements

#### [accounting.companyinfos](docs/sdks/companyinfos/README.md)

* [list](docs/sdks/companyinfos/README.md#list) - List  CompanyInfos
* [retrieve](docs/sdks/companyinfos/README.md#retrieve) - Retrieve Company Infos

#### [accounting.contacts](docs/sdks/panoraaccountingcontacts/README.md)

* [list](docs/sdks/panoraaccountingcontacts/README.md#list) - List  Contacts
* [create](docs/sdks/panoraaccountingcontacts/README.md#create) - Create Contacts
* [retrieve](docs/sdks/panoraaccountingcontacts/README.md#retrieve) - Retrieve Contacts

#### [accounting.creditnotes](docs/sdks/creditnotes/README.md)

* [list](docs/sdks/creditnotes/README.md#list) - List  CreditNotes
* [retrieve](docs/sdks/creditnotes/README.md#retrieve) - Retrieve Credit Notes

#### [accounting.expenses](docs/sdks/expenses/README.md)

* [list](docs/sdks/expenses/README.md#list) - List  Expenses
* [create](docs/sdks/expenses/README.md#create) - Create Expenses
* [retrieve](docs/sdks/expenses/README.md#retrieve) - Retrieve Expenses

#### [accounting.incomestatements](docs/sdks/incomestatements/README.md)

* [list](docs/sdks/incomestatements/README.md#list) - List  IncomeStatements
* [retrieve](docs/sdks/incomestatements/README.md#retrieve) - Retrieve Income Statements

#### [accounting.invoices](docs/sdks/invoices/README.md)

* [list](docs/sdks/invoices/README.md#list) - List  Invoices
* [create](docs/sdks/invoices/README.md#create) - Create Invoices
* [retrieve](docs/sdks/invoices/README.md#retrieve) - Retrieve Invoices

#### [accounting.items](docs/sdks/items/README.md)

* [list](docs/sdks/items/README.md#list) - List  Items
* [retrieve](docs/sdks/items/README.md#retrieve) - Retrieve Items

#### [accounting.journalentries](docs/sdks/journalentries/README.md)

* [list](docs/sdks/journalentries/README.md#list) - List  JournalEntrys
* [create](docs/sdks/journalentries/README.md#create) - Create Journal Entries
* [retrieve](docs/sdks/journalentries/README.md#retrieve) - Retrieve Journal Entries

#### [accounting.payments](docs/sdks/payments/README.md)

* [list](docs/sdks/payments/README.md#list) - List  Payments
* [create](docs/sdks/payments/README.md#create) - Create Payments
* [retrieve](docs/sdks/payments/README.md#retrieve) - Retrieve Payments

#### [accounting.phonenumbers](docs/sdks/phonenumbers/README.md)

* [list](docs/sdks/phonenumbers/README.md#list) - List  PhoneNumbers
* [retrieve](docs/sdks/phonenumbers/README.md#retrieve) - Retrieve Phone Numbers

#### [accounting.purchaseorders](docs/sdks/purchaseorders/README.md)

* [list](docs/sdks/purchaseorders/README.md#list) - List  PurchaseOrders
* [create](docs/sdks/purchaseorders/README.md#create) - Create Purchase Orders
* [retrieve](docs/sdks/purchaseorders/README.md#retrieve) - Retrieve Purchase Orders

#### [accounting.taxrates](docs/sdks/taxrates/README.md)

* [list](docs/sdks/taxrates/README.md#list) - List  TaxRates
* [retrieve](docs/sdks/taxrates/README.md#retrieve) - Retrieve Tax Rates

#### [accounting.trackingcategories](docs/sdks/trackingcategories/README.md)

* [list](docs/sdks/trackingcategories/README.md#list) - List  TrackingCategorys
* [retrieve](docs/sdks/trackingcategories/README.md#retrieve) - Retrieve Tracking Categories

#### [accounting.transactions](docs/sdks/transactions/README.md)

* [list](docs/sdks/transactions/README.md#list) - List  Transactions
* [retrieve](docs/sdks/transactions/README.md#retrieve) - Retrieve Transactions

#### [accounting.vendorcredits](docs/sdks/vendorcredits/README.md)

* [list](docs/sdks/vendorcredits/README.md#list) - List  VendorCredits
* [retrieve](docs/sdks/vendorcredits/README.md#retrieve) - Retrieve Vendor Credits

### [auth](docs/sdks/auth/README.md)


#### [auth.login](docs/sdks/login/README.md)

* [signIn](docs/sdks/login/README.md#signin) - Log In

### [connections](docs/sdks/connections/README.md)

* [list](docs/sdks/connections/README.md#list) - List Connections

### [crm](docs/sdks/crm/README.md)


#### [crm.companies](docs/sdks/companies/README.md)

* [list](docs/sdks/companies/README.md#list) - List Companies
* [create](docs/sdks/companies/README.md#create) - Create Companies
* [retrieve](docs/sdks/companies/README.md#retrieve) - Retrieve Companies

#### [crm.contacts](docs/sdks/panoracontacts/README.md)

* [list](docs/sdks/panoracontacts/README.md#list) - List CRM Contacts
* [create](docs/sdks/panoracontacts/README.md#create) - Create Contacts
* [retrieve](docs/sdks/panoracontacts/README.md#retrieve) - Retrieve Contacts

#### [crm.deals](docs/sdks/deals/README.md)

* [list](docs/sdks/deals/README.md#list) - List Deals
* [create](docs/sdks/deals/README.md#create) - Create Deals
* [retrieve](docs/sdks/deals/README.md#retrieve) - Retrieve Deals

#### [crm.engagements](docs/sdks/engagements/README.md)

* [list](docs/sdks/engagements/README.md#list) - List Engagements
* [create](docs/sdks/engagements/README.md#create) - Create Engagements
* [retrieve](docs/sdks/engagements/README.md#retrieve) - Retrieve Engagements

#### [crm.notes](docs/sdks/notes/README.md)

* [list](docs/sdks/notes/README.md#list) - List Notes
* [create](docs/sdks/notes/README.md#create) - Create Notes
* [retrieve](docs/sdks/notes/README.md#retrieve) - Retrieve Notes

#### [crm.stages](docs/sdks/stages/README.md)

* [list](docs/sdks/stages/README.md#list) - List  Stages
* [retrieve](docs/sdks/stages/README.md#retrieve) - Retrieve Stages

#### [crm.tasks](docs/sdks/tasks/README.md)

* [list](docs/sdks/tasks/README.md#list) - List Tasks
* [create](docs/sdks/tasks/README.md#create) - Create Tasks
* [retrieve](docs/sdks/tasks/README.md#retrieve) - Retrieve Tasks

#### [crm.users](docs/sdks/panorausers/README.md)

* [list](docs/sdks/panorausers/README.md#list) - List  Users
* [retrieve](docs/sdks/panorausers/README.md#retrieve) - Retrieve Users

### [ecommerce](docs/sdks/ecommerce/README.md)


#### [ecommerce.customers](docs/sdks/customers/README.md)

* [list](docs/sdks/customers/README.md#list) - List Customers
* [retrieve](docs/sdks/customers/README.md#retrieve) - Retrieve Customers

#### [ecommerce.fulfillments](docs/sdks/fulfillments/README.md)

* [list](docs/sdks/fulfillments/README.md#list) - List Fulfillments
* [retrieve](docs/sdks/fulfillments/README.md#retrieve) - Retrieve Fulfillments

#### [ecommerce.orders](docs/sdks/orders/README.md)

* [list](docs/sdks/orders/README.md#list) - List Orders
* [create](docs/sdks/orders/README.md#create) - Create Orders
* [retrieve](docs/sdks/orders/README.md#retrieve) - Retrieve Orders

#### [ecommerce.products](docs/sdks/products/README.md)

* [list](docs/sdks/products/README.md#list) - List Products
* [create](docs/sdks/products/README.md#create) - Create Products
* [retrieve](docs/sdks/products/README.md#retrieve) - Retrieve Products

### [events](docs/sdks/events/README.md)

* [getPanoraCoreEvents](docs/sdks/events/README.md#getpanoracoreevents) - List Events

### [fieldMappings](docs/sdks/fieldmappings/README.md)

* [getFieldMappingValues](docs/sdks/fieldmappings/README.md#getfieldmappingvalues) - Retrieve field mappings values
* [getFieldMappingsEntities](docs/sdks/fieldmappings/README.md#getfieldmappingsentities) - Retrieve field mapping entities
* [getFieldMappings](docs/sdks/fieldmappings/README.md#getfieldmappings) - Retrieve field mappings
* [definitions](docs/sdks/fieldmappings/README.md#definitions) - Define target Field
* [defineCustomField](docs/sdks/fieldmappings/README.md#definecustomfield) - Create Custom Field
* [map](docs/sdks/fieldmappings/README.md#map) - Map Custom Field

### [filestorage](docs/sdks/filestorage/README.md)


#### [filestorage.files](docs/sdks/files/README.md)

* [list](docs/sdks/files/README.md#list) - List  Files
* [create](docs/sdks/files/README.md#create) - Create Files
* [retrieve](docs/sdks/files/README.md#retrieve) - Retrieve Files

#### [filestorage.folders](docs/sdks/folders/README.md)

* [list](docs/sdks/folders/README.md#list) - List  Folders
* [create](docs/sdks/folders/README.md#create) - Create Folders
* [retrieve](docs/sdks/folders/README.md#retrieve) - Retrieve Folders

#### [filestorage.groups](docs/sdks/groups/README.md)

* [list](docs/sdks/groups/README.md#list) - List  Groups
* [retrieve](docs/sdks/groups/README.md#retrieve) - Retrieve Groups

#### [filestorage.users](docs/sdks/panorafilestorageusers/README.md)

* [list](docs/sdks/panorafilestorageusers/README.md#list) - List Users
* [retrieve](docs/sdks/panorafilestorageusers/README.md#retrieve) - Retrieve Users

### [linkedUsers](docs/sdks/linkedusers/README.md)

* [remoteId](docs/sdks/linkedusers/README.md#remoteid) - Retrieve a Linked User From A Remote Id
* [create](docs/sdks/linkedusers/README.md#create) - Create Linked Users
* [list](docs/sdks/linkedusers/README.md#list) - List Linked Users
* [importBatch](docs/sdks/linkedusers/README.md#importbatch) - Add Batch Linked Users
* [retrieve](docs/sdks/linkedusers/README.md#retrieve) - Retrieve Linked Users

### [marketingautomation](docs/sdks/marketingautomation/README.md)


#### [marketingautomation.actions](docs/sdks/actions/README.md)

* [list](docs/sdks/actions/README.md#list) - List Actions
* [create](docs/sdks/actions/README.md#create) - Create Action
* [retrieve](docs/sdks/actions/README.md#retrieve) - Retrieve Actions

#### [marketingautomation.automations](docs/sdks/automations/README.md)

* [list](docs/sdks/automations/README.md#list) - List Automations
* [create](docs/sdks/automations/README.md#create) - Create Automation
* [retrieve](docs/sdks/automations/README.md#retrieve) - Retrieve Automation

#### [marketingautomation.campaigns](docs/sdks/campaigns/README.md)

* [list](docs/sdks/campaigns/README.md#list) - List Campaigns
* [create](docs/sdks/campaigns/README.md#create) - Create Campaign
* [retrieve](docs/sdks/campaigns/README.md#retrieve) - Retrieve Campaign

#### [marketingautomation.contacts](docs/sdks/panoramarketingautomationcontacts/README.md)

* [list](docs/sdks/panoramarketingautomationcontacts/README.md#list) - List  Contacts
* [create](docs/sdks/panoramarketingautomationcontacts/README.md#create) - Create Contact
* [retrieve](docs/sdks/panoramarketingautomationcontacts/README.md#retrieve) - Retrieve Contacts

#### [marketingautomation.emails](docs/sdks/emails/README.md)

* [list](docs/sdks/emails/README.md#list) - List Emails
* [retrieve](docs/sdks/emails/README.md#retrieve) - Retrieve Email

#### [marketingautomation.events](docs/sdks/panoraevents/README.md)

* [list](docs/sdks/panoraevents/README.md#list) - List Events
* [retrieve](docs/sdks/panoraevents/README.md#retrieve) - Retrieve Event

#### [marketingautomation.lists](docs/sdks/lists/README.md)

* [list](docs/sdks/lists/README.md#list) - List Lists
* [create](docs/sdks/lists/README.md#create) - Create Lists
* [retrieve](docs/sdks/lists/README.md#retrieve) - Retrieve List

#### [marketingautomation.messages](docs/sdks/messages/README.md)

* [list](docs/sdks/messages/README.md#list) - List Messages
* [retrieve](docs/sdks/messages/README.md#retrieve) - Retrieve Messages

#### [marketingautomation.templates](docs/sdks/templates/README.md)

* [list](docs/sdks/templates/README.md#list) - List Templates
* [create](docs/sdks/templates/README.md#create) - Create Template
* [retrieve](docs/sdks/templates/README.md#retrieve) - Retrieve Template

#### [marketingautomation.users](docs/sdks/panoramarketingautomationusers/README.md)

* [list](docs/sdks/panoramarketingautomationusers/README.md#list) - List  Users
* [retrieve](docs/sdks/panoramarketingautomationusers/README.md#retrieve) - Retrieve Users

### [Panora SDK](docs/sdks/panora/README.md)

* [hello](docs/sdks/panora/README.md#hello)
* [health](docs/sdks/panora/README.md#health)

### [passthrough](docs/sdks/passthrough/README.md)

* [request](docs/sdks/passthrough/README.md#request) - Make a passthrough request

#### [passthrough.retryid](docs/sdks/retryid/README.md)

* [getRetriedRequestResponse](docs/sdks/retryid/README.md#getretriedrequestresponse) - Retrieve response of a failed passthrough request due to rate limits

### [projects](docs/sdks/projects/README.md)

* [getProjects](docs/sdks/projects/README.md#getprojects) - Retrieve projects
* [create](docs/sdks/projects/README.md#create) - Create a project

### [sync](docs/sdks/sync/README.md)

* [status](docs/sdks/sync/README.md#status) - Retrieve sync status of a certain vertical
* [resync](docs/sdks/sync/README.md#resync) - Resync common objects across a vertical
* [updatePullFrequency](docs/sdks/sync/README.md#updatepullfrequency) - Update pull frequency for verticals
* [getPullFrequency](docs/sdks/sync/README.md#getpullfrequency) - Get pull frequency for verticals

### [ticketing](docs/sdks/ticketing/README.md)


#### [ticketing.accounts](docs/sdks/accounts/README.md)

* [list](docs/sdks/accounts/README.md#list) - List  Accounts
* [retrieve](docs/sdks/accounts/README.md#retrieve) - Retrieve Accounts

#### [ticketing.attachments](docs/sdks/panoraattachments/README.md)

* [list](docs/sdks/panoraattachments/README.md#list) - List  Attachments
* [create](docs/sdks/panoraattachments/README.md#create) - Create Attachments
* [retrieve](docs/sdks/panoraattachments/README.md#retrieve) - Retrieve Attachments

#### [ticketing.collections](docs/sdks/collections/README.md)

* [list](docs/sdks/collections/README.md#list) - List Collections
* [retrieve](docs/sdks/collections/README.md#retrieve) - Retrieve Collections

#### [ticketing.comments](docs/sdks/comments/README.md)

* [list](docs/sdks/comments/README.md#list) - List Comments
* [create](docs/sdks/comments/README.md#create) - Create Comments
* [retrieve](docs/sdks/comments/README.md#retrieve) - Retrieve Comment

#### [ticketing.contacts](docs/sdks/contacts/README.md)

* [list](docs/sdks/contacts/README.md#list) - List Contacts
* [retrieve](docs/sdks/contacts/README.md#retrieve) - Retrieve Contact

#### [ticketing.tags](docs/sdks/tags/README.md)

* [list](docs/sdks/tags/README.md#list) - List Tags
* [retrieve](docs/sdks/tags/README.md#retrieve) - Retrieve Tag

#### [ticketing.teams](docs/sdks/teams/README.md)

* [list](docs/sdks/teams/README.md#list) - List  Teams
* [retrieve](docs/sdks/teams/README.md#retrieve) - Retrieve Teams

#### [ticketing.tickets](docs/sdks/tickets/README.md)

* [list](docs/sdks/tickets/README.md#list) - List  Tickets
* [create](docs/sdks/tickets/README.md#create) - Create Tickets
* [retrieve](docs/sdks/tickets/README.md#retrieve) - Retrieve Tickets

#### [ticketing.users](docs/sdks/users/README.md)

* [list](docs/sdks/users/README.md#list) - List Users
* [retrieve](docs/sdks/users/README.md#retrieve) - Retrieve User

### [webhooks](docs/sdks/webhooks/README.md)

* [list](docs/sdks/webhooks/README.md#list) - List webhooks
* [create](docs/sdks/webhooks/README.md#create) - Create webhook
* [delete](docs/sdks/webhooks/README.md#delete) - Delete Webhook
* [updateStatus](docs/sdks/webhooks/README.md#updatestatus) - Update webhook status
* [verifyEvent](docs/sdks/webhooks/README.md#verifyevent) - Verify payload signature of the webhook

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

If the request fails due to, for example 4XX or 5XX status codes, it will throw a `SDKError`.

| Error Type      | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.SDKError | 4XX, 5XX    | \*/\*        |

```typescript
import { Panora } from "@panora/sdk";
import { SDKValidationError } from "@panora/sdk/models/errors";

const panora = new Panora({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  let result;
  try {
    result = await panora.hello();

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError):
        {
          // Pretty-print will provide a human-readable multi-line error message
          console.error(err.pretty());
          // Raw value may also be inspected
          console.error(err.rawValue);
          return;
        }
        sdkerror.js;
      // Server returned an error status code or an unknown content type
      case (err instanceof SDKError): {
        console.error(err.statusCode);
        console.error(err.rawResponse.body);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                           |
| --- | -------------------------------- |
| 0   | `https://api.panora.dev`         |
| 1   | `https://api-sandbox.panora.dev` |
| 2   | `https://api-dev.panora.dev`     |

#### Example

```typescript
import { Panora } from "@panora/sdk";

const panora = new Panora({
  serverIdx: 2,
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await panora.hello();

  // Handle the result
  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Panora } from "@panora/sdk";

const panora = new Panora({
  serverURL: "https://api.panora.dev",
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await panora.hello();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Panora } from "@panora/sdk";
import { HTTPClient } from "@panora/sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Panora({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Panora } from "@panora/sdk";

const panora = new Panora({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await panora.hello({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Panora } from "@panora/sdk";

const panora = new Panora({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await panora.hello();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type   | Scheme  |
| -------- | ------ | ------- |
| `apiKey` | apiKey | API key |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Panora } from "@panora/sdk";

const panora = new Panora({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await panora.hello();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

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
    // Handle the page
    console.log(page);
  }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`accountingAccountsCreate`](docs/sdks/panoraaccounts/README.md#create) - Create Accounts
- [`accountingAccountsList`](docs/sdks/panoraaccounts/README.md#list) - List  Accounts
- [`accountingAccountsRetrieve`](docs/sdks/panoraaccounts/README.md#retrieve) - Retrieve Accounts
- [`accountingAddressesList`](docs/sdks/addresses/README.md#list) - List  Addresss
- [`accountingAddressesRetrieve`](docs/sdks/addresses/README.md#retrieve) - Retrieve Addresses
- [`accountingAttachmentsCreate`](docs/sdks/attachments/README.md#create) - Create Attachments
- [`accountingAttachmentsList`](docs/sdks/attachments/README.md#list) - List  Attachments
- [`accountingAttachmentsRetrieve`](docs/sdks/attachments/README.md#retrieve) - Retrieve Attachments
- [`accountingBalancesheetsList`](docs/sdks/balancesheets/README.md#list) - List  BalanceSheets
- [`accountingBalancesheetsRetrieve`](docs/sdks/balancesheets/README.md#retrieve) - Retrieve BalanceSheets
- [`accountingCashflowstatementsList`](docs/sdks/cashflowstatements/README.md#list) - List  CashflowStatements
- [`accountingCashflowstatementsRetrieve`](docs/sdks/cashflowstatements/README.md#retrieve) - Retrieve Cashflow Statements
- [`accountingCompanyinfosList`](docs/sdks/companyinfos/README.md#list) - List  CompanyInfos
- [`accountingCompanyinfosRetrieve`](docs/sdks/companyinfos/README.md#retrieve) - Retrieve Company Infos
- [`accountingContactsCreate`](docs/sdks/panoraaccountingcontacts/README.md#create) - Create Contacts
- [`accountingContactsList`](docs/sdks/panoraaccountingcontacts/README.md#list) - List  Contacts
- [`accountingContactsRetrieve`](docs/sdks/panoraaccountingcontacts/README.md#retrieve) - Retrieve Contacts
- [`accountingCreditnotesList`](docs/sdks/creditnotes/README.md#list) - List  CreditNotes
- [`accountingCreditnotesRetrieve`](docs/sdks/creditnotes/README.md#retrieve) - Retrieve Credit Notes
- [`accountingExpensesCreate`](docs/sdks/expenses/README.md#create) - Create Expenses
- [`accountingExpensesList`](docs/sdks/expenses/README.md#list) - List  Expenses
- [`accountingExpensesRetrieve`](docs/sdks/expenses/README.md#retrieve) - Retrieve Expenses
- [`accountingIncomestatementsList`](docs/sdks/incomestatements/README.md#list) - List  IncomeStatements
- [`accountingIncomestatementsRetrieve`](docs/sdks/incomestatements/README.md#retrieve) - Retrieve Income Statements
- [`accountingInvoicesCreate`](docs/sdks/invoices/README.md#create) - Create Invoices
- [`accountingInvoicesList`](docs/sdks/invoices/README.md#list) - List  Invoices
- [`accountingInvoicesRetrieve`](docs/sdks/invoices/README.md#retrieve) - Retrieve Invoices
- [`accountingItemsList`](docs/sdks/items/README.md#list) - List  Items
- [`accountingItemsRetrieve`](docs/sdks/items/README.md#retrieve) - Retrieve Items
- [`accountingJournalentriesCreate`](docs/sdks/journalentries/README.md#create) - Create Journal Entries
- [`accountingJournalentriesList`](docs/sdks/journalentries/README.md#list) - List  JournalEntrys
- [`accountingJournalentriesRetrieve`](docs/sdks/journalentries/README.md#retrieve) - Retrieve Journal Entries
- [`accountingPaymentsCreate`](docs/sdks/payments/README.md#create) - Create Payments
- [`accountingPaymentsList`](docs/sdks/payments/README.md#list) - List  Payments
- [`accountingPaymentsRetrieve`](docs/sdks/payments/README.md#retrieve) - Retrieve Payments
- [`accountingPhonenumbersList`](docs/sdks/phonenumbers/README.md#list) - List  PhoneNumbers
- [`accountingPhonenumbersRetrieve`](docs/sdks/phonenumbers/README.md#retrieve) - Retrieve Phone Numbers
- [`accountingPurchaseordersCreate`](docs/sdks/purchaseorders/README.md#create) - Create Purchase Orders
- [`accountingPurchaseordersList`](docs/sdks/purchaseorders/README.md#list) - List  PurchaseOrders
- [`accountingPurchaseordersRetrieve`](docs/sdks/purchaseorders/README.md#retrieve) - Retrieve Purchase Orders
- [`accountingTaxratesList`](docs/sdks/taxrates/README.md#list) - List  TaxRates
- [`accountingTaxratesRetrieve`](docs/sdks/taxrates/README.md#retrieve) - Retrieve Tax Rates
- [`accountingTrackingcategoriesList`](docs/sdks/trackingcategories/README.md#list) - List  TrackingCategorys
- [`accountingTrackingcategoriesRetrieve`](docs/sdks/trackingcategories/README.md#retrieve) - Retrieve Tracking Categories
- [`accountingTransactionsList`](docs/sdks/transactions/README.md#list) - List  Transactions
- [`accountingTransactionsRetrieve`](docs/sdks/transactions/README.md#retrieve) - Retrieve Transactions
- [`accountingVendorcreditsList`](docs/sdks/vendorcredits/README.md#list) - List  VendorCredits
- [`accountingVendorcreditsRetrieve`](docs/sdks/vendorcredits/README.md#retrieve) - Retrieve Vendor Credits
- [`authLoginSignIn`](docs/sdks/login/README.md#signin) - Log In
- [`connectionsList`](docs/sdks/connections/README.md#list) - List Connections
- [`crmCompaniesCreate`](docs/sdks/companies/README.md#create) - Create Companies
- [`crmCompaniesList`](docs/sdks/companies/README.md#list) - List Companies
- [`crmCompaniesRetrieve`](docs/sdks/companies/README.md#retrieve) - Retrieve Companies
- [`crmContactsCreate`](docs/sdks/panoracontacts/README.md#create) - Create Contacts
- [`crmContactsList`](docs/sdks/panoracontacts/README.md#list) - List CRM Contacts
- [`crmContactsRetrieve`](docs/sdks/panoracontacts/README.md#retrieve) - Retrieve Contacts
- [`crmDealsCreate`](docs/sdks/deals/README.md#create) - Create Deals
- [`crmDealsList`](docs/sdks/deals/README.md#list) - List Deals
- [`crmDealsRetrieve`](docs/sdks/deals/README.md#retrieve) - Retrieve Deals
- [`crmEngagementsCreate`](docs/sdks/engagements/README.md#create) - Create Engagements
- [`crmEngagementsList`](docs/sdks/engagements/README.md#list) - List Engagements
- [`crmEngagementsRetrieve`](docs/sdks/engagements/README.md#retrieve) - Retrieve Engagements
- [`crmNotesCreate`](docs/sdks/notes/README.md#create) - Create Notes
- [`crmNotesList`](docs/sdks/notes/README.md#list) - List Notes
- [`crmNotesRetrieve`](docs/sdks/notes/README.md#retrieve) - Retrieve Notes
- [`crmStagesList`](docs/sdks/stages/README.md#list) - List  Stages
- [`crmStagesRetrieve`](docs/sdks/stages/README.md#retrieve) - Retrieve Stages
- [`crmTasksCreate`](docs/sdks/tasks/README.md#create) - Create Tasks
- [`crmTasksList`](docs/sdks/tasks/README.md#list) - List Tasks
- [`crmTasksRetrieve`](docs/sdks/tasks/README.md#retrieve) - Retrieve Tasks
- [`crmUsersList`](docs/sdks/panorausers/README.md#list) - List  Users
- [`crmUsersRetrieve`](docs/sdks/panorausers/README.md#retrieve) - Retrieve Users
- [`ecommerceCustomersList`](docs/sdks/customers/README.md#list) - List Customers
- [`ecommerceCustomersRetrieve`](docs/sdks/customers/README.md#retrieve) - Retrieve Customers
- [`ecommerceFulfillmentsList`](docs/sdks/fulfillments/README.md#list) - List Fulfillments
- [`ecommerceFulfillmentsRetrieve`](docs/sdks/fulfillments/README.md#retrieve) - Retrieve Fulfillments
- [`ecommerceOrdersCreate`](docs/sdks/orders/README.md#create) - Create Orders
- [`ecommerceOrdersList`](docs/sdks/orders/README.md#list) - List Orders
- [`ecommerceOrdersRetrieve`](docs/sdks/orders/README.md#retrieve) - Retrieve Orders
- [`ecommerceProductsCreate`](docs/sdks/products/README.md#create) - Create Products
- [`ecommerceProductsList`](docs/sdks/products/README.md#list) - List Products
- [`ecommerceProductsRetrieve`](docs/sdks/products/README.md#retrieve) - Retrieve Products
- [`eventsGetPanoraCoreEvents`](docs/sdks/events/README.md#getpanoracoreevents) - List Events
- [`fieldMappingsDefineCustomField`](docs/sdks/fieldmappings/README.md#definecustomfield) - Create Custom Field
- [`fieldMappingsDefinitions`](docs/sdks/fieldmappings/README.md#definitions) - Define target Field
- [`fieldMappingsGetFieldMappings`](docs/sdks/fieldmappings/README.md#getfieldmappings) - Retrieve field mappings
- [`fieldMappingsGetFieldMappingsEntities`](docs/sdks/fieldmappings/README.md#getfieldmappingsentities) - Retrieve field mapping entities
- [`fieldMappingsGetFieldMappingValues`](docs/sdks/fieldmappings/README.md#getfieldmappingvalues) - Retrieve field mappings values
- [`fieldMappingsMap`](docs/sdks/fieldmappings/README.md#map) - Map Custom Field
- [`filestorageFilesCreate`](docs/sdks/files/README.md#create) - Create Files
- [`filestorageFilesList`](docs/sdks/files/README.md#list) - List  Files
- [`filestorageFilesRetrieve`](docs/sdks/files/README.md#retrieve) - Retrieve Files
- [`filestorageFoldersCreate`](docs/sdks/folders/README.md#create) - Create Folders
- [`filestorageFoldersList`](docs/sdks/folders/README.md#list) - List  Folders
- [`filestorageFoldersRetrieve`](docs/sdks/folders/README.md#retrieve) - Retrieve Folders
- [`filestorageGroupsList`](docs/sdks/groups/README.md#list) - List  Groups
- [`filestorageGroupsRetrieve`](docs/sdks/groups/README.md#retrieve) - Retrieve Groups
- [`filestorageUsersList`](docs/sdks/panorafilestorageusers/README.md#list) - List Users
- [`filestorageUsersRetrieve`](docs/sdks/panorafilestorageusers/README.md#retrieve) - Retrieve Users
- [`health`](docs/sdks/panora/README.md#health)
- [`hello`](docs/sdks/panora/README.md#hello)
- [`linkedUsersCreate`](docs/sdks/linkedusers/README.md#create) - Create Linked Users
- [`linkedUsersImportBatch`](docs/sdks/linkedusers/README.md#importbatch) - Add Batch Linked Users
- [`linkedUsersList`](docs/sdks/linkedusers/README.md#list) - List Linked Users
- [`linkedUsersRemoteId`](docs/sdks/linkedusers/README.md#remoteid) - Retrieve a Linked User From A Remote Id
- [`linkedUsersRetrieve`](docs/sdks/linkedusers/README.md#retrieve) - Retrieve Linked Users
- [`marketingautomationActionsCreate`](docs/sdks/actions/README.md#create) - Create Action
- [`marketingautomationActionsList`](docs/sdks/actions/README.md#list) - List Actions
- [`marketingautomationActionsRetrieve`](docs/sdks/actions/README.md#retrieve) - Retrieve Actions
- [`marketingautomationAutomationsCreate`](docs/sdks/automations/README.md#create) - Create Automation
- [`marketingautomationAutomationsList`](docs/sdks/automations/README.md#list) - List Automations
- [`marketingautomationAutomationsRetrieve`](docs/sdks/automations/README.md#retrieve) - Retrieve Automation
- [`marketingautomationCampaignsCreate`](docs/sdks/campaigns/README.md#create) - Create Campaign
- [`marketingautomationCampaignsList`](docs/sdks/campaigns/README.md#list) - List Campaigns
- [`marketingautomationCampaignsRetrieve`](docs/sdks/campaigns/README.md#retrieve) - Retrieve Campaign
- [`marketingautomationContactsCreate`](docs/sdks/panoramarketingautomationcontacts/README.md#create) - Create Contact
- [`marketingautomationContactsList`](docs/sdks/panoramarketingautomationcontacts/README.md#list) - List  Contacts
- [`marketingautomationContactsRetrieve`](docs/sdks/panoramarketingautomationcontacts/README.md#retrieve) - Retrieve Contacts
- [`marketingautomationEmailsList`](docs/sdks/emails/README.md#list) - List Emails
- [`marketingautomationEmailsRetrieve`](docs/sdks/emails/README.md#retrieve) - Retrieve Email
- [`marketingautomationEventsList`](docs/sdks/panoraevents/README.md#list) - List Events
- [`marketingautomationEventsRetrieve`](docs/sdks/panoraevents/README.md#retrieve) - Retrieve Event
- [`marketingautomationListsCreate`](docs/sdks/lists/README.md#create) - Create Lists
- [`marketingautomationListsList`](docs/sdks/lists/README.md#list) - List Lists
- [`marketingautomationListsRetrieve`](docs/sdks/lists/README.md#retrieve) - Retrieve List
- [`marketingautomationMessagesList`](docs/sdks/messages/README.md#list) - List Messages
- [`marketingautomationMessagesRetrieve`](docs/sdks/messages/README.md#retrieve) - Retrieve Messages
- [`marketingautomationTemplatesCreate`](docs/sdks/templates/README.md#create) - Create Template
- [`marketingautomationTemplatesList`](docs/sdks/templates/README.md#list) - List Templates
- [`marketingautomationTemplatesRetrieve`](docs/sdks/templates/README.md#retrieve) - Retrieve Template
- [`marketingautomationUsersList`](docs/sdks/panoramarketingautomationusers/README.md#list) - List  Users
- [`marketingautomationUsersRetrieve`](docs/sdks/panoramarketingautomationusers/README.md#retrieve) - Retrieve Users
- [`passthroughRequest`](docs/sdks/passthrough/README.md#request) - Make a passthrough request
- [`passthroughRetryidGetRetriedRequestResponse`](docs/sdks/retryid/README.md#getretriedrequestresponse) - Retrieve response of a failed passthrough request due to rate limits
- [`projectsCreate`](docs/sdks/projects/README.md#create) - Create a project
- [`projectsGetProjects`](docs/sdks/projects/README.md#getprojects) - Retrieve projects
- [`syncGetPullFrequency`](docs/sdks/sync/README.md#getpullfrequency) - Get pull frequency for verticals
- [`syncResync`](docs/sdks/sync/README.md#resync) - Resync common objects across a vertical
- [`syncStatus`](docs/sdks/sync/README.md#status) - Retrieve sync status of a certain vertical
- [`syncUpdatePullFrequency`](docs/sdks/sync/README.md#updatepullfrequency) - Update pull frequency for verticals
- [`ticketingAccountsList`](docs/sdks/accounts/README.md#list) - List  Accounts
- [`ticketingAccountsRetrieve`](docs/sdks/accounts/README.md#retrieve) - Retrieve Accounts
- [`ticketingAttachmentsCreate`](docs/sdks/panoraattachments/README.md#create) - Create Attachments
- [`ticketingAttachmentsList`](docs/sdks/panoraattachments/README.md#list) - List  Attachments
- [`ticketingAttachmentsRetrieve`](docs/sdks/panoraattachments/README.md#retrieve) - Retrieve Attachments
- [`ticketingCollectionsList`](docs/sdks/collections/README.md#list) - List Collections
- [`ticketingCollectionsRetrieve`](docs/sdks/collections/README.md#retrieve) - Retrieve Collections
- [`ticketingCommentsCreate`](docs/sdks/comments/README.md#create) - Create Comments
- [`ticketingCommentsList`](docs/sdks/comments/README.md#list) - List Comments
- [`ticketingCommentsRetrieve`](docs/sdks/comments/README.md#retrieve) - Retrieve Comment
- [`ticketingContactsList`](docs/sdks/contacts/README.md#list) - List Contacts
- [`ticketingContactsRetrieve`](docs/sdks/contacts/README.md#retrieve) - Retrieve Contact
- [`ticketingTagsList`](docs/sdks/tags/README.md#list) - List Tags
- [`ticketingTagsRetrieve`](docs/sdks/tags/README.md#retrieve) - Retrieve Tag
- [`ticketingTeamsList`](docs/sdks/teams/README.md#list) - List  Teams
- [`ticketingTeamsRetrieve`](docs/sdks/teams/README.md#retrieve) - Retrieve Teams
- [`ticketingTicketsCreate`](docs/sdks/tickets/README.md#create) - Create Tickets
- [`ticketingTicketsList`](docs/sdks/tickets/README.md#list) - List  Tickets
- [`ticketingTicketsRetrieve`](docs/sdks/tickets/README.md#retrieve) - Retrieve Tickets
- [`ticketingUsersList`](docs/sdks/users/README.md#list) - List Users
- [`ticketingUsersRetrieve`](docs/sdks/users/README.md#retrieve) - Retrieve User
- [`webhooksCreate`](docs/sdks/webhooks/README.md#create) - Create webhook
- [`webhooksDelete`](docs/sdks/webhooks/README.md#delete) - Delete Webhook
- [`webhooksList`](docs/sdks/webhooks/README.md#list) - List webhooks
- [`webhooksUpdateStatus`](docs/sdks/webhooks/README.md#updatestatus) - Update webhook status
- [`webhooksVerifyEvent`](docs/sdks/webhooks/README.md#verifyevent) - Verify payload signature of the webhook

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Panora } from "@panora/sdk";

const sdk = new Panora({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
