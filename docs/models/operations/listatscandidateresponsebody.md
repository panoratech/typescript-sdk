# ListAtsCandidateResponseBody

## Example Usage

```typescript
import { ListAtsCandidateResponseBody } from "@panora/sdk/models/operations";

let value: ListAtsCandidateResponseBody = {
  prevCursor: "<value>",
  nextCursor: "<value>",
  data: [
    {
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
      attachments: [
        "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      ],
      applications: [
        "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      ],
      tags: [
        "tag_1",
        "tag_2",
      ],
      urls: [
        {
          url: "mywebsite.com",
          urlType: "WEBSITE",
        },
      ],
      phoneNumbers: [
        {
          phoneNumber: "+33660688899",
          phoneType: "WORK",
        },
      ],
      emailAddresses: [
        {
          emailAddress: "joedoe@gmail.com",
          emailAddressType: "WORK",
        },
      ],
      fieldMappings: {
        "fav_dish": "broccoli",
        "fav_color": "red",
      },
      id: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
      remoteId: "id_1",
      remoteData: {
        "fav_dish": "broccoli",
        "fav_color": "red",
      },
      createdAt: new Date("2024-10-01T12:00:00Z"),
      modifiedAt: new Date("2024-10-01T12:00:00Z"),
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `prevCursor`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `nextCursor`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `data`                                                                                         | [components.UnifiedAtsCandidateOutput](../../models/components/unifiedatscandidateoutput.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |