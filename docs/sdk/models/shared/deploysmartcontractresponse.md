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
    address: "236 N Oak Street",
    id: "<id>",
    name: "<value>",
    network: "<value>",
    projectId: "<id>",
    state: State.Pending,
    status: SmartContractStatus.ErrorTx,
  },
  transaction: {
    automaticNonce: false,
    chainId: 7103.37,
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
    projectId: "<id>",
    signerWallet: "<value>",
    state: TransactionState.Pending,
    status: TransactionStatus.NonceAssigned,
    value: "<value>",
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `smartContract`                                                     | [shared.SmartContract](../../../sdk/models/shared/smartcontract.md) | :heavy_check_mark:                                                  | N/A                                                                 |
| `transaction`                                                       | [shared.Transaction](../../../sdk/models/shared/transaction.md)     | :heavy_check_mark:                                                  | N/A                                                                 |