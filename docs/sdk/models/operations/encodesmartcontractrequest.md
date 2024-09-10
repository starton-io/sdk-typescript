# EncodeSmartContractRequest

## Example Usage

```typescript
import { EncodeSmartContractRequest } from "@starton/sdk/sdk/models/operations";

let value: EncodeSmartContractRequest = {
  encodeDto: {
    functionName: "<value>",
    params: [
      "TestToken",
      "TEST",
      "1000000000000000000000000",
      "0x298e760768c8481780397eE28A127eAd584df4ee",
    ],
  },
  address: "0x820f8728E32519b9C91B2406BF48AF80711aFecD",
  network: "polygon-mumbai",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `encodeDto`                                                 | [shared.EncodeDto](../../../sdk/models/shared/encodedto.md) | :heavy_check_mark:                                          | Encode your smartcontract call.                             |                                                             |
| `address`                                                   | *string*                                                    | :heavy_check_mark:                                          | Smart contract address.                                     | 0x820f8728E32519b9C91B2406BF48AF80711aFecD                  |
| `network`                                                   | *string*                                                    | :heavy_check_mark:                                          | EVM starton supported network.                              | polygon-mumbai                                              |