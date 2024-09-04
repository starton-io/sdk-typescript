# TransactionStatus

## Example Usage

```typescript
import { TransactionStatus } from "@starton/sdk/sdk/models/shared";

let value: TransactionStatus = TransactionStatus.Signed;
```

## Values

| Name                               | Value                              |
| ---------------------------------- | ---------------------------------- |
| `Unsigned`                         | UNSIGNED                           |
| `ErrorTx`                          | ERROR_TX                           |
| `ErrorPublish`                     | ERROR_PUBLISH                      |
| `Published`                        | PUBLISHED                          |
| `ReceivedByStarton`                | RECEIVED_BY_STARTON                |
| `CreatedByStarton`                 | CREATED_BY_STARTON                 |
| `CouldNotEstimateGasPrice`         | COULD_NOT_ESTIMATE_GAS_PRICE       |
| `CouldNotIncreaseGasPrice`         | COULD_NOT_INCREASE_GAS_PRICE       |
| `GasPriceEstimated`                | GAS_PRICE_ESTIMATED                |
| `InvalidGasPrice`                  | INVALID_GAS_PRICE                  |
| `ReplacementGasPriceUnderpriced`   | REPLACEMENT_GAS_PRICE_UNDERPRICED  |
| `CouldNotEstimateGasLimit`         | COULD_NOT_ESTIMATE_GAS_LIMIT       |
| `GasLimitEstimated`                | GAS_LIMIT_ESTIMATED                |
| `ExecutionWillFail`                | EXECUTION_WILL_FAIL                |
| `InvalidArgument`                  | INVALID_ARGUMENT                   |
| `InsufficientFunds`                | INSUFFICIENT_FUNDS                 |
| `InsufficientFundsAfterBroadcast`  | INSUFFICIENT_FUNDS_AFTER_BROADCAST |
| `CouldNotAssignNonce`              | COULD_NOT_ASSIGN_NONCE             |
| `CouldNotUnstuckNonce`             | COULD_NOT_UNSTUCK_NONCE            |
| `NonceAssigned`                    | NONCE_ASSIGNED                     |
| `NonceExpired`                     | NONCE_EXPIRED                      |
| `CouldNotSign`                     | COULD_NOT_SIGN                     |
| `Signed`                           | SIGNED                             |
| `SentToMempool`                    | SENT_TO_MEMPOOL                    |
| `CouldNotBroadcast`                | COULD_NOT_BROADCAST                |
| `AlreadyKnown`                     | ALREADY_KNOWN                      |
| `Mined`                            | MINED                              |
| `Confirmed`                        | CONFIRMED                          |
| `Replaced`                         | REPLACED                           |
| `Failed`                           | FAILED                             |
| `MonitoringInProgress`             | MONITORING_IN_PROGRESS             |
| `StuckByPreviousTransaction`       | STUCK_BY_PREVIOUS_TRANSACTION      |
| `MaxGasPriceReach`                 | MAX_GAS_PRICE_REACH                |
| `GasPriceIncreased`                | GAS_PRICE_INCREASED                |
| `NewTransactionHash`               | NEW_TRANSACTION_HASH               |
| `Unknown`                          | UNKNOWN                            |
| `MonitoringInterrupted`            | MONITORING_INTERRUPTED             |