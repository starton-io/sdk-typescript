# DeployFromBytecodeSmartContractRequest

## Example Usage

```typescript
import { DeployFromBytecodeSmartContractRequest } from "@starton/sdk/sdk/models/operations";
import { Type } from "@starton/sdk/sdk/models/shared";

let value: DeployFromBytecodeSmartContractRequest = {
    deployFromBytecodeDto: {
        abi: [
            {
                type: Type.Event,
            },
        ],
        bytecode: "<value>",
        name: "<value>",
        network: "<value>",
        params: [
            "TestToken",
            "TEST",
            "1000000000000000000000000",
            "0x298e760768c8481780397eE28A127eAd584df4ee",
        ],
        signerWallet: "<value>",
    },
    simulate: false,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `deployFromBytecodeDto`                                                             | [shared.DeployFromBytecodeDto](../../../sdk/models/shared/deployfrombytecodedto.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |                                                                                     |
| `simulate`                                                                          | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Boolean for transaction simulation. Will estimate gas price.                        | false                                                                               |