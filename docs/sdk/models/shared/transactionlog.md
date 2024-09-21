# TransactionLog

## Example Usage

```typescript
import { TransactionLog, TransactionLogType } from "@starton/sdk/sdk/models/shared";

let value: TransactionLog = {
  createdAt: "<value>",
  message: "<value>",
  type: TransactionLogType.Published,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `context`                                                                           | [shared.TransactionLogContext](../../../sdk/models/shared/transactionlogcontext.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `createdAt`                                                                         | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `message`                                                                           | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `type`                                                                              | [shared.TransactionLogType](../../../sdk/models/shared/transactionlogtype.md)       | :heavy_check_mark:                                                                  | N/A                                                                                 |