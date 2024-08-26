# CreateProjectDto

## Example Usage

```typescript
import { CreateProjectDto } from "@panora/sdk/models/components";

let value: CreateProjectDto = {
    name: "Project Name",
    idOrganization: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
    idUser: "801f9ede-c698-4e66-a7fc-48d19eebaa4f",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `name`                               | *string*                             | :heavy_check_mark:                   | The name of the project              | Project Name                         |
| `idOrganization`                     | *string*                             | :heavy_minus_sign:                   | The organization ID                  | 801f9ede-c698-4e66-a7fc-48d19eebaa4f |
| `idUser`                             | *string*                             | :heavy_check_mark:                   | The user ID                          | 801f9ede-c698-4e66-a7fc-48d19eebaa4f |