# GetAllNetworkRequest

## Example Usage

```typescript
import { GetAllNetworkRequest } from "@starton/sdk/sdk/models/operations";

let value: GetAllNetworkRequest = {
  chainIds: [
    "<value>",
  ],
  limit: 20,
  origin: "<value>",
  page: 0,
  xPlatformHostname: "<value>",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `chainIds`                                                                      | *string*[]                                                                      | :heavy_check_mark:                                                              | N/A                                                                             |                                                                                 |
| `id`                                                                            | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |
| `limit`                                                                         | *number*                                                                        | :heavy_minus_sign:                                                              | Number of entities returned on each page. By default this number is set to 100. | 20                                                                              |
| `origin`                                                                        | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |                                                                                 |
| `page`                                                                          | *number*                                                                        | :heavy_minus_sign:                                                              | Number of returned page. By default the returned page is the first.             | 0                                                                               |
| `testnet`                                                                       | *boolean*                                                                       | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |
| `xPlatformHostname`                                                             | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |                                                                                 |