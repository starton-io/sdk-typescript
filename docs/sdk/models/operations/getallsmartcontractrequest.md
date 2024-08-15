# GetAllSmartContractRequest

## Example Usage

```typescript
import { GetAllSmartContractRequest } from "@starton/sdk/sdk/models/operations";

let value: GetAllSmartContractRequest = {
    address: "0x820f8728E32519b9C91B2406BF48AF80711aFecD",
    includeAbi: true,
    includeCompilationDetails: true,
    limit: 20,
    network: "polygon-mumbai",
    page: 0,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `address`                                                                       | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             | 0x820f8728E32519b9C91B2406BF48AF80711aFecD                                      |
| `includeAbi`                                                                    | *boolean*                                                                       | :heavy_minus_sign:                                                              | N/A                                                                             | true                                                                            |
| `includeCompilationDetails`                                                     | *boolean*                                                                       | :heavy_minus_sign:                                                              | N/A                                                                             | true                                                                            |
| `limit`                                                                         | *number*                                                                        | :heavy_minus_sign:                                                              | Number of entities returned on each page. By default this number is set to 100. | 20                                                                              |
| `network`                                                                       | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             | polygon-mumbai                                                                  |
| `page`                                                                          | *number*                                                                        | :heavy_minus_sign:                                                              | Number of returned page. By default the returned page is the first.             | 0                                                                               |