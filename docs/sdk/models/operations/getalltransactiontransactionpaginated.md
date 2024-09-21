# GetAllTransactionTransactionPaginated

## Example Usage

```typescript
import { GetAllTransactionTransactionPaginated } from "@starton/sdk/sdk/models/operations";
import { TransactionLogType, TransactionState, TransactionStatus } from "@starton/sdk/sdk/models/shared";

let value: GetAllTransactionTransactionPaginated = {
  items: [
    {
      automaticNonce: false,
      chainId: 1289.26,
      from: "<value>",
      id: "<id>",
      isDeployTransaction: false,
      logs: [
        {
          createdAt: "<value>",
          message: "<value>",
          type: TransactionLogType.CouldNotEstimateGasLimit,
        },
      ],
      network: "<value>",
      projectId: "<value>",
      signerWallet: "<value>",
      state: TransactionState.Pending,
      status: TransactionStatus.CouldNotSign,
      value: "<value>",
    },
  ],
  meta: {
    currentPage: 4386.02,
    itemCount: 9883.74,
    itemsPerPage: 1020.45,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Transaction](../../../sdk/models/shared/transaction.md)[]     | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |