# GetAllTransactionTransactionPaginated

## Example Usage

```typescript
import { GetAllTransactionTransactionPaginated } from "@starton/sdk/sdk/models/operations";
import { TransactionLogType, TransactionState, TransactionStatus } from "@starton/sdk/sdk/models/shared";

let value: GetAllTransactionTransactionPaginated = {
  items: [
    {
      automaticNonce: false,
      chainId: 2828.07,
      from: "<value>",
      id: "<id>",
      isDeployTransaction: false,
      logs: [
        {
          createdAt: "1709416479380",
          message: "<value>",
          type: TransactionLogType.ReplacementGasPriceUnderpriced,
        },
      ],
      network: "<value>",
      projectId: "<id>",
      signerWallet: "<value>",
      state: TransactionState.Success,
      status: TransactionStatus.CouldNotEstimateGasLimit,
      value: "<value>",
    },
  ],
  meta: {
    currentPage: 4142.63,
    itemCount: 641.47,
    itemsPerPage: 6924.72,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Transaction](../../../sdk/models/shared/transaction.md)[]     | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |