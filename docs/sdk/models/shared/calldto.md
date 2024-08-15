# CallDto

## Example Usage

```typescript
import { CallDto } from "@starton/sdk/sdk/models/shared";

let value: CallDto = {
    functionName: "<value>",
    params: [
        "TestToken",
        "TEST",
        "1000000000000000000000000",
        "0x298e760768c8481780397eE28A127eAd584df4ee",
    ],
    signerWallet: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `customGas`                                                                                        | [shared.CustomGasDto](../../../sdk/models/shared/customgasdto.md)                                  | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `functionName`                                                                                     | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `gasLimit`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `nonce`                                                                                            | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `params`                                                                                           | *shared.Params*[]                                                                                  | :heavy_check_mark:                                                                                 | Smart contract parameters.                                                                         | [<br/>"TestToken",<br/>"TEST",<br/>"1000000000000000000000000",<br/>"0x298e760768c8481780397eE28A127eAd584df4ee"<br/>] |
| `signerWallet`                                                                                     | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `speed`                                                                                            | [shared.Speed](../../../sdk/models/shared/speed.md)                                                | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `value`                                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |