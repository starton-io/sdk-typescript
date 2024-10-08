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
    address: "452 Jacobson Fields",
    id: "<id>",
    name: "<value>",
    network: "<value>",
    projectId: "<id>",
    state: State.ManualActionRequired,
    status: SmartContractStatus.CouldNotEstimateGasLimit,
  },
  transaction: {
    automaticNonce: false,
    chainId: 3730.35,
    from: "<value>",
    id: "<id>",
    isDeployTransaction: false,
    logs: [
      {
        createdAt: "<value>",
        message: "<value>",
        type: TransactionLogType.NonceAssigned,
      },
    ],
    network: "<value>",
    projectId: "<id>",
    signerWallet: "<value>",
    state: TransactionState.Error,
    status: TransactionStatus.GasLimitEstimated,
    value: "<value>",
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `smartContract`                                                     | [shared.SmartContract](../../../sdk/models/shared/smartcontract.md) | :heavy_check_mark:                                                  | N/A                                                                 |
| `transaction`                                                       | [shared.Transaction](../../../sdk/models/shared/transaction.md)     | :heavy_check_mark:                                                  | N/A                                                                 |