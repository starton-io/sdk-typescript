# GetAllTransactionTransactionPaginated

## Example Usage

```typescript
import { GetAllTransactionTransactionPaginated } from "@starton/sdk/sdk/models/operations";
import { TransactionLogType, TransactionState, TransactionStatus } from "@starton/sdk/sdk/models/shared";

let value: GetAllTransactionTransactionPaginated = {
    items: [
        {
            automaticNonce: false,
            chainId: 1352.18,
            from: "<value>",
            id: "<id>",
            isDeployTransaction: false,
            logs: [
                {
                    createdAt: "<value>",
                    message: "<value>",
                    type: TransactionLogType.Unsigned,
                },
            ],
            network: "<value>",
            projectId: "<value>",
            signerWallet: "<value>",
            state: TransactionState.Pending,
            status: TransactionStatus.Signed,
            value: "<value>",
        },
    ],
    meta: {
        currentPage: 1496.75,
        itemCount: 6120.96,
        itemsPerPage: 2223.21,
    },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Transaction](../../../sdk/models/shared/transaction.md)[]     | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |