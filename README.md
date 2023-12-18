# PanoraSDK Typescript SDK 1.0.0
The Typescript SDK for PanoraSDK.
- API version: 1.0.0
- SDK version: 1.0.0
## Table of Contents
- [About the API](#requirements)
- [Installation](#installation)
- [Authentication](#authentication)
    - [Access Token](#access-token)
- [API Endpoint Services](#api-endpoint-services)
- [API Models](#api-models)
- [Sample Usage](#sample-usage)
- [PanoraSDK Services](#panorasdk-services)
- [License](#license)
## About the API
The Panora API description
## Installation
```sh
npm install panorasdk  
```
## Authentication
To see whether an endpoint needs a specific type of authentication check the endpoint's documentation.
### Access Token
The PanoraSDK API uses access tokens as a form of authentication. You can set the access token when initializing the SDK through the constructor:
```
const sdk = new PanoraSDK('YOUR_ACCESS_TOKEN')
```
Or through the `setAccessToken` method:
```
const sdk = new PanoraSDK()
sdk.setAccessToken('YOUR_ACCESS_TOKEN')
```
You can also set it for each service individually:
```
const sdk = new PanoraSDK()
sdk.main.setAccessToken('YOUR_ACCESS_TOKEN')
```
## Sample Usage
Here is a simple program demonstrating usage of this SDK. It can also be found in the `examples/src/index.ts` file in this directory.

When running the sample make sure to use `npm install` to install all the dependencies.

```Typescript
import { PanoraSDK } from 'panorasdk';


const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.main
    .appControllerGetHello();
  console.log(result);
})();
 

```
# PanoraSDK Services
A list of all services and services methods.
- Services

    - [Main](#main)

    - [Auth](#auth)

    - [Connections](#connections)

    - [Webhook](#webhook)

    - [LinkedUsers](#linkedusers)

    - [Organisations](#organisations)

    - [Projects](#projects)

    - [FieldMapping](#fieldmapping)

    - [Events](#events)

    - [MagicLink](#magiclink)

    - [Passthrough](#passthrough)

    - [CrmContact](#crmcontact)
- [All Methods](#all-methods)


## Main

| Method    | Description|
| :-------- | :----------|
| [appControllerGetHello](#appcontrollergethello) |  |


## Auth

| Method    | Description|
| :-------- | :----------|
| [signUp](#signup) | Register |
| [signIn](#signin) | Log In |
| [getUsers](#getusers) | Get users |
| [getApiKeys](#getapikeys) | Retrieve API Keys |
| [generateApiKey](#generateapikey) | Create API Key |


## Connections

| Method    | Description|
| :-------- | :----------|
| [handleOAuthCallback](#handleoauthcallback) | Capture oAuth Callback |
| [getConnections](#getconnections) | Retrieve Connections |


## Webhook

| Method    | Description|
| :-------- | :----------|
| [createWebhookMetadata](#createwebhookmetadata) | Add webhook metadata |
| [getWebhooksMetadata](#getwebhooksmetadata) | Retrieve webhooks metadata  |
| [updateWebhookStatus](#updatewebhookstatus) | Update webhook status |


## LinkedUsers

| Method    | Description|
| :-------- | :----------|
| [addLinkedUser](#addlinkeduser) | Add Linked User |
| [getLinkedUsers](#getlinkedusers) | Retrieve Linked Users |
| [getLinkedUser](#getlinkeduser) | Retrieve a Linked User |


## Organisations

| Method    | Description|
| :-------- | :----------|
| [getOrganisations](#getorganisations) | Retrieve Organisations |
| [createOrganisation](#createorganisation) | Create an Organisation |


## Projects

| Method    | Description|
| :-------- | :----------|
| [getProjects](#getprojects) | Retrieve projects |
| [createProject](#createproject) | Create a project |


## FieldMapping

| Method    | Description|
| :-------- | :----------|
| [getFieldMappingsEntities](#getfieldmappingsentities) | Retrieve field mapping entities |
| [getFieldMappings](#getfieldmappings) | Retrieve field mappings |
| [getFieldMappingValues](#getfieldmappingvalues) | Retrieve field mappings values |
| [defineTargetField](#definetargetfield) | Define target Field |
| [mapField](#mapfield) | Map Custom Field |
| [getCustomProviderProperties](#getcustomproviderproperties) | Retrieve Custom Properties |


## Events

| Method    | Description|
| :-------- | :----------|
| [getEvents](#getevents) | Retrieve Events |


## MagicLink

| Method    | Description|
| :-------- | :----------|
| [createMagicLink](#createmagiclink) | Create a Magic Link |
| [getMagicLinks](#getmagiclinks) | Retrieve Magic Links |
| [getMagicLink](#getmagiclink) | Retrieve a Magic Link |


## Passthrough

| Method    | Description|
| :-------- | :----------|
| [passthroughRequest](#passthroughrequest) | Make a passthrough request |


## CrmContact

| Method    | Description|
| :-------- | :----------|
| [addContact](#addcontact) | Create CRM Contact |
| [getContacts](#getcontacts) | Retrieve a batch of CRM Contacts |
| [updateContact](#updatecontact) | Update a CRM Contact |
| [getContact](#getcontact) | Retrieve a CRM Contact |
| [addContacts](#addcontacts) | Add a batch of CRM Contacts |




## All Methods


### **appControllerGetHello**

- HTTP Method: GET
- Endpoint: /




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.main.appControllerGetHello();
  console.log(result);
})();

```


### **signUp**
Register
- HTTP Method: POST
- Endpoint: /auth/register

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = {
    email: 'email',
    first_name: 'first_name',
    last_name: 'last_name',
    password_hash: 'password_hash',
  };
  const result = await sdk.auth.signUp(input);
  console.log(result);
})();

```

### **signIn**
Log In
- HTTP Method: POST
- Endpoint: /auth/login

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = { email: 'email', id_user: 'id_user', password_hash: 'password_hash' };
  const result = await sdk.auth.signIn(input);
  console.log(result);
})();

```

### **getUsers**
Get users
- HTTP Method: GET
- Endpoint: /auth/users




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.auth.getUsers();
  console.log(result);
})();

```

### **getApiKeys**
Retrieve API Keys
- HTTP Method: GET
- Endpoint: /auth/api-keys




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.auth.getApiKeys();
  console.log(result);
})();

```

### **generateApiKey**
Create API Key
- HTTP Method: POST
- Endpoint: /auth/generate-apikey

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = { keyName: 'keyName', projectId: 'projectId', userId: 'userId' };
  const result = await sdk.auth.generateApiKey(input);
  console.log(result);
})();

```


### **handleOAuthCallback**
Capture oAuth Callback
- HTTP Method: GET
- Endpoint: /connections/oauth/callback

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| state | string |  |
| code | string |  |
| location | string |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.connections.handleOauthCallback('state', 'code', 'location');
  console.log(result);
})();

```

### **getConnections**
Retrieve Connections
- HTTP Method: GET
- Endpoint: /connections




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.connections.getConnections();
  console.log(result);
})();

```


### **createWebhookMetadata**
Add webhook metadata
- HTTP Method: POST
- Endpoint: /webhook

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = {
    description: 'description',
    id_project: 'id_project',
    scope: 'scope',
    url: 'url',
  };
  const result = await sdk.webhook.createWebhookMetadata(input);
  console.log(result);
})();

```

### **getWebhooksMetadata**
Retrieve webhooks metadata 
- HTTP Method: GET
- Endpoint: /webhook




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.webhook.getWebhooksMetadata();
  console.log(result);
})();

```

### **updateWebhookStatus**
Update webhook status
- HTTP Method: PUT
- Endpoint: /webhook/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.webhook.updateWebhookStatus('id');
  console.log(result);
})();

```


### **addLinkedUser**
Add Linked User
- HTTP Method: POST
- Endpoint: /linked-users/create

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = {
    alias: 'alias',
    id_project: 'id_project',
    linked_user_origin_id: 'linked_user_origin_id',
  };
  const result = await sdk.linkedUsers.addLinkedUser(input);
  console.log(result);
})();

```

### **getLinkedUsers**
Retrieve Linked Users
- HTTP Method: GET
- Endpoint: /linked-users




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.linkedUsers.getLinkedUsers();
  console.log(result);
})();

```

### **getLinkedUser**
Retrieve a Linked User
- HTTP Method: GET
- Endpoint: /linked-users/single

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.linkedUsers.getLinkedUser('id');
  console.log(result);
})();

```


### **getOrganisations**
Retrieve Organisations
- HTTP Method: GET
- Endpoint: /organisations




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.organisations.getOrganisations();
  console.log(result);
})();

```

### **createOrganisation**
Create an Organisation
- HTTP Method: POST
- Endpoint: /organisations/create

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = { name: 'name', stripe_customer_id: 'stripe_customer_id' };
  const result = await sdk.organisations.createOrganisation(input);
  console.log(result);
})();

```


### **getProjects**
Retrieve projects
- HTTP Method: GET
- Endpoint: /projects




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.projects.getProjects();
  console.log(result);
})();

```

### **createProject**
Create a project
- HTTP Method: POST
- Endpoint: /projects/create

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = { id_organization: 'id_organization', name: 'name' };
  const result = await sdk.projects.createProject(input);
  console.log(result);
})();

```


### **getFieldMappingsEntities**
Retrieve field mapping entities
- HTTP Method: GET
- Endpoint: /field-mapping/entities




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.fieldMapping.getFieldMappingsEntities();
  console.log(result);
})();

```

### **getFieldMappings**
Retrieve field mappings
- HTTP Method: GET
- Endpoint: /field-mapping/attribute




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.fieldMapping.getFieldMappings();
  console.log(result);
})();

```

### **getFieldMappingValues**
Retrieve field mappings values
- HTTP Method: GET
- Endpoint: /field-mapping/value




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.fieldMapping.getFieldMappingValues();
  console.log(result);
})();

```

### **defineTargetField**
Define target Field
- HTTP Method: POST
- Endpoint: /field-mapping/define

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = {
    data_type: 'data_type',
    description: 'description',
    name: 'name',
    object_type_owner: 'object_type_owner',
  };
  const result = await sdk.fieldMapping.defineTargetField(input);
  console.log(result);
})();

```

### **mapField**
Map Custom Field
- HTTP Method: POST
- Endpoint: /field-mapping/map

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = {
    attributeId: 'attributeId',
    linked_user_id: 'linked_user_id',
    source_custom_field_id: 'source_custom_field_id',
    source_provider: 'source_provider',
  };
  const result = await sdk.fieldMapping.mapField(input);
  console.log(result);
})();

```

### **getCustomProviderProperties**
Retrieve Custom Properties
- HTTP Method: GET
- Endpoint: /field-mapping/properties

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| linkedUserId | string |  |
| providerId | string |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.fieldMapping.getCustomProviderProperties('linkedUserId', 'providerId');
  console.log(result);
})();

```


### **getEvents**
Retrieve Events
- HTTP Method: GET
- Endpoint: /events




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.events.getEvents();
  console.log(result);
})();

```


### **createMagicLink**
Create a Magic Link
- HTTP Method: POST
- Endpoint: /magic-link/create

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = {
    alias: 'alias',
    email: 'email',
    id_project: 'id_project',
    linked_user_origin_id: 'linked_user_origin_id',
  };
  const result = await sdk.magicLink.createMagicLink(input);
  console.log(result);
})();

```

### **getMagicLinks**
Retrieve Magic Links
- HTTP Method: GET
- Endpoint: /magic-link




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.magicLink.getMagicLinks();
  console.log(result);
})();

```

### **getMagicLink**
Retrieve a Magic Link
- HTTP Method: GET
- Endpoint: /magic-link/single

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.magicLink.getMagicLink('id');
  console.log(result);
})();

```


### **passthroughRequest**
Make a passthrough request
- HTTP Method: POST
- Endpoint: /passthrough

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| integrationId | string |  |
| linkedUserId | string |  |
| input | object | Request body. |



**Return Type**

PassThroughResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = { data: {}, headers_: {}, method: 'PATCH', path: 'path' };
  const result = await sdk.passthrough.passthroughRequest(input, 'integrationId', 'linkedUserId');
  console.log(result);
})();

```


### **addContact**
Create CRM Contact
- HTTP Method: POST
- Endpoint: /crm/contact

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| integrationId | string |  |
| linkedUserId | string |  |
| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean |  |


**Return Type**

AddContactResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = {
    email_addresses: [],
    field_mappings: {},
    first_name: 'first_name',
    last_name: 'last_name',
    phone_numbers: [],
  };
  const result = await sdk.crmContact.addContact(input, 'integrationId', 'linkedUserId', {
    remoteData: true,
  });
  console.log(result);
})();

```

### **getContacts**
Retrieve a batch of CRM Contacts
- HTTP Method: GET
- Endpoint: /crm/contact

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| integrationId | string |  |
| linkedUserId | string |  |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean |  |


**Return Type**

GetContactsResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmContact.getContacts('integrationId', 'linkedUserId', {
    remoteData: true,
  });
  console.log(result);
})();

```

### **updateContact**
Update a CRM Contact
- HTTP Method: PATCH
- Endpoint: /crm/contact

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmContact.updateContact('id');
  console.log(result);
})();

```

### **getContact**
Retrieve a CRM Contact
- HTTP Method: GET
- Endpoint: /crm/contact/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string |  |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean |  |


**Return Type**

GetContactResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmContact.getContact('id', { remoteData: true });
  console.log(result);
})();

```

### **addContacts**
Add a batch of CRM Contacts
- HTTP Method: POST
- Endpoint: /crm/contact/batch

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| integrationId | string |  |
| linkedUserId | string |  |
| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean |  |


**Return Type**

AddContactsResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = [{}, {}];
  const result = await sdk.crmContact.addContacts(input, 'integrationId', 'linkedUserId', {
    remoteData: true,
  });
  console.log(result);
})();

```




## License
License: MIT. See license in LICENSE.

