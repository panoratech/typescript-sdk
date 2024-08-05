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

<!-- Start SDK Installation [installation] -->
## SDK Installation

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

### [Panora SDK](docs/sdks/panora/README.md)

* [hello](docs/sdks/panora/README.md#hello)
* [health](docs/sdks/panora/README.md#health)


### [auth.login](docs/sdks/login/README.md)

* [signIn](docs/sdks/login/README.md#signin) - Log In

### [connections](docs/sdks/connections/README.md)

* [getConnections](docs/sdks/connections/README.md#getconnections) - List Connections

### [webhooks](docs/sdks/webhooks/README.md)

* [list](docs/sdks/webhooks/README.md#list) - List webhooks
* [create](docs/sdks/webhooks/README.md#create) - Create webhook
* [delete](docs/sdks/webhooks/README.md#delete) - Delete Webhook
* [updateStatus](docs/sdks/webhooks/README.md#updatestatus) - Update webhook status
* [verifyEvent](docs/sdks/webhooks/README.md#verifyevent) - Verify payload signature of the webhook


### [ticketing.tickets](docs/sdks/tickets/README.md)

* [list](docs/sdks/tickets/README.md#list) - List  Tickets
* [create](docs/sdks/tickets/README.md#create) - Create Tickets
* [retrieve](docs/sdks/tickets/README.md#retrieve) - Retrieve Tickets

### [ticketing.users](docs/sdks/users/README.md)

* [list](docs/sdks/users/README.md#list) - List Users
* [retrieve](docs/sdks/users/README.md#retrieve) - Retrieve User

### [ticketing.accounts](docs/sdks/accounts/README.md)

* [list](docs/sdks/accounts/README.md#list) - List  Accounts
* [retrieve](docs/sdks/accounts/README.md#retrieve) - Retrieve Accounts

### [ticketing.contacts](docs/sdks/contacts/README.md)

* [list](docs/sdks/contacts/README.md#list) - List Contacts
* [retrieve](docs/sdks/contacts/README.md#retrieve) - Retrieve Contact

### [ticketing.collections](docs/sdks/collections/README.md)

* [list](docs/sdks/collections/README.md#list) - List Collections
* [retrieve](docs/sdks/collections/README.md#retrieve) - Retrieve Collections

### [ticketing.comments](docs/sdks/comments/README.md)

* [list](docs/sdks/comments/README.md#list) - List Comments
* [create](docs/sdks/comments/README.md#create) - Create Comments
* [retrieve](docs/sdks/comments/README.md#retrieve) - Retrieve Comment

### [ticketing.tags](docs/sdks/tags/README.md)

* [list](docs/sdks/tags/README.md#list) - List Tags
* [retrieve](docs/sdks/tags/README.md#retrieve) - Retrieve Tag

### [ticketing.teams](docs/sdks/teams/README.md)

* [list](docs/sdks/teams/README.md#list) - List  Teams
* [retrieve](docs/sdks/teams/README.md#retrieve) - Retrieve Teams

### [ticketing.attachments](docs/sdks/panoraticketingattachments/README.md)

* [list](docs/sdks/panoraticketingattachments/README.md#list) - List  Attachments
* [create](docs/sdks/panoraticketingattachments/README.md#create) - Create Attachments
* [retrieve](docs/sdks/panoraticketingattachments/README.md#retrieve) - Retrieve Attachments

### [sync](docs/sdks/sync/README.md)

* [status](docs/sdks/sync/README.md#status) - Retrieve sync status of a certain vertical
* [resync](docs/sdks/sync/README.md#resync) - Resync common objects across a vertical


### [crm.companies](docs/sdks/companies/README.md)

* [list](docs/sdks/companies/README.md#list) - List Companies
* [create](docs/sdks/companies/README.md#create) - Create Companies
* [retrieve](docs/sdks/companies/README.md#retrieve) - Retrieve Companies

### [crm.contacts](docs/sdks/panoracontacts/README.md)

* [list](docs/sdks/panoracontacts/README.md#list) - List CRM Contacts
* [create](docs/sdks/panoracontacts/README.md#create) - Create Contacts
* [retrieve](docs/sdks/panoracontacts/README.md#retrieve) - Retrieve Contacts

### [crm.deals](docs/sdks/deals/README.md)

* [list](docs/sdks/deals/README.md#list) - List Deals
* [create](docs/sdks/deals/README.md#create) - Create Deals
* [retrieve](docs/sdks/deals/README.md#retrieve) - Retrieve Deals

### [crm.engagements](docs/sdks/engagements/README.md)

* [list](docs/sdks/engagements/README.md#list) - List Engagements
* [create](docs/sdks/engagements/README.md#create) - Create Engagements
* [retrieve](docs/sdks/engagements/README.md#retrieve) - Retrieve Engagements

### [crm.notes](docs/sdks/notes/README.md)

* [list](docs/sdks/notes/README.md#list) - List Notes
* [create](docs/sdks/notes/README.md#create) - Create Notes
* [retrieve](docs/sdks/notes/README.md#retrieve) - Retrieve Notes

### [crm.stages](docs/sdks/stages/README.md)

* [list](docs/sdks/stages/README.md#list) - List  Stages
* [retrieve](docs/sdks/stages/README.md#retrieve) - Retrieve Stages

### [crm.tasks](docs/sdks/tasks/README.md)

* [list](docs/sdks/tasks/README.md#list) - List Tasks
* [create](docs/sdks/tasks/README.md#create) - Create Tasks
* [retrieve](docs/sdks/tasks/README.md#retrieve) - Retrieve Tasks

### [crm.users](docs/sdks/panorausers/README.md)

* [list](docs/sdks/panorausers/README.md#list) - List  Users
* [retrieve](docs/sdks/panorausers/README.md#retrieve) - Retrieve Users

### [linkedUsers](docs/sdks/linkedusers/README.md)

* [create](docs/sdks/linkedusers/README.md#create) - Create Linked Users
* [list](docs/sdks/linkedusers/README.md#list) - List Linked Users

### [linkedUsers.batch](docs/sdks/batch/README.md)

* [importBatch](docs/sdks/batch/README.md#importbatch) - Add Batch Linked Users

### [linkedUsers.id](docs/sdks/id/README.md)

* [retrieve](docs/sdks/id/README.md#retrieve) - Retrieve Linked Users

### [linkedUsers.fromremoteid](docs/sdks/fromremoteid/README.md)

* [remoteId](docs/sdks/fromremoteid/README.md#remoteid) - Retrieve a Linked User From A Remote Id

### [projects](docs/sdks/projects/README.md)

* [getProjects](docs/sdks/projects/README.md#getprojects) - Retrieve projects
* [create](docs/sdks/projects/README.md#create) - Create a project

### [fieldMappings](docs/sdks/fieldmappings/README.md)

* [defineCustomField](docs/sdks/fieldmappings/README.md#definecustomfield) - Create Custom Field

### [fieldMappings.define](docs/sdks/define/README.md)

* [definitions](docs/sdks/define/README.md#definitions) - Define target Field

### [fieldMappings.map](docs/sdks/map/README.md)

* [map](docs/sdks/map/README.md#map) - Map Custom Field

### [events](docs/sdks/events/README.md)

* [getPanoraCoreEvents](docs/sdks/events/README.md#getpanoracoreevents) - List Events

### [passthrough](docs/sdks/passthrough/README.md)

* [request](docs/sdks/passthrough/README.md#request) - Make a passthrough request


### [hris.bankinfos](docs/sdks/bankinfos/README.md)

* [list](docs/sdks/bankinfos/README.md#list) - List Bank Info
* [retrieve](docs/sdks/bankinfos/README.md#retrieve) - Retrieve Bank Info

### [hris.benefits](docs/sdks/benefits/README.md)

* [list](docs/sdks/benefits/README.md#list) - List Benefits
* [retrieve](docs/sdks/benefits/README.md#retrieve) - Retrieve Benefit

### [hris.companies](docs/sdks/panoracompanies/README.md)

* [list](docs/sdks/panoracompanies/README.md#list) - List Companies
* [retrieve](docs/sdks/panoracompanies/README.md#retrieve) - Retrieve Company

### [hris.dependents](docs/sdks/dependents/README.md)

* [list](docs/sdks/dependents/README.md#list) - List Dependents
* [retrieve](docs/sdks/dependents/README.md#retrieve) - Retrieve Dependent

### [hris.employeepayrollruns](docs/sdks/employeepayrollruns/README.md)

* [list](docs/sdks/employeepayrollruns/README.md#list) - List Employee Payroll Runs
* [retrieve](docs/sdks/employeepayrollruns/README.md#retrieve) - Retrieve Employee Payroll Run

### [hris.employees](docs/sdks/employees/README.md)

* [list](docs/sdks/employees/README.md#list) - List Employees
* [create](docs/sdks/employees/README.md#create) - Create Employees
* [retrieve](docs/sdks/employees/README.md#retrieve) - Retrieve Employee

### [hris.employerbenefits](docs/sdks/employerbenefits/README.md)

* [list](docs/sdks/employerbenefits/README.md#list) - List Employer Benefits
* [retrieve](docs/sdks/employerbenefits/README.md#retrieve) - Retrieve Employer Benefit

### [hris.employments](docs/sdks/employments/README.md)

* [list](docs/sdks/employments/README.md#list) - List Employments
* [retrieve](docs/sdks/employments/README.md#retrieve) - Retrieve Employment

### [hris.groups](docs/sdks/groups/README.md)

* [list](docs/sdks/groups/README.md#list) - List Groups
* [retrieve](docs/sdks/groups/README.md#retrieve) - Retrieve Group

### [hris.locations](docs/sdks/locations/README.md)

* [list](docs/sdks/locations/README.md#list) - List Locations
* [retrieve](docs/sdks/locations/README.md#retrieve) - Retrieve Location

### [hris.paygroups](docs/sdks/paygroups/README.md)

* [list](docs/sdks/paygroups/README.md#list) - List Pay Groups
* [retrieve](docs/sdks/paygroups/README.md#retrieve) - Retrieve Pay Group

### [hris.payrollruns](docs/sdks/payrollruns/README.md)

* [list](docs/sdks/payrollruns/README.md#list) - List Payroll Runs
* [retrieve](docs/sdks/payrollruns/README.md#retrieve) - Retrieve Payroll Run

### [hris.timeoffs](docs/sdks/timeoffs/README.md)

* [list](docs/sdks/timeoffs/README.md#list) - List Time Offs
* [create](docs/sdks/timeoffs/README.md#create) - Create Timeoffs
* [retrieve](docs/sdks/timeoffs/README.md#retrieve) - Retrieve Time Off

### [hris.timeoffbalances](docs/sdks/timeoffbalances/README.md)

* [list](docs/sdks/timeoffbalances/README.md#list) - List  TimeoffBalances
* [retrieve](docs/sdks/timeoffbalances/README.md#retrieve) - Retrieve Time off Balances


### [marketingautomation.actions](docs/sdks/actions/README.md)

* [list](docs/sdks/actions/README.md#list) - List Actions
* [create](docs/sdks/actions/README.md#create) - Create Action
* [retrieve](docs/sdks/actions/README.md#retrieve) - Retrieve Actions

### [marketingautomation.automations](docs/sdks/automations/README.md)

* [list](docs/sdks/automations/README.md#list) - List Automations
* [create](docs/sdks/automations/README.md#create) - Create Automation
* [retrieve](docs/sdks/automations/README.md#retrieve) - Retrieve Automation

### [marketingautomation.campaigns](docs/sdks/campaigns/README.md)

* [list](docs/sdks/campaigns/README.md#list) - List Campaigns
* [create](docs/sdks/campaigns/README.md#create) - Create Campaign
* [retrieve](docs/sdks/campaigns/README.md#retrieve) - Retrieve Campaign

### [marketingautomation.contacts](docs/sdks/panoramarketingautomationcontacts/README.md)

* [list](docs/sdks/panoramarketingautomationcontacts/README.md#list) - List  Contacts
* [create](docs/sdks/panoramarketingautomationcontacts/README.md#create) - Create Contact
* [retrieve](docs/sdks/panoramarketingautomationcontacts/README.md#retrieve) - Retrieve Contacts

### [marketingautomation.emails](docs/sdks/emails/README.md)

* [list](docs/sdks/emails/README.md#list) - List Emails
* [retrieve](docs/sdks/emails/README.md#retrieve) - Retrieve Email

### [marketingautomation.events](docs/sdks/panoraevents/README.md)

* [list](docs/sdks/panoraevents/README.md#list) - List Events
* [retrieve](docs/sdks/panoraevents/README.md#retrieve) - Retrieve Event

### [marketingautomation.lists](docs/sdks/lists/README.md)

* [list](docs/sdks/lists/README.md#list) - List Lists
* [create](docs/sdks/lists/README.md#create) - Create Lists
* [retrieve](docs/sdks/lists/README.md#retrieve) - Retrieve List

### [marketingautomation.messages](docs/sdks/messages/README.md)

* [list](docs/sdks/messages/README.md#list) - List Messages
* [retrieve](docs/sdks/messages/README.md#retrieve) - Retrieve Messages

### [marketingautomation.templates](docs/sdks/templates/README.md)

* [list](docs/sdks/templates/README.md#list) - List Templates
* [create](docs/sdks/templates/README.md#create) - Create Template
* [retrieve](docs/sdks/templates/README.md#retrieve) - Retrieve Template

### [marketingautomation.users](docs/sdks/panoramarketingautomationusers/README.md)

* [list](docs/sdks/panoramarketingautomationusers/README.md#list) - List  Users
* [retrieve](docs/sdks/panoramarketingautomationusers/README.md#retrieve) - Retrieve Users


### [ats.activities](docs/sdks/activities/README.md)

* [list](docs/sdks/activities/README.md#list) - List  Activities
* [create](docs/sdks/activities/README.md#create) - Create Activities
* [retrieve](docs/sdks/activities/README.md#retrieve) - Retrieve Activities

### [ats.applications](docs/sdks/applications/README.md)

* [list](docs/sdks/applications/README.md#list) - List  Applications
* [create](docs/sdks/applications/README.md#create) - Create Applications
* [retrieve](docs/sdks/applications/README.md#retrieve) - Retrieve Applications

### [ats.attachments](docs/sdks/attachments/README.md)

* [list](docs/sdks/attachments/README.md#list) - List  Attachments
* [create](docs/sdks/attachments/README.md#create) - Create Attachments
* [retrieve](docs/sdks/attachments/README.md#retrieve) - Retrieve Attachments

### [ats.candidates](docs/sdks/candidates/README.md)

* [list](docs/sdks/candidates/README.md#list) - List  Candidates
* [create](docs/sdks/candidates/README.md#create) - Create Candidates
* [retrieve](docs/sdks/candidates/README.md#retrieve) - Retrieve Candidates

### [ats.departments](docs/sdks/departments/README.md)

* [list](docs/sdks/departments/README.md#list) - List  Departments
* [retrieve](docs/sdks/departments/README.md#retrieve) - Retrieve Departments

### [ats.interviews](docs/sdks/interviews/README.md)

* [list](docs/sdks/interviews/README.md#list) - List  Interviews
* [create](docs/sdks/interviews/README.md#create) - Create Interviews
* [retrieve](docs/sdks/interviews/README.md#retrieve) - Retrieve Interviews

### [ats.jobinterviewstages](docs/sdks/jobinterviewstages/README.md)

* [list](docs/sdks/jobinterviewstages/README.md#list) - List  JobInterviewStages
* [retrieve](docs/sdks/jobinterviewstages/README.md#retrieve) - Retrieve Job Interview Stages

### [ats.jobs](docs/sdks/jobs/README.md)

* [list](docs/sdks/jobs/README.md#list) - List  Jobs
* [retrieve](docs/sdks/jobs/README.md#retrieve) - Retrieve Jobs

### [ats.offers](docs/sdks/offers/README.md)

* [list](docs/sdks/offers/README.md#list) - List  Offers
* [retrieve](docs/sdks/offers/README.md#retrieve) - Retrieve Offers

### [ats.offices](docs/sdks/offices/README.md)

* [list](docs/sdks/offices/README.md#list) - List Offices
* [retrieve](docs/sdks/offices/README.md#retrieve) - Retrieve Offices

### [ats.rejectreasons](docs/sdks/rejectreasons/README.md)

* [list](docs/sdks/rejectreasons/README.md#list) - List  RejectReasons
* [retrieve](docs/sdks/rejectreasons/README.md#retrieve) - Retrieve Reject Reasons

### [ats.scorecards](docs/sdks/scorecards/README.md)

* [list](docs/sdks/scorecards/README.md#list) - List  ScoreCards
* [retrieve](docs/sdks/scorecards/README.md#retrieve) - Retrieve Score Cards

### [ats.tags](docs/sdks/panoratags/README.md)

* [list](docs/sdks/panoratags/README.md#list) - List  Tags
* [retrieve](docs/sdks/panoratags/README.md#retrieve) - Retrieve Tags

### [ats.users](docs/sdks/panoraatsusers/README.md)

* [list](docs/sdks/panoraatsusers/README.md#list) - List  Users
* [retrieve](docs/sdks/panoraatsusers/README.md#retrieve) - Retrieve Users

### [ats.eeocs](docs/sdks/eeocs/README.md)

* [list](docs/sdks/eeocs/README.md#list) - List  Eeocss
* [retrieve](docs/sdks/eeocs/README.md#retrieve) - Retrieve Eeocs


### [accounting.accounts](docs/sdks/panoraaccounts/README.md)

* [list](docs/sdks/panoraaccounts/README.md#list) - List  Accounts
* [create](docs/sdks/panoraaccounts/README.md#create) - Create Accounts
* [retrieve](docs/sdks/panoraaccounts/README.md#retrieve) - Retrieve Accounts

### [accounting.addresses](docs/sdks/addresses/README.md)

* [list](docs/sdks/addresses/README.md#list) - List  Addresss
* [retrieve](docs/sdks/addresses/README.md#retrieve) - Retrieve Addresses

### [accounting.attachments](docs/sdks/panoraattachments/README.md)

* [list](docs/sdks/panoraattachments/README.md#list) - List  Attachments
* [create](docs/sdks/panoraattachments/README.md#create) - Create Attachments
* [retrieve](docs/sdks/panoraattachments/README.md#retrieve) - Retrieve Attachments

### [accounting.balancesheets](docs/sdks/balancesheets/README.md)

* [list](docs/sdks/balancesheets/README.md#list) - List  BalanceSheets
* [retrieve](docs/sdks/balancesheets/README.md#retrieve) - Retrieve BalanceSheets

### [accounting.cashflowstatements](docs/sdks/cashflowstatements/README.md)

* [list](docs/sdks/cashflowstatements/README.md#list) - List  CashflowStatements
* [retrieve](docs/sdks/cashflowstatements/README.md#retrieve) - Retrieve Cashflow Statements

### [accounting.companyinfos](docs/sdks/companyinfos/README.md)

* [list](docs/sdks/companyinfos/README.md#list) - List  CompanyInfos
* [retrieve](docs/sdks/companyinfos/README.md#retrieve) - Retrieve Company Infos

### [accounting.contacts](docs/sdks/panoraaccountingcontacts/README.md)

* [list](docs/sdks/panoraaccountingcontacts/README.md#list) - List  Contacts
* [create](docs/sdks/panoraaccountingcontacts/README.md#create) - Create Contacts
* [retrieve](docs/sdks/panoraaccountingcontacts/README.md#retrieve) - Retrieve Contacts

### [accounting.creditnotes](docs/sdks/creditnotes/README.md)

* [list](docs/sdks/creditnotes/README.md#list) - List  CreditNotes
* [retrieve](docs/sdks/creditnotes/README.md#retrieve) - Retrieve Credit Notes

### [accounting.expenses](docs/sdks/expenses/README.md)

* [list](docs/sdks/expenses/README.md#list) - List  Expenses
* [create](docs/sdks/expenses/README.md#create) - Create Expenses
* [retrieve](docs/sdks/expenses/README.md#retrieve) - Retrieve Expenses

### [accounting.incomestatements](docs/sdks/incomestatements/README.md)

* [list](docs/sdks/incomestatements/README.md#list) - List  IncomeStatements
* [retrieve](docs/sdks/incomestatements/README.md#retrieve) - Retrieve Income Statements

### [accounting.invoices](docs/sdks/invoices/README.md)

* [list](docs/sdks/invoices/README.md#list) - List  Invoices
* [create](docs/sdks/invoices/README.md#create) - Create Invoices
* [retrieve](docs/sdks/invoices/README.md#retrieve) - Retrieve Invoices

### [accounting.items](docs/sdks/items/README.md)

* [list](docs/sdks/items/README.md#list) - List  Items
* [retrieve](docs/sdks/items/README.md#retrieve) - Retrieve Items

### [accounting.journalentries](docs/sdks/journalentries/README.md)

* [list](docs/sdks/journalentries/README.md#list) - List  JournalEntrys
* [create](docs/sdks/journalentries/README.md#create) - Create Journal Entries
* [retrieve](docs/sdks/journalentries/README.md#retrieve) - Retrieve Journal Entries

### [accounting.payments](docs/sdks/payments/README.md)

* [list](docs/sdks/payments/README.md#list) - List  Payments
* [create](docs/sdks/payments/README.md#create) - Create Payments
* [retrieve](docs/sdks/payments/README.md#retrieve) - Retrieve Payments

### [accounting.phonenumbers](docs/sdks/phonenumbers/README.md)

* [list](docs/sdks/phonenumbers/README.md#list) - List  PhoneNumbers
* [retrieve](docs/sdks/phonenumbers/README.md#retrieve) - Retrieve Phone Numbers

### [accounting.purchaseorders](docs/sdks/purchaseorders/README.md)

* [list](docs/sdks/purchaseorders/README.md#list) - List  PurchaseOrders
* [create](docs/sdks/purchaseorders/README.md#create) - Create Purchase Orders
* [retrieve](docs/sdks/purchaseorders/README.md#retrieve) - Retrieve Purchase Orders

### [accounting.taxrates](docs/sdks/taxrates/README.md)

* [list](docs/sdks/taxrates/README.md#list) - List  TaxRates
* [retrieve](docs/sdks/taxrates/README.md#retrieve) - Retrieve Tax Rates

### [accounting.trackingcategories](docs/sdks/trackingcategories/README.md)

* [list](docs/sdks/trackingcategories/README.md#list) - List  TrackingCategorys
* [retrieve](docs/sdks/trackingcategories/README.md#retrieve) - Retrieve Tracking Categories

### [accounting.transactions](docs/sdks/transactions/README.md)

* [list](docs/sdks/transactions/README.md#list) - List  Transactions
* [retrieve](docs/sdks/transactions/README.md#retrieve) - Retrieve Transactions

### [accounting.vendorcredits](docs/sdks/vendorcredits/README.md)

* [list](docs/sdks/vendorcredits/README.md#list) - List  VendorCredits
* [retrieve](docs/sdks/vendorcredits/README.md#retrieve) - Retrieve Vendor Credits


### [filestorage.drives](docs/sdks/drives/README.md)

* [list](docs/sdks/drives/README.md#list) - List Drives
* [retrieve](docs/sdks/drives/README.md#retrieve) - Retrieve Drive

### [filestorage.files](docs/sdks/files/README.md)

* [list](docs/sdks/files/README.md#list) - List  Files
* [create](docs/sdks/files/README.md#create) - Create Files
* [retrieve](docs/sdks/files/README.md#retrieve) - Retrieve Files

### [filestorage.folders](docs/sdks/folders/README.md)

* [list](docs/sdks/folders/README.md#list) - List  Folders
* [create](docs/sdks/folders/README.md#create) - Create Folders
* [retrieve](docs/sdks/folders/README.md#retrieve) - Retrieve Folders

### [filestorage.groups](docs/sdks/panoragroups/README.md)

* [list](docs/sdks/panoragroups/README.md#list) - List  Groups
* [retrieve](docs/sdks/panoragroups/README.md#retrieve) - Retrieve Groups

### [filestorage.users](docs/sdks/panorafilestorageusers/README.md)

* [list](docs/sdks/panorafilestorageusers/README.md#list) - List Users
* [retrieve](docs/sdks/panorafilestorageusers/README.md#retrieve) - Retrieve Users
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


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
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.panora.dev` | None |
| 1 | `https://api-sandbox.panora.dev` | None |
| 2 | `https://api-dev.panora.dev` | None |

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

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

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

| Name     | Type     | Scheme   |
| -------- | -------- | -------- |
| `apiKey` | apiKey   | API key  |

To authenticate with the API the `nullT` parameter must be set when initializing the SDK client instance. For example:
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
