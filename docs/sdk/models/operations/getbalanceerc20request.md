# GetBalanceErc20Request

## Example Usage

```typescript
import { GetBalanceErc20Request } from "@starton/sdk/sdk/models/operations";

let value: GetBalanceErc20Request = {
  address: "0x24cd470f549b136ec93ccd42c087124cf3ea3233",
  contractAddress: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
  network: "polygon-mainnet",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `address`                                        | *string*                                         | :heavy_check_mark:                               | Address you want to check.                       | 0x24cd470f549b136ec93ccd42c087124cf3ea3233       |
| `contractAddress`                                | *string*                                         | :heavy_check_mark:                               | The contract address.                            | 0xc2132d05d31c914a87c6611c10748aeb04b58e8f       |
| `network`                                        | *string*                                         | :heavy_check_mark:                               | The blockchain network you are checking data on. | polygon-mainnet                                  |