# TransactionState

## Example Usage

```typescript
import { TransactionState } from "@starton/sdk/sdk/models/shared";

let value: TransactionState = TransactionState.Error;
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Success`              | SUCCESS                |
| `Pending`              | PENDING                |
| `ManualActionRequired` | MANUAL_ACTION_REQUIRED |
| `Error`                | ERROR                  |