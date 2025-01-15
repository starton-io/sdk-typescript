# AddressNativeBalanceResponse

## Example Usage

```typescript
import { AddressNativeBalanceResponse } from "@starton/sdk/sdk/models/shared";

let value: AddressNativeBalanceResponse = {
  balance: "<value>",
  decimal: 7786.96,
  formatted: "<value>",
  symbol: "<value>",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `balance`                                     | *string*                                      | :heavy_check_mark:                            | The amount of native currency the wallet has. |
| `decimal`                                     | *number*                                      | :heavy_check_mark:                            | The number of decimals on the blockchain.     |
| `formatted`                                   | *string*                                      | :heavy_check_mark:                            | The formatted (human readable) output.        |
| `symbol`                                      | *string*                                      | :heavy_check_mark:                            | native currency symbol.                       |