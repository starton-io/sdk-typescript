# GetAllTransactionTransactionPaginated

## Example Usage

```typescript
import { GetAllTransactionTransactionPaginated } from "@starton/sdk/sdk/models/operations";
import { TransactionLogType, TransactionState, TransactionStatus } from "@starton/sdk/sdk/models/shared";

let value: GetAllTransactionTransactionPaginated = {
  items: [
    {
      automaticNonce: false,
      chainId: 7392.64,
      from: "<value>",
      id: "<id>",
      isDeployTransaction: false,
      logs: [
        {
          createdAt: "<value>",
          message: "<value>",
          type: TransactionLogType.ErrorTx,
        },
      ],
      network: "<value>",
      projectId: "<id>",
      signerWallet: "<value>",
      state: TransactionState.Pending,
      status: TransactionStatus.ReceivedByStarton,
      value: "<value>",
    },
  ],
  meta: {
    currentPage: 2961.40,
    itemCount: 1187.28,
    itemsPerPage: 3179.83,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Transaction](../../../sdk/models/shared/transaction.md)[]     | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |