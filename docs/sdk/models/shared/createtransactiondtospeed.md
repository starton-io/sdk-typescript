# CreateTransactionDtoSpeed

The gas speed you want. If custom it requires customGas field

## Example Usage

```typescript
import { CreateTransactionDtoSpeed } from "@starton/sdk/sdk/models/shared";

let value: CreateTransactionDtoSpeed = CreateTransactionDtoSpeed.Low;
```

## Values

| Name      | Value     |
| --------- | --------- |
| `Low`     | low       |
| `Average` | average   |
| `Fast`    | fast      |
| `Fastest` | fastest   |
| `Custom`  | custom    |