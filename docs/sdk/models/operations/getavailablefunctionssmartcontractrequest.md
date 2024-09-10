# GetAvailableFunctionsSmartContractRequest

## Example Usage

```typescript
import { GetAvailableFunctionsSmartContractRequest } from "@starton/sdk/sdk/models/operations";

let value: GetAvailableFunctionsSmartContractRequest = {
  address: "0x820f8728E32519b9C91B2406BF48AF80711aFecD",
  network: "polygon-mumbai",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `address`                                  | *string*                                   | :heavy_check_mark:                         | Smart contract address.                    | 0x820f8728E32519b9C91B2406BF48AF80711aFecD |
| `network`                                  | *string*                                   | :heavy_check_mark:                         | EVM starton supported network.             | polygon-mumbai                             |