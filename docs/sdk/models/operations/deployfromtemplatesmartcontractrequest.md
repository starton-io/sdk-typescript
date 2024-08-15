# DeployFromTemplateSmartContractRequest

## Example Usage

```typescript
import { DeployFromTemplateSmartContractRequest } from "@starton/sdk/sdk/models/operations";

let value: DeployFromTemplateSmartContractRequest = {
    deployFromTemplateDto: {
        name: "TestToken",
        network: "polygon-mumbai",
        params: [
            "TestToken",
            "TEST",
            "1000000000000000000000000",
            "0x298e760768c8481780397eE28A127eAd584df4ee",
        ],
        signerWallet: "0x298e760768c8481780397eE28A127eAd584df4ee",
        templateId: "ERC20_META_TRANSACTION",
    },
    simulate: false,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `deployFromTemplateDto`                                                             | [shared.DeployFromTemplateDto](../../../sdk/models/shared/deployfromtemplatedto.md) | :heavy_check_mark:                                                                  | Deploy smart contract from template body payload.                                   |                                                                                     |
| `simulate`                                                                          | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Boolean for transaction simulation. Will estimate gas price.                        | false                                                                               |