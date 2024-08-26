# UnifiedAtsCandidateOutput

## Example Usage

```typescript
import { EmailAddressType, PhoneType, UnifiedAtsCandidateOutput } from "@panora/sdk/models/components";

let value: UnifiedAtsCandidateOutput = {
    firstName: "Joe",
    lastName: "Doe",
    company: "Acme",
    title: "Analyst",
    locations: "New York",
    isPrivate: false,
    emailReachable: true,
    remoteCreatedAt: new Date("2024-10-01T12:00:00Z"),
    remoteModifiedAt: new Date("2024-10-01T12:00:00Z"),
    lastInteractionAt: new Date("2024-10-01T12:00:00Z"),
    attachments: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
    applications: ["801f9ede-c698-4e66-a7fc-48d19eebaa4f"],
    tags: ["tag_1", "tag_2"],
    urls: [
        {
            url: "mywebsite.com",
            urlType: "WEBSITE",
        },
    ],
    phoneNumbers: [
        {
            phoneNumber: "+33660688899",
            phoneType: PhoneType.Work,
        },
    ],
    emailAddresses: [
        {
            emailAddress: "joedoe@gmail.com",
            emailAddressType: EmailAddressType.Work,
        },
    ],
    fieldMappings: {
        fav_dish: "broccoli",
        fav_color: "red",
    },
    id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    remoteId: "id_1",
    remoteData: {
        fav_dish: "broccoli",
        fav_color: "red",
    },
    createdAt: new Date("2024-10-01T12:00:00Z"),
    modifiedAt: new Date("2024-10-01T12:00:00Z"),
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `firstName`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The first name of the candidate                                                                       | Joe                                                                                                   |
| `lastName`                                                                                            | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The last name of the candidate                                                                        | Doe                                                                                                   |
| `company`                                                                                             | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The company of the candidate                                                                          | Acme                                                                                                  |
| `title`                                                                                               | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The title of the candidate                                                                            | Analyst                                                                                               |
| `locations`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The locations of the candidate                                                                        | New York                                                                                              |
| `isPrivate`                                                                                           | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | Whether the candidate is private                                                                      | false                                                                                                 |
| `emailReachable`                                                                                      | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | Whether the candidate is reachable by email                                                           | true                                                                                                  |
| `remoteCreatedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_minus_sign:                                                                                    | The remote creation date of the candidate                                                             | 2024-10-01T12:00:00Z                                                                                  |
| `remoteModifiedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_minus_sign:                                                                                    | The remote modification date of the candidate                                                         | 2024-10-01T12:00:00Z                                                                                  |
| `lastInteractionAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_minus_sign:                                                                                    | The last interaction date with the candidate                                                          | 2024-10-01T12:00:00Z                                                                                  |
| `attachments`                                                                                         | *components.UnifiedAtsCandidateOutputAttachments*[]                                                   | :heavy_minus_sign:                                                                                    | The attachments UUIDs of the candidate                                                                | [<br/>"801f9ede-c698-4e66-a7fc-48d19eebaa4f"<br/>]                                                    |
| `applications`                                                                                        | *components.Applications*[]                                                                           | :heavy_minus_sign:                                                                                    | The applications UUIDs of the candidate                                                               | [<br/>"801f9ede-c698-4e66-a7fc-48d19eebaa4f"<br/>]                                                    |
| `tags`                                                                                                | *components.UnifiedAtsCandidateOutputTags*[]                                                          | :heavy_minus_sign:                                                                                    | The tags of the candidate                                                                             | [<br/>"tag_1",<br/>"tag_2"<br/>]                                                                      |
| `urls`                                                                                                | [components.Url](../../models/components/url.md)[]                                                    | :heavy_minus_sign:                                                                                    | The urls of the candidate, possible values for Url type are WEBSITE, BLOG, LINKEDIN, GITHUB, or OTHER | [<br/>{<br/>"url": "mywebsite.com",<br/>"url_type": "WEBSITE"<br/>}<br/>]                             |
| `phoneNumbers`                                                                                        | [components.Phone](../../models/components/phone.md)[]                                                | :heavy_minus_sign:                                                                                    | The phone numbers of the candidate                                                                    | [<br/>{<br/>"phone_number": "+33660688899",<br/>"phone_type": "WORK"<br/>}<br/>]                      |
| `emailAddresses`                                                                                      | [components.Email](../../models/components/email.md)[]                                                | :heavy_minus_sign:                                                                                    | The email addresses of the candidate                                                                  | [<br/>{<br/>"email_address": "joedoe@gmail.com",<br/>"email_address_type": "WORK"<br/>}<br/>]         |
| `fieldMappings`                                                                                       | Record<string, *any*>                                                                                 | :heavy_minus_sign:                                                                                    | The custom field mappings of the object between the remote 3rd party & Panora                         | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                            |
| `id`                                                                                                  | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The UUID of the candidate                                                                             | 801f9ede-c698-4e66-a7fc-48d19eebaa4f                                                                  |
| `remoteId`                                                                                            | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The id of the candidate in the context of the 3rd Party                                               | id_1                                                                                                  |
| `remoteData`                                                                                          | Record<string, *any*>                                                                                 | :heavy_minus_sign:                                                                                    | The remote data of the candidate in the context of the 3rd Party                                      | {<br/>"fav_dish": "broccoli",<br/>"fav_color": "red"<br/>}                                            |
| `createdAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_minus_sign:                                                                                    | The created date of the object                                                                        | 2024-10-01T12:00:00Z                                                                                  |
| `modifiedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_minus_sign:                                                                                    | The modified date of the object                                                                       | 2024-10-01T12:00:00Z                                                                                  |