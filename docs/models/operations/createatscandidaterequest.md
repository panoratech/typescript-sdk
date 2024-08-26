# CreateAtsCandidateRequest

## Example Usage

```typescript
import { EmailAddressType, PhoneType } from "@panora/sdk/models/components";
import { CreateAtsCandidateRequest } from "@panora/sdk/models/operations";

let value: CreateAtsCandidateRequest = {
    xConnectionToken: "<value>",
    remoteData: false,
    unifiedAtsCandidateInput: {
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
    },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `xConnectionToken`                                                                         | *string*                                                                                   | :heavy_check_mark:                                                                         | The connection token                                                                       |                                                                                            |
| `remoteData`                                                                               | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Set to true to include data from the original Ats software.                                | false                                                                                      |
| `unifiedAtsCandidateInput`                                                                 | [components.UnifiedAtsCandidateInput](../../models/components/unifiedatscandidateinput.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |