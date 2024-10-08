# Network

## Example Usage

```typescript
import { Network } from "@starton/sdk/sdk/models/shared";

let value: Network = {
  blockchain: "<value>",
  browserExtensionService: false,
  chainId: 3267.01,
  confirmationBlocks: 2327.44,
  decimal: 6144.65,
  deprecated: false,
  displayName: "Alexanne.Keebler25",
  eip1159: false,
  eips: {
    eip1159: false,
    eip155: false,
  },
  enableExternalWallet: false,
  enableListener: false,
  enableRelayer: false,
  explorerUrl: "https://competent-adrenalin.com/",
  featured: false,
  indexerService: false,
  loadbalancerUrl: "https://wise-word.info",
  logo: "<value>",
  name: "<value>",
  owner: "<value>",
  symbol: "<value>",
  testnet: false,
  transactionManagerService: false,
  verifyBlockIntegrity: false,
  verifyTxIntegrity: false,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `blockchain`                                                                                        | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `browserExtensionService`                                                                           | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `browserExtensionSettings`                                                                          | [shared.BrowserExtensionSettings](../../../sdk/models/shared/browserextensionsettings.md)           | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `chainId`                                                                                           | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `confirmationBlocks`                                                                                | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `createdAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `decimal`                                                                                           | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `deprecated`                                                                                        | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `displayName`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `eip1159`                                                                                           | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `eips`                                                                                              | [shared.NetworkEips](../../../sdk/models/shared/networkeips.md)                                     | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `enableExternalWallet`                                                                              | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `enableListener`                                                                                    | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `enableRelayer`                                                                                     | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `explorerUrl`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `faucetUrl`                                                                                         | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `featured`                                                                                          | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `gasPriceRecommendation`                                                                            | [shared.NetworkGasPriceRecommendation](../../../sdk/models/shared/networkgaspricerecommendation.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `indexerService`                                                                                    | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `indexerSettings`                                                                                   | [shared.IndexerSettings](../../../sdk/models/shared/indexersettings.md)                             | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `loadbalancerUrl`                                                                                   | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `logo`                                                                                              | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `name`                                                                                              | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `owner`                                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `symbol`                                                                                            | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `testnet`                                                                                           | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `transactionManagerService`                                                                         | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `transactionManagerSettings`                                                                        | [shared.TransactionManagerSettings](../../../sdk/models/shared/transactionmanagersettings.md)       | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `updatedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `verifyBlockIntegrity`                                                                              | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `verifyTxIntegrity`                                                                                 | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |