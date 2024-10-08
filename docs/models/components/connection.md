# Connection

## Example Usage

```typescript
import { Connection, TokenType } from "@panora/sdk/models/components";

let value: Connection = {
  idConnection: "123e4567-e89b-12d3-a456-426614174000",
  status: "active",
  providerSlug: "hubspot",
  vertical: "crm",
  accountUrl: "https://example.com/account",
  tokenType: TokenType.Oauth2,
  accessToken: "access_token_example",
  refreshToken: "refresh_token_example",
  expirationTimestamp: new Date("2024-10-01T12:00:00Z"),
  createdAt: new Date("2024-10-01T12:00:00Z"),
  connectionToken: "123e4567-e89b-12d3-a456-426614174000",
  idProject: "123e4567-e89b-12d3-a456-426614174001",
  idLinkedUser: "123e4567-e89b-12d3-a456-426614174002",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `idConnection`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the connection                                                          | 123e4567-e89b-12d3-a456-426614174000                                                          |
| `status`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Status of the connection                                                                      | active                                                                                        |
| `providerSlug`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | Slug for the provider                                                                         | hubspot                                                                                       |
| `vertical`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Vertical category of the connection                                                           | crm                                                                                           |
| `accountUrl`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | URL of the account                                                                            | https://example.com/account                                                                   |
| `tokenType`                                                                                   | [components.TokenType](../../models/components/tokentype.md)                                  | :heavy_check_mark:                                                                            | Strategy type                                                                                 | oauth2                                                                                        |
| `accessToken`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Access token for the connection                                                               | access_token_example                                                                          |
| `refreshToken`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | Refresh token for the connection                                                              | refresh_token_example                                                                         |
| `expirationTimestamp`                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Expiration timestamp of the access token                                                      | 2024-10-01T12:00:00Z                                                                          |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp when the connection was created                                                     | 2024-10-01T12:00:00Z                                                                          |
| `connectionToken`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | UUID Token for the connection                                                                 | 123e4567-e89b-12d3-a456-426614174000                                                          |
| `idProject`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Project ID associated with the connection                                                     | 123e4567-e89b-12d3-a456-426614174001                                                          |
| `idLinkedUser`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | Linked user ID associated with the connection                                                 | 123e4567-e89b-12d3-a456-426614174002                                                          |