# CallSmartContractRequest

## Example Usage

```typescript
import { CallSmartContractRequest } from "@starton/sdk/sdk/models/operations";

let value: CallSmartContractRequest = {
  callDto: {
    functionName: "<value>",
    params: [
      "TestToken",
      "TEST",
      "1000000000000000000000000",
      "0x298e760768c8481780397eE28A127eAd584df4ee",
    ],
    signerWallet: "<value>",
  },
  address: "0x820f8728E32519b9C91B2406BF48AF80711aFecD",
  network: "polygon-mumbai",
  simulate: false,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `callDto`                                                    | [shared.CallDto](../../../sdk/models/shared/calldto.md)      | :heavy_check_mark:                                           | Body to interact with a smart contract.                      |                                                              |
| `address`                                                    | *string*                                                     | :heavy_check_mark:                                           | Smart contract address.                                      | 0x820f8728E32519b9C91B2406BF48AF80711aFecD                   |
| `network`                                                    | *string*                                                     | :heavy_check_mark:                                           | EVM starton supported network.                               | polygon-mumbai                                               |
| `simulate`                                                   | *boolean*                                                    | :heavy_minus_sign:                                           | Boolean for transaction simulation. Will estimate gas price. | false                                                        |