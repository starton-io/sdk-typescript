# GetAllPinRequest


## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `cid`                                                                           | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `includeDirectoryContent`                                                       | *boolean*                                                                       | :heavy_minus_sign:                                                              | N/A                                                                             |
| `limit`                                                                         | *number*                                                                        | :heavy_minus_sign:                                                              | Number of entities returned on each page. By default this number is set to 100. |
| `name`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `page`                                                                          | *number*                                                                        | :heavy_minus_sign:                                                              | Number of returned page. By default the returned page is the first.             |
| `status`                                                                        | [operations.Status](../../../sdk/models/operations/status.md)                   | :heavy_minus_sign:                                                              | N/A                                                                             |