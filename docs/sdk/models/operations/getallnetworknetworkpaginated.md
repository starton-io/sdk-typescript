# GetAllNetworkNetworkPaginated

## Example Usage

```typescript
import { GetAllNetworkNetworkPaginated } from "@starton/sdk/sdk/models/operations";

let value: GetAllNetworkNetworkPaginated = {
  items: [
    {
      blockchain: "<value>",
      browserExtensionService: false,
      chainId: 8289.4,
      confirmationBlocks: 46.95,
      decimal: 6778.17,
      deprecated: false,
      displayName: "Dominique.Windler",
      eip1159: false,
      eips: {
        eip1159: false,
        eip155: false,
      },
      enableExternalWallet: false,
      enableListener: false,
      enableRelayer: false,
      explorerUrl: "https://elliptical-valentine.info",
      featured: false,
      indexerService: false,
      loadbalancerUrl: "https://runny-epic.net",
      logo: "<value>",
      name: "<value>",
      owner: "<value>",
      symbol: "<value>",
      testnet: false,
      transactionManagerService: false,
      verifyBlockIntegrity: false,
      verifyTxIntegrity: false,
    },
  ],
  meta: {
    currentPage: 3965.06,
    itemCount: 8811.04,
    itemsPerPage: 5812.73,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Network](../../../sdk/models/shared/network.md)[]             | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |