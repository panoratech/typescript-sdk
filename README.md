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
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

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
    bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await panora.appControllerHello();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [Panora SDK](docs/sdks/panora/README.md)

* [appControllerHello](docs/sdks/panora/README.md#appcontrollerhello)
* [getHealth](docs/sdks/panora/README.md#gethealth)
* [getHelloProtected](docs/sdks/panora/README.md#gethelloprotected)

### [webhook](docs/sdks/webhook/README.md)

* [list](docs/sdks/webhook/README.md#list) - List webhooks 
* [create](docs/sdks/webhook/README.md#create) - Add webhook metadata
* [deleteWebhook](docs/sdks/webhook/README.md#deletewebhook) - Delete Webhook
* [updateWebhookStatus](docs/sdks/webhook/README.md#updatewebhookstatus) - Update webhook status
* [verifyEvent](docs/sdks/webhook/README.md#verifyevent) - Verify payload sgnature of the webhook


### [ticketing.tickets](docs/sdks/tickets/README.md)

* [list](docs/sdks/tickets/README.md#list) - List a batch of Tickets
* [create](docs/sdks/tickets/README.md#create) - Create a Ticket
* [retrieve](docs/sdks/tickets/README.md#retrieve) - Retrieve a Ticket

### [ticketing.users](docs/sdks/users/README.md)

* [list](docs/sdks/users/README.md#list) - List a batch of Users
* [retrieve](docs/sdks/users/README.md#retrieve) - Retrieve a User

### [ticketing.accounts](docs/sdks/accounts/README.md)

* [list](docs/sdks/accounts/README.md#list) - List a batch of Accounts
* [retrieve](docs/sdks/accounts/README.md#retrieve) - Retrieve an Account

### [ticketing.contacts](docs/sdks/contacts/README.md)

* [list](docs/sdks/contacts/README.md#list) - List all Contacts
* [retrieve](docs/sdks/contacts/README.md#retrieve) - Retrieve a Contact

### [ticketing.collections](docs/sdks/collections/README.md)

* [list](docs/sdks/collections/README.md#list) - List a batch of Collections
* [retrieve](docs/sdks/collections/README.md#retrieve) - Retrieve a Collection

### [ticketing.comments](docs/sdks/comments/README.md)

* [list](docs/sdks/comments/README.md#list) - List a batch of Comments
* [create](docs/sdks/comments/README.md#create) - Create a Comment
* [retrieve](docs/sdks/comments/README.md#retrieve) - Retrieve a Comment

### [ticketing.tags](docs/sdks/tags/README.md)

* [list](docs/sdks/tags/README.md#list) - List a batch of Tags
* [retrieve](docs/sdks/tags/README.md#retrieve) - Retrieve a Tag

### [ticketing.teams](docs/sdks/teams/README.md)

* [list](docs/sdks/teams/README.md#list) - List a batch of Teams
* [retrieve](docs/sdks/teams/README.md#retrieve) - Retrieve a Team

### [ticketing.attachments](docs/sdks/attachments/README.md)

* [list](docs/sdks/attachments/README.md#list) - List a batch of Attachments
* [create](docs/sdks/attachments/README.md#create) - Create a Attachment
* [retrieve](docs/sdks/attachments/README.md#retrieve) - Retrieve a Attachment

### [sync](docs/sdks/sync/README.md)

* [getSyncStatus](docs/sdks/sync/README.md#getsyncstatus) - Retrieve sync status of a certain vertical
* [resync](docs/sdks/sync/README.md#resync) - Resync common objects across a vertical


### [crm.companies](docs/sdks/companies/README.md)

* [list](docs/sdks/companies/README.md#list) - List a batch of Companies
* [create](docs/sdks/companies/README.md#create) - Create a Company
* [retrieve](docs/sdks/companies/README.md#retrieve) - Retrieve a Company

### [crm.contacts](docs/sdks/panoracontacts/README.md)

* [list](docs/sdks/panoracontacts/README.md#list) - List CRM Contacts
* [addCrmContact](docs/sdks/panoracontacts/README.md#addcrmcontact) - Create CRM Contact
* [getCrmContact](docs/sdks/panoracontacts/README.md#getcrmcontact) - Retrieve a CRM Contact

### [crm.deals](docs/sdks/deals/README.md)

* [list](docs/sdks/deals/README.md#list) - List a batch of Deals
* [create](docs/sdks/deals/README.md#create) - Create a Deal
* [retrieve](docs/sdks/deals/README.md#retrieve) - Retrieve a Deal

### [crm.engagements](docs/sdks/engagements/README.md)

* [list](docs/sdks/engagements/README.md#list) - List a batch of Engagements
* [create](docs/sdks/engagements/README.md#create) - Create a Engagement
* [retrieve](docs/sdks/engagements/README.md#retrieve) - Retrieve a Engagement

### [crm.notes](docs/sdks/notes/README.md)

* [list](docs/sdks/notes/README.md#list) - List a batch of Notes
* [create](docs/sdks/notes/README.md#create) - Create a Note
* [retrieve](docs/sdks/notes/README.md#retrieve) - Retrieve a Note

### [crm.stages](docs/sdks/stages/README.md)

* [list](docs/sdks/stages/README.md#list) - List a batch of Stages
* [retrieve](docs/sdks/stages/README.md#retrieve) - Retrieve a Stage

### [crm.tasks](docs/sdks/tasks/README.md)

* [list](docs/sdks/tasks/README.md#list) - List a batch of Tasks
* [create](docs/sdks/tasks/README.md#create) - Create a Task
* [retrieve](docs/sdks/tasks/README.md#retrieve) - Retrieve a Task

### [crm.users](docs/sdks/panorausers/README.md)

* [list](docs/sdks/panorausers/README.md#list) - List a batch of Users
* [retrieve](docs/sdks/panorausers/README.md#retrieve) - Retrieve a User

### [linkedUsers](docs/sdks/linkedusers/README.md)

* [create](docs/sdks/linkedusers/README.md#create) - Add Linked User
* [list](docs/sdks/linkedusers/README.md#list) - Retrieve Linked Users
* [importBatch](docs/sdks/linkedusers/README.md#importbatch) - Add Batch Linked Users
* [retrieve](docs/sdks/linkedusers/README.md#retrieve) - Retrieve a Linked User
* [remoteId](docs/sdks/linkedusers/README.md#remoteid) - Retrieve a Linked User From A Remote Id

### [fieldMappings](docs/sdks/fieldmappings/README.md)

* [define](docs/sdks/fieldmappings/README.md#define) - Define target Field
* [create](docs/sdks/fieldmappings/README.md#create) - Create Custom Field
* [map](docs/sdks/fieldmappings/README.md#map) - Map Custom Field

### [passthrough](docs/sdks/passthrough/README.md)

* [request](docs/sdks/passthrough/README.md#request) - Make a passthrough request


### [hris.bankinfo](docs/sdks/bankinfo/README.md)

* [list](docs/sdks/bankinfo/README.md#list) - List a batch of Bankinfos
* [retrieve](docs/sdks/bankinfo/README.md#retrieve) - Retrieve a Bankinfo

### [hris.benefit](docs/sdks/benefit/README.md)

* [list](docs/sdks/benefit/README.md#list) - List a batch of Benefits
* [retrieve](docs/sdks/benefit/README.md#retrieve) - Retrieve a Benefit

### [hris.company](docs/sdks/company/README.md)

* [list](docs/sdks/company/README.md#list) - List a batch of Companys

### [hris.dependent](docs/sdks/dependent/README.md)

* [list](docs/sdks/dependent/README.md#list) - List a batch of Dependents
* [retrieve](docs/sdks/dependent/README.md#retrieve) - Retrieve a Dependent

### [hris.employeepayrollrun](docs/sdks/employeepayrollrun/README.md)

* [list](docs/sdks/employeepayrollrun/README.md#list) - List a batch of EmployeePayrollRuns
* [retrieve](docs/sdks/employeepayrollrun/README.md#retrieve) - Retrieve a EmployeePayrollRun

### [hris.employee](docs/sdks/employee/README.md)

* [list](docs/sdks/employee/README.md#list) - List a batch of Employees
* [create](docs/sdks/employee/README.md#create) - Create an Employee
* [retrieve](docs/sdks/employee/README.md#retrieve) - Retrieve an Employee

### [hris.employerbenefit](docs/sdks/employerbenefit/README.md)

* [list](docs/sdks/employerbenefit/README.md#list) - List a batch of EmployerBenefits
* [retrieve](docs/sdks/employerbenefit/README.md#retrieve) - Retrieve a EmployerBenefit

### [hris.employment](docs/sdks/employment/README.md)

* [list](docs/sdks/employment/README.md#list) - List a batch of Employments
* [retrieve](docs/sdks/employment/README.md#retrieve) - Retrieve a Employment

### [hris.group](docs/sdks/group/README.md)

* [list](docs/sdks/group/README.md#list) - List a batch of Groups
* [retrieve](docs/sdks/group/README.md#retrieve) - Retrieve a Group

### [hris.location](docs/sdks/location/README.md)

* [list](docs/sdks/location/README.md#list) - List a batch of Locations
* [retrieve](docs/sdks/location/README.md#retrieve) - Retrieve a Location

### [hris.paygroup](docs/sdks/paygroup/README.md)

* [list](docs/sdks/paygroup/README.md#list) - List a batch of PayGroups
* [retrieve](docs/sdks/paygroup/README.md#retrieve) - Retrieve a PayGroup

### [hris.payrollrun](docs/sdks/payrollrun/README.md)

* [list](docs/sdks/payrollrun/README.md#list) - List a batch of PayrollRuns

### [hris.timeoff](docs/sdks/timeoff/README.md)

* [list](docs/sdks/timeoff/README.md#list) - List a batch of Timeoffs
* [create](docs/sdks/timeoff/README.md#create) - Create a Timeoff
* [retrieve](docs/sdks/timeoff/README.md#retrieve) - Retrieve a Timeoff

### [hris.timeoffbalance](docs/sdks/timeoffbalance/README.md)

* [list](docs/sdks/timeoffbalance/README.md#list) - List a batch of TimeoffBalances
* [retrieve](docs/sdks/timeoffbalance/README.md#retrieve) - Retrieve a TimeoffBalance


### [marketingautomation.action](docs/sdks/action/README.md)

* [list](docs/sdks/action/README.md#list) - List a batch of Actions
* [create](docs/sdks/action/README.md#create) - Create a Action
* [retrieve](docs/sdks/action/README.md#retrieve) - Retrieve a Action

### [marketingautomation.automation](docs/sdks/automation/README.md)

* [list](docs/sdks/automation/README.md#list) - List a batch of Automations
* [create](docs/sdks/automation/README.md#create) - Create a Automation
* [retrieve](docs/sdks/automation/README.md#retrieve) - Retrieve a Automation

### [marketingautomation.campaign](docs/sdks/campaign/README.md)

* [list](docs/sdks/campaign/README.md#list) - List a batch of Campaigns
* [create](docs/sdks/campaign/README.md#create) - Create a Campaign
* [retrieve](docs/sdks/campaign/README.md#retrieve) - Retrieve a Campaign

### [marketingautomation.contact](docs/sdks/contact/README.md)

* [getMarketingAutomationContacts](docs/sdks/contact/README.md#getmarketingautomationcontacts) - List a batch of Contacts
* [addMarketingAutomationContact](docs/sdks/contact/README.md#addmarketingautomationcontact) - Create a Contact
* [getMarketingAutomationContact](docs/sdks/contact/README.md#getmarketingautomationcontact) - Retrieve a Contact

### [marketingautomation.email](docs/sdks/email/README.md)

* [getEmails](docs/sdks/email/README.md#getemails) - List a batch of Emails
* [getEmail](docs/sdks/email/README.md#getemail) - Retrieve a Email

### [marketingautomation.event](docs/sdks/event/README.md)

* [getMarketingAutomationEvents](docs/sdks/event/README.md#getmarketingautomationevents) - List a batch of Events
* [getEvent](docs/sdks/event/README.md#getevent) - Retrieve a Event

### [marketingautomation.list](docs/sdks/list/README.md)

* [getLists](docs/sdks/list/README.md#getlists) - List a batch of Lists
* [addList](docs/sdks/list/README.md#addlist) - Create a List
* [getList](docs/sdks/list/README.md#getlist) - Retrieve a List

### [marketingautomation.message](docs/sdks/message/README.md)

* [getMessages](docs/sdks/message/README.md#getmessages) - List a batch of Messages
* [getMessage](docs/sdks/message/README.md#getmessage) - Retrieve a Message

### [marketingautomation.template](docs/sdks/template/README.md)

* [getTemplates](docs/sdks/template/README.md#gettemplates) - List a batch of Templates
* [addTemplate](docs/sdks/template/README.md#addtemplate) - Create a Template
* [getTemplate](docs/sdks/template/README.md#gettemplate) - Retrieve a Template

### [marketingautomation.user](docs/sdks/user/README.md)

* [getMarketingAutomationUsers](docs/sdks/user/README.md#getmarketingautomationusers) - List a batch of Users
* [getMarketingAutomationUser](docs/sdks/user/README.md#getmarketingautomationuser) - Retrieve a User


### [ats.activity](docs/sdks/activity/README.md)

* [list](docs/sdks/activity/README.md#list) - List a batch of Activities
* [create](docs/sdks/activity/README.md#create) - Create a Activity
* [retrieve](docs/sdks/activity/README.md#retrieve) - Retrieve a Activity

### [ats.application](docs/sdks/application/README.md)

* [list](docs/sdks/application/README.md#list) - List a batch of Applications
* [create](docs/sdks/application/README.md#create) - Create an Application
* [retrieve](docs/sdks/application/README.md#retrieve) - Retrieve an Application

### [ats.attachment](docs/sdks/attachment/README.md)

* [list](docs/sdks/attachment/README.md#list) - List a batch of Attachments
* [create](docs/sdks/attachment/README.md#create) - Create a Attachment
* [retrieve](docs/sdks/attachment/README.md#retrieve) - Retrieve a Attachment

### [ats.candidate](docs/sdks/candidate/README.md)

* [list](docs/sdks/candidate/README.md#list) - List a batch of Candidates
* [create](docs/sdks/candidate/README.md#create) - Create a Candidate
* [retrieve](docs/sdks/candidate/README.md#retrieve) - Retrieve a Candidate

### [ats.department](docs/sdks/department/README.md)

* [getDepartments](docs/sdks/department/README.md#getdepartments) - List a batch of Departments
* [getDepartment](docs/sdks/department/README.md#getdepartment) - Retrieve a Department

### [ats.interview](docs/sdks/interview/README.md)

* [list](docs/sdks/interview/README.md#list) - List a batch of Interviews
* [create](docs/sdks/interview/README.md#create) - Create a Interview
* [retrieve](docs/sdks/interview/README.md#retrieve) - Retrieve a Interview

### [ats.jobinterviewstage](docs/sdks/jobinterviewstage/README.md)

* [list](docs/sdks/jobinterviewstage/README.md#list) - List a batch of JobInterviewStages
* [retrieve](docs/sdks/jobinterviewstage/README.md#retrieve) - Retrieve a JobInterviewStage

### [ats.job](docs/sdks/job/README.md)

* [list](docs/sdks/job/README.md#list) - List a batch of Jobs
* [retrieve](docs/sdks/job/README.md#retrieve) - Retrieve a Job

### [ats.offer](docs/sdks/offer/README.md)

* [list](docs/sdks/offer/README.md#list) - List a batch of Offers
* [retrieve](docs/sdks/offer/README.md#retrieve) - Retrieve a Offer

### [ats.office](docs/sdks/office/README.md)

* [list](docs/sdks/office/README.md#list) - List a batch of Offices
* [retrieve](docs/sdks/office/README.md#retrieve) - Retrieve a Office

### [ats.rejectreason](docs/sdks/rejectreason/README.md)

* [getRejectReasons](docs/sdks/rejectreason/README.md#getrejectreasons) - List a batch of RejectReasons
* [getRejectReason](docs/sdks/rejectreason/README.md#getrejectreason) - Retrieve a RejectReason

### [ats.scorecard](docs/sdks/scorecard/README.md)

* [list](docs/sdks/scorecard/README.md#list) - List a batch of ScoreCards
* [retrieve](docs/sdks/scorecard/README.md#retrieve) - Retrieve a ScoreCard

### [ats.tag](docs/sdks/tag/README.md)

* [list](docs/sdks/tag/README.md#list) - List a batch of Tags
* [retrieve](docs/sdks/tag/README.md#retrieve) - Retrieve a Tag

### [ats.user](docs/sdks/panorauser/README.md)

* [list](docs/sdks/panorauser/README.md#list) - List a batch of Users
* [retrieve](docs/sdks/panorauser/README.md#retrieve) - Retrieve a User

### [ats.eeocs](docs/sdks/eeocs/README.md)

* [list](docs/sdks/eeocs/README.md#list) - List a batch of Eeocss
* [retrieve](docs/sdks/eeocs/README.md#retrieve) - Retrieve a Eeocs


### [accounting.account](docs/sdks/account/README.md)

* [list](docs/sdks/account/README.md#list) - List a batch of Accounts
* [create](docs/sdks/account/README.md#create) - Create a Account
* [retrieve](docs/sdks/account/README.md#retrieve) - Retrieve a Account

### [accounting.address](docs/sdks/address/README.md)

* [list](docs/sdks/address/README.md#list) - List a batch of Addresss
* [retrieve](docs/sdks/address/README.md#retrieve) - Retrieve a Address

### [accounting.attachment](docs/sdks/panoraattachment/README.md)

* [list](docs/sdks/panoraattachment/README.md#list) - List a batch of Attachments
* [create](docs/sdks/panoraattachment/README.md#create) - Create a Attachment
* [retrieve](docs/sdks/panoraattachment/README.md#retrieve) - Retrieve a Attachment

### [accounting.balancesheet](docs/sdks/balancesheet/README.md)

* [list](docs/sdks/balancesheet/README.md#list) - List a batch of BalanceSheets
* [retrieve](docs/sdks/balancesheet/README.md#retrieve) - Retrieve a BalanceSheet

### [accounting.cashflowstatement](docs/sdks/cashflowstatement/README.md)

* [list](docs/sdks/cashflowstatement/README.md#list) - List a batch of CashflowStatements
* [retrieve](docs/sdks/cashflowstatement/README.md#retrieve) - Retrieve a CashflowStatement

### [accounting.companyinfo](docs/sdks/companyinfo/README.md)

* [list](docs/sdks/companyinfo/README.md#list) - List a batch of CompanyInfos
* [retrieve](docs/sdks/companyinfo/README.md#retrieve) - Retrieve a CompanyInfo

### [accounting.contact](docs/sdks/panoracontact/README.md)

* [list](docs/sdks/panoracontact/README.md#list) - List a batch of Contacts
* [create](docs/sdks/panoracontact/README.md#create) - Create a Contact
* [retrieve](docs/sdks/panoracontact/README.md#retrieve) - Retrieve a Contact

### [accounting.creditnote](docs/sdks/creditnote/README.md)

* [list](docs/sdks/creditnote/README.md#list) - List a batch of CreditNotes
* [retrieve](docs/sdks/creditnote/README.md#retrieve) - Retrieve a CreditNote

### [accounting.expense](docs/sdks/expense/README.md)

* [list](docs/sdks/expense/README.md#list) - List a batch of Expenses
* [create](docs/sdks/expense/README.md#create) - Create a Expense
* [retrieve](docs/sdks/expense/README.md#retrieve) - Retrieve a Expense

### [accounting.incomestatement](docs/sdks/incomestatement/README.md)

* [list](docs/sdks/incomestatement/README.md#list) - List a batch of IncomeStatements
* [retrieve](docs/sdks/incomestatement/README.md#retrieve) - Retrieve a IncomeStatement

### [accounting.invoice](docs/sdks/invoice/README.md)

* [list](docs/sdks/invoice/README.md#list) - List a batch of Invoices
* [create](docs/sdks/invoice/README.md#create) - Create a Invoice
* [retrieve](docs/sdks/invoice/README.md#retrieve) - Retrieve a Invoice

### [accounting.item](docs/sdks/item/README.md)

* [list](docs/sdks/item/README.md#list) - List a batch of Items
* [retrieve](docs/sdks/item/README.md#retrieve) - Retrieve a Item

### [accounting.journalentry](docs/sdks/journalentry/README.md)

* [list](docs/sdks/journalentry/README.md#list) - List a batch of JournalEntrys
* [create](docs/sdks/journalentry/README.md#create) - Create a JournalEntry
* [retrieve](docs/sdks/journalentry/README.md#retrieve) - Retrieve a JournalEntry

### [accounting.payment](docs/sdks/payment/README.md)

* [list](docs/sdks/payment/README.md#list) - List a batch of Payments
* [create](docs/sdks/payment/README.md#create) - Create a Payment
* [retrieve](docs/sdks/payment/README.md#retrieve) - Retrieve a Payment

### [accounting.phonenumber](docs/sdks/phonenumber/README.md)

* [list](docs/sdks/phonenumber/README.md#list) - List a batch of PhoneNumbers
* [retrieve](docs/sdks/phonenumber/README.md#retrieve) - Retrieve a PhoneNumber

### [accounting.purchaseorder](docs/sdks/purchaseorder/README.md)

* [list](docs/sdks/purchaseorder/README.md#list) - List a batch of PurchaseOrders
* [create](docs/sdks/purchaseorder/README.md#create) - Create a PurchaseOrder
* [retrieve](docs/sdks/purchaseorder/README.md#retrieve) - Retrieve a PurchaseOrder

### [accounting.taxrate](docs/sdks/taxrate/README.md)

* [list](docs/sdks/taxrate/README.md#list) - List a batch of TaxRates
* [retrieve](docs/sdks/taxrate/README.md#retrieve) - Retrieve a TaxRate

### [accounting.trackingcategory](docs/sdks/trackingcategory/README.md)

* [list](docs/sdks/trackingcategory/README.md#list) - List a batch of TrackingCategorys
* [retrieve](docs/sdks/trackingcategory/README.md#retrieve) - Retrieve a TrackingCategory

### [accounting.transaction](docs/sdks/transaction/README.md)

* [list](docs/sdks/transaction/README.md#list) - List a batch of Transactions
* [retrieve](docs/sdks/transaction/README.md#retrieve) - Retrieve a Transaction

### [accounting.vendorcredit](docs/sdks/vendorcredit/README.md)

* [list](docs/sdks/vendorcredit/README.md#list) - List a batch of VendorCredits
* [retrieve](docs/sdks/vendorcredit/README.md#retrieve) - Retrieve a VendorCredit


### [filestorage.drives](docs/sdks/drives/README.md)

* [list](docs/sdks/drives/README.md#list) - List a batch of Drives
* [retrieve](docs/sdks/drives/README.md#retrieve) - Retrieve a Drive

### [filestorage.files](docs/sdks/files/README.md)

* [list](docs/sdks/files/README.md#list) - List a batch of Files
* [create](docs/sdks/files/README.md#create) - Create a File
* [retrieve](docs/sdks/files/README.md#retrieve) - Retrieve a File

### [filestorage.folders](docs/sdks/folders/README.md)

* [list](docs/sdks/folders/README.md#list) - List a batch of Folders
* [create](docs/sdks/folders/README.md#create) - Create a Folder
* [retrieve](docs/sdks/folders/README.md#retrieve) - Retrieve a Folder

### [filestorage.groups](docs/sdks/groups/README.md)

* [list](docs/sdks/groups/README.md#list) - List a batch of Groups
* [retrieve](docs/sdks/groups/README.md#retrieve) - Retrieve a Group

### [filestorage.users](docs/sdks/panorafilestorageusers/README.md)

* [getUsers](docs/sdks/panorafilestorageusers/README.md#getusers) - List a batch of Users
* [getUser](docs/sdks/panorafilestorageusers/README.md#getuser) - Retrieve a User
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
    bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    let result;
    try {
        result = await panora.appControllerHello();
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

```typescript
import { Panora } from "@panora/sdk";

const panora = new Panora({
    serverIdx: 1,
    bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await panora.appControllerHello();

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
    bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await panora.appControllerHello();

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

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name        | Type        | Scheme      |
| ----------- | ----------- | ----------- |
| `bearer`    | http        | HTTP Bearer |

To authenticate with the API the `bearer` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Panora } from "@panora/sdk";

const panora = new Panora({
    bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await panora.appControllerHello();

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
