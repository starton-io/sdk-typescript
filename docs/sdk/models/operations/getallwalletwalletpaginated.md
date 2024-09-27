# GetAllWalletWalletPaginated

## Example Usage

```typescript
import { GetAllWalletWalletPaginated } from "@starton/sdk/sdk/models/operations";

let value: GetAllWalletWalletPaginated = {
  items: [
    {
      address: "559 Ashlee Bridge",
      kmsId: "<id>",
      projectId: "<id>",
      providerKeyId: "<id>",
    },
  ],
  meta: {
    currentPage: 8326.20,
    itemCount: 7781.57,
    itemsPerPage: 8700.12,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Wallet](../../../sdk/models/shared/wallet.md)[]               | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |