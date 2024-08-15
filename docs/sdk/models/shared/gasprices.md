# GasPrices

## Example Usage

```typescript
import { GasPrices } from "@starton/sdk/sdk/models/shared";

let value: GasPrices = {
    average: {
        gasPrice: "<value>",
        maxFeePerGas: "<value>",
        maxPriorityFeePerGas: "<value>",
    },
    fast: {
        gasPrice: "<value>",
        maxFeePerGas: "<value>",
        maxPriorityFeePerGas: "<value>",
    },
    fastest: {
        gasPrice: "<value>",
        maxFeePerGas: "<value>",
        maxPriorityFeePerGas: "<value>",
    },
    low: {
        gasPrice: "<value>",
        maxFeePerGas: "<value>",
        maxPriorityFeePerGas: "<value>",
    },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `average`                                                         | [shared.GasPriceInfo](../../../sdk/models/shared/gaspriceinfo.md) | :heavy_check_mark:                                                | average gas price for network                                     |
| `fast`                                                            | [shared.GasPriceInfo](../../../sdk/models/shared/gaspriceinfo.md) | :heavy_check_mark:                                                | fast gas price for network                                        |
| `fastest`                                                         | [shared.GasPriceInfo](../../../sdk/models/shared/gaspriceinfo.md) | :heavy_check_mark:                                                | fastest gas price for network                                     |
| `low`                                                             | [shared.GasPriceInfo](../../../sdk/models/shared/gaspriceinfo.md) | :heavy_check_mark:                                                | low gas price for network                                         |