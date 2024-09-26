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
    address: "40222 Adolfo Corners",
    id: "<id>",
    name: "<value>",
    network: "<value>",
    projectId: "<value>",
    state: State.ManualActionRequired,
    status: SmartContractStatus.MonitoringInterrupted,
  },
  transaction: {
    automaticNonce: false,
    chainId: 9903.45,
    from: "<value>",
    id: "<id>",
    isDeployTransaction: false,
    logs: [
      {
        createdAt: "<value>",
        message: "<value>",
        type: TransactionLogType.InsufficientFunds,
      },
    ],
    network: "<value>",
    projectId: "<value>",
    signerWallet: "<value>",
    state: TransactionState.Success,
    status: TransactionStatus.SentToMempool,
    value: "<value>",
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `smartContract`                                                     | [shared.SmartContract](../../../sdk/models/shared/smartcontract.md) | :heavy_check_mark:                                                  | N/A                                                                 |
| `transaction`                                                       | [shared.Transaction](../../../sdk/models/shared/transaction.md)     | :heavy_check_mark:                                                  | N/A                                                                 |