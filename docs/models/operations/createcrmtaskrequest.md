# CreateCrmTaskRequest


## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `xConnectionToken`                                                               | *string*                                                                         | :heavy_check_mark:                                                               | The connection token                                                             |
| `remoteData`                                                                     | *boolean*                                                                        | :heavy_minus_sign:                                                               | Set to true to include data from the original Crm software.                      |
| `unifiedCrmTaskInput`                                                            | [components.UnifiedCrmTaskInput](../../models/components/unifiedcrmtaskinput.md) | :heavy_check_mark:                                                               | N/A                                                                              |