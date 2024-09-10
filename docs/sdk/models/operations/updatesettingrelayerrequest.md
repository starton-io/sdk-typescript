# UpdateSettingRelayerRequest

## Example Usage

```typescript
import { UpdateSettingRelayerRequest } from "@starton/sdk/sdk/models/operations";

let value: UpdateSettingRelayerRequest = {
  updateSettingRelayerDto: {
    unstuckAutomaticGasPrice: true,
    unstuckCustomGasPrice: true,
    unstuckGasPriceDelay: 300,
    unstuckMaxGasPrice: "150000000000",
    unstuckMissingNonce: true,
    unstuckMissingNonceDelay: 300,
  },
  network: "polygon-mumbai",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `updateSettingRelayerDto`                                                               | [shared.UpdateSettingRelayerDto](../../../sdk/models/shared/updatesettingrelayerdto.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |                                                                                         |
| `network`                                                                               | *string*                                                                                | :heavy_check_mark:                                                                      | The blockchain network for which the Relayer settings should be updated.                | polygon-mumbai                                                                          |