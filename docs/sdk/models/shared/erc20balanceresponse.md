# Erc20BalanceResponse

## Example Usage

```typescript
import { Erc20BalanceResponse } from "@starton/sdk/sdk/models/shared";

let value: Erc20BalanceResponse = {
  balance: "0",
  contractAddress: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
  decimal: 6,
  formatted: "0.0",
  symbol: "USDT",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `balance`                                  | *string*                                   | :heavy_check_mark:                         | Balance of the given address.              | 0                                          |
| `contractAddress`                          | *string*                                   | :heavy_check_mark:                         | ERC20 smart contract address.              | 0xc2132D05D31c914a87C6611C10748AEb04B58e8F |
| `decimal`                                  | *number*                                   | :heavy_check_mark:                         | The number of contract decimals.           | 6                                          |
| `formatted`                                | *string*                                   | :heavy_check_mark:                         | Formatted balance output.                  | 0.0                                        |
| `symbol`                                   | *string*                                   | :heavy_check_mark:                         | ERC20 token symbol.                        | USDT                                       |