# GetBalanceAddressRequest

## Example Usage

```typescript
import { GetBalanceAddressRequest } from "@starton/sdk/sdk/models/operations";

let value: GetBalanceAddressRequest = {
  address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
  network: "polygon-mainnet",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `address`                                        | *string*                                         | :heavy_check_mark:                               | Your address.                                    | 0xc2132d05d31c914a87c6611c10748aeb04b58e8f       |
| `network`                                        | *string*                                         | :heavy_check_mark:                               | The blockchain network you are checking data on. | polygon-mainnet                                  |