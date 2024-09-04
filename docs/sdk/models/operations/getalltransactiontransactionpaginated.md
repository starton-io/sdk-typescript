# GetAllTransactionTransactionPaginated

## Example Usage

```typescript
import { GetAllTransactionTransactionPaginated } from "@starton/sdk/sdk/models/operations";
import { TransactionLogType, TransactionState, TransactionStatus } from "@starton/sdk/sdk/models/shared";

let value: GetAllTransactionTransactionPaginated = {
    items: [
        {
            automaticNonce: false,
            chainId: 6788.8,
            from: "<value>",
            id: "<id>",
            isDeployTransaction: false,
            logs: [
                {
                    createdAt: "<value>",
                    message: "<value>",
                    type: TransactionLogType.ReceivedByStarton,
                },
            ],
            network: "<value>",
            projectId: "<value>",
            signerWallet: "<value>",
            state: TransactionState.ManualActionRequired,
            status: TransactionStatus.SentToMempool,
            value: "<value>",
        },
    ],
    meta: {
        currentPage: 5820.2,
        itemCount: 1433.53,
        itemsPerPage: 5373.73,
    },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Transaction](../../../sdk/models/shared/transaction.md)[]     | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |