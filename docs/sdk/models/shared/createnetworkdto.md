# CreateNetworkDto

## Example Usage

```typescript
import { CreateNetworkDto, ExplorerApiDtoType } from "@starton/sdk/sdk/models/shared";

let value: CreateNetworkDto = {
  blockchain: "<value>",
  chainId: 5699.65,
  confirmationBlocks: 3540.47,
  displayName: "Landen.Lueilwitz",
  explorerApi: {
    apiKey: "<value>",
    type: ExplorerApiDtoType.Etherscan,
    url: "https://wide-eyed-perspective.biz",
  },
  logo: "<value>",
  name: "<value>",
  symbol: "<value>",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `blockchain`                                                                                | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `chainId`                                                                                   | *number*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `confirmationBlocks`                                                                        | *number*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `decimal`                                                                                   | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `displayName`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `eip1159`                                                                                   | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `enableExternalWallet`                                                                      | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `enableListener`                                                                            | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `enableRelayer`                                                                             | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `explorerApi`                                                                               | [shared.ExplorerApiDto](../../../sdk/models/shared/explorerapidto.md)                       | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `explorerUrl`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `faucetUrl`                                                                                 | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `gasPriceRecommendation`                                                                    | [shared.GasPriceRecommendationDto](../../../sdk/models/shared/gaspricerecommendationdto.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `loadbalancerUrl`                                                                           | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `logo`                                                                                      | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `name`                                                                                      | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `symbol`                                                                                    | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `tenantHostnames`                                                                           | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `testnet`                                                                                   | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `verifyBlockIntegrity`                                                                      | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `verifyTxIntegrity`                                                                         | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | N/A                                                                                         |