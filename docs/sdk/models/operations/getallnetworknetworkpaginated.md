# GetAllNetworkNetworkPaginated

## Example Usage

```typescript
import { GetAllNetworkNetworkPaginated } from "@starton/sdk/sdk/models/operations";

let value: GetAllNetworkNetworkPaginated = {
  items: [
    {
      blockchain: "<value>",
      browserExtensionService: false,
      chainId: 201.08,
      confirmationBlocks: 8289.40,
      decimal: 46.95,
      deprecated: false,
      displayName: "Mariano_Rice",
      eip1159: false,
      eips: {
        eip1159: false,
        eip155: false,
      },
      enableExternalWallet: false,
      enableListener: false,
      enableRelayer: false,
      explorerUrl: "https://old-fashioned-deck.org",
      featured: false,
      indexerService: false,
      loadbalancerUrl: "https://that-premeditation.biz/",
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
    currentPage: 8137.98,
    itemCount: 3965.06,
    itemsPerPage: 8811.03,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Network](../../../sdk/models/shared/network.md)[]             | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |