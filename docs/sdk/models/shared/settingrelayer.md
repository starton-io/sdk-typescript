# SettingRelayer

## Example Usage

```typescript
import { SettingRelayer } from "@starton/sdk/sdk/models/shared";

let value: SettingRelayer = {
  id: "<id>",
  network: "<value>",
  projectId: "<id>",
  unstuckAutomaticGasPrice: false,
  unstuckCustomGasPrice: false,
  unstuckGasPriceDelay: 8694.89,
  unstuckMaxGasPrice: "<value>",
  unstuckMissingNonce: false,
  unstuckMissingNonceDelay: 4541.62,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `network`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `unstuckAutomaticGasPrice`                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `unstuckCustomGasPrice`                                                                       | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `unstuckGasPriceDelay`                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `unstuckMaxGasPrice`                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `unstuckMissingNonce`                                                                         | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `unstuckMissingNonceDelay`                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |