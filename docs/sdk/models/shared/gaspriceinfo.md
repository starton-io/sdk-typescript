# GasPriceInfo

## Example Usage

```typescript
import { GasPriceInfo } from "@starton/sdk/sdk/models/shared";

let value: GasPriceInfo = {
  gasPrice: "<value>",
  maxFeePerGas: "<value>",
  maxPriorityFeePerGas: "<value>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `gasPrice`                | *string*                  | :heavy_check_mark:        | Pre eip-1159 gas format.  |
| `maxFeePerGas`            | *string*                  | :heavy_check_mark:        | Post eip-1159 gas format. |
| `maxPriorityFeePerGas`    | *string*                  | :heavy_check_mark:        | Post eip-1159 gas format. |