# GetAllNetworkNetworkPaginated

## Example Usage

```typescript
import { GetAllNetworkNetworkPaginated } from "@starton/sdk/sdk/models/operations";

let value: GetAllNetworkNetworkPaginated = {
  items: [
    {
      blockchain: "<value>",
      chainId: 1863.32,
      confirmationBlocks: 7742.34,
      decimal: 7369.18,
      displayName: "Jacky.Emmerich",
      eip1159: false,
      enableExternalWallet: false,
      enableListener: false,
      enableRelayer: false,
      explorerUrl: "<value>",
      loadbalancerUrl: "<value>",
      logo: "<value>",
      name: "<value>",
      owner: "<value>",
      symbol: "<value>",
      testnet: false,
      verifyBlockIntegrity: false,
      verifyTxIntegrity: false,
    },
  ],
  meta: {
    currentPage: 187.89,
    itemCount: 3241.41,
    itemsPerPage: 6176.36,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Network](../../../sdk/models/shared/network.md)[]             | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |