# GetAllWalletWalletPaginated

## Example Usage

```typescript
import { GetAllWalletWalletPaginated } from "@starton/sdk/sdk/models/operations";

let value: GetAllWalletWalletPaginated = {
  items: [
    {
      address: "4893 N High Street",
      kmsId: "<value>",
      projectId: "<value>",
      providerKeyId: "<value>",
    },
  ],
  meta: {
    currentPage: 5680.45,
    itemCount: 9255.97,
    itemsPerPage: 710.36,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Wallet](../../../sdk/models/shared/wallet.md)[]               | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |