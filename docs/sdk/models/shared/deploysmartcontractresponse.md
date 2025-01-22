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
    address: "51376 Rath Estate",
    id: "<id>",
    name: "<value>",
    network: "<value>",
    projectId: "<id>",
    state: State.Pending,
    status: SmartContractStatus.AlreadyKnown,
  },
  transaction: {
    automaticNonce: false,
    chainId: 8792.35,
    from: "<value>",
    id: "<id>",
    isDeployTransaction: false,
    logs: [
      {
        createdAt: "1723117198729",
        message: "<value>",
        type: TransactionLogType.ReplacementGasPriceUnderpriced,
      },
    ],
    network: "<value>",
    projectId: "<id>",
    signerWallet: "<value>",
    state: TransactionState.Success,
    status: TransactionStatus.Mined,
    value: "<value>",
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `smartContract`                                                     | [shared.SmartContract](../../../sdk/models/shared/smartcontract.md) | :heavy_check_mark:                                                  | N/A                                                                 |
| `transaction`                                                       | [shared.Transaction](../../../sdk/models/shared/transaction.md)     | :heavy_check_mark:                                                  | N/A                                                                 |