# DeploySmartContractResponse

## Example Usage

```typescript
import {
  DeploySmartContractResponse,
  SmartContractStatus,
  State,
  TransactionLogType,
  TransactionState,
  TransactionStatus,
} from "@starton/sdk/sdk/models/shared";

let value: DeploySmartContractResponse = {
    smartContract: {
        address: "17428 Tyreek Via",
        id: "<id>",
        name: "<value>",
        network: "<value>",
        projectId: "<value>",
        state: State.ManualActionRequired,
        status: SmartContractStatus.Mined,
    },
    transaction: {
        automaticNonce: false,
        chainId: 5966.56,
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
        projectId: "<value>",
        signerWallet: "<value>",
        state: TransactionState.Error,
        status: TransactionStatus.CouldNotEstimateGasPrice,
        value: "<value>",
    },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `smartContract`                                                     | [shared.SmartContract](../../../sdk/models/shared/smartcontract.md) | :heavy_check_mark:                                                  | N/A                                                                 |
| `transaction`                                                       | [shared.Transaction](../../../sdk/models/shared/transaction.md)     | :heavy_check_mark:                                                  | N/A                                                                 |