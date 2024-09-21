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
    address: "6231 Bayer Spring",
    id: "<id>",
    name: "<value>",
    network: "<value>",
    projectId: "<value>",
    state: State.Success,
    status: SmartContractStatus.NonceAssigned,
  },
  transaction: {
    automaticNonce: false,
    chainId: 3068.10,
    from: "<value>",
    id: "<id>",
    isDeployTransaction: false,
    logs: [
      {
        createdAt: "<value>",
        message: "<value>",
        type: TransactionLogType.CouldNotSign,
      },
    ],
    network: "<value>",
    projectId: "<value>",
    signerWallet: "<value>",
    state: TransactionState.Error,
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