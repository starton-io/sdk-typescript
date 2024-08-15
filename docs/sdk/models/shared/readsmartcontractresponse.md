# ReadSmartContractResponse

## Example Usage

```typescript
import { ReadSmartContractResponse } from "@starton/sdk/sdk/models/shared";

let value: ReadSmartContractResponse = {
    address: "00044 Shaniya Radial",
    functionName: "<value>",
    network: "<value>",
    params: [
        "TestToken",
        "TEST",
        "1000000000000000000000000",
        "0x298e760768c8481780397eE28A127eAd584df4ee",
    ],
    response: ["<value>"],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `address`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `functionName`                                                                                     | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `network`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `params`                                                                                           | *shared.ReadSmartContractResponseParams*[]                                                         | :heavy_check_mark:                                                                                 | Smart contract parameters.                                                                         | [<br/>"TestToken",<br/>"TEST",<br/>"1000000000000000000000000",<br/>"0x298e760768c8481780397eE28A127eAd584df4ee"<br/>] |
| `response`                                                                                         | *shared.Response*                                                                                  | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |