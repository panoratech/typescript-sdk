# ProjectResponse


## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `idProject`                                  | *string*                                     | :heavy_check_mark:                           | Unique identifier for the project            | 123e4567-e89b-12d3-a456-426614174000         |
| `name`                                       | *string*                                     | :heavy_check_mark:                           | Name of the project                          | My Project                                   |
| `syncMode`                                   | *string*                                     | :heavy_check_mark:                           | Synchronization mode of the project          | automatic                                    |
| `pullFrequency`                              | *number*                                     | :heavy_minus_sign:                           | Frequency of pulling data in seconds         | 3600                                         |
| `redirectUrl`                                | *string*                                     | :heavy_minus_sign:                           | Redirect URL for the project                 | https://example.com/redirect                 |
| `idUser`                                     | *string*                                     | :heavy_check_mark:                           | User ID associated with the project          | 123e4567-e89b-12d3-a456-426614174001         |
| `idConnectorSet`                             | *string*                                     | :heavy_check_mark:                           | Connector set ID associated with the project | 123e4567-e89b-12d3-a456-426614174002         |