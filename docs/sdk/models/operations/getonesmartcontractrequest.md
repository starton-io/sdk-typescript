# GetOneSmartContractRequest

## Example Usage

```typescript
import { GetOneSmartContractRequest } from "@starton/sdk/sdk/models/operations";

let value: GetOneSmartContractRequest = {
    address: "0x820f8728E32519b9C91B2406BF48AF80711aFecD",
    includeAbi: true,
    includeCompilationDetails: true,
    network: "polygon-mumbai",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `address`                                  | *string*                                   | :heavy_check_mark:                         | Smart contract address.                    | 0x820f8728E32519b9C91B2406BF48AF80711aFecD |
| `includeAbi`                               | *boolean*                                  | :heavy_minus_sign:                         | N/A                                        | true                                       |
| `includeCompilationDetails`                | *boolean*                                  | :heavy_minus_sign:                         | N/A                                        | true                                       |
| `network`                                  | *string*                                   | :heavy_check_mark:                         | EVM starton supported network.             | polygon-mumbai                             |