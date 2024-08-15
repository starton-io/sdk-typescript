# GetAllWalletWalletPaginated

## Example Usage

```typescript
import { GetAllWalletWalletPaginated } from "@starton/sdk/sdk/models/operations";

let value: GetAllWalletWalletPaginated = {
    items: [
        {
            address: "584 Oberbrunner Hill",
            kmsId: "<value>",
            projectId: "<value>",
            providerKeyId: "<value>",
        },
    ],
    meta: {
        currentPage: 4375.87,
        itemCount: 2975.34,
        itemsPerPage: 8917.73,
    },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Wallet](../../../sdk/models/shared/wallet.md)[]               | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |