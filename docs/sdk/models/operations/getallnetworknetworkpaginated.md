# GetAllNetworkNetworkPaginated

## Example Usage

```typescript
import { GetAllNetworkNetworkPaginated } from "@starton/sdk/sdk/models/operations";

let value: GetAllNetworkNetworkPaginated = {
  items: [
    {
      blockchain: "<value>",
      chainId: 1831.91,
      confirmationBlocks: 5865.13,
      decimal: 201.08,
      displayName: "Rhoda73",
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
    currentPage: 2487.53,
    itemCount: 5761.57,
    itemsPerPage: 5920.42,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Network](../../../sdk/models/shared/network.md)[]             | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |