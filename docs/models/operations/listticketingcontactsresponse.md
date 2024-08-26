# ListTicketingContactsResponse

## Example Usage

```typescript
import { ListTicketingContactsResponse } from "@panora/sdk/models/operations";

let value: ListTicketingContactsResponse = {
    result: {
        prevCursor: "<value>",
        nextCursor: "<value>",
        data: [
            {
                name: "Joe",
                emailAddress: "joedoe@acme.org",
                phoneNumber: "+33 6 50 11 11 10",
                details: "Contact Details",
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
            },
        ],
    },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [operations.ListTicketingContactsResponseBody](../../models/operations/listticketingcontactsresponsebody.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |