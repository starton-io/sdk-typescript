# VaultKmsCredentialsDto


## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `baseUrl`                                          | *string*                                           | :heavy_check_mark:                                 | Vault base url                                     |
| `id`                                               | *string*                                           | :heavy_check_mark:                                 | Will be generated by starton                       |
| `loginPath`                                        | *string*                                           | :heavy_check_mark:                                 | URL that will give you a jwt to use the plugin     |
| `role`                                             | *string*                                           | :heavy_check_mark:                                 | Role from vault app-role                           |
| `rootPath`                                         | *string*                                           | :heavy_check_mark:                                 | URL that will be used for your plugin              |
| `selfSigned`                                       | *boolean*                                          | :heavy_check_mark:                                 | Check if the ssl certificate is self signed        |
| `timeout`                                          | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `tokenPath`                                        | *string*                                           | :heavy_check_mark:                                 | URL that will allow you to interact with the token |