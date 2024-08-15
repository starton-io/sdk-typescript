# GetAllNetworkNetworkPaginated

## Example Usage

```typescript
import { GetAllNetworkNetworkPaginated } from "@starton/sdk/sdk/models/operations";

let value: GetAllNetworkNetworkPaginated = {
    items: [
        {
            blockchain: "<value>",
            chainId: 6130.64,
            confirmationBlocks: 4370.32,
            decimal: 9023.49,
            displayName: "Maxie96",
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
        currentPage: 6667.67,
        itemCount: 6531.4,
        itemsPerPage: 6706.38,
    },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Network](../../../sdk/models/shared/network.md)[]             | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |