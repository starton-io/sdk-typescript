# EncodeDto

## Example Usage

```typescript
import { EncodeDto } from "@starton/sdk/sdk/models/shared";

let value: EncodeDto = {
  functionName: "<value>",
  params: [
    "TestToken",
    "TEST",
    "1000000000000000000000000",
    "0x298e760768c8481780397eE28A127eAd584df4ee",
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `functionName`                                                                                     | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `params`                                                                                           | *shared.EncodeDtoParams*[]                                                                         | :heavy_minus_sign:                                                                                 | Smart contract parameters.                                                                         | [<br/>"TestToken",<br/>"TEST",<br/>"1000000000000000000000000",<br/>"0x298e760768c8481780397eE28A127eAd584df4ee"<br/>] |