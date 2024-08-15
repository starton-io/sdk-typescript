# GetAvailableNoncesWalletRequest

## Example Usage

```typescript
import { GetAvailableNoncesWalletRequest } from "@starton/sdk/sdk/models/operations";

let value: GetAvailableNoncesWalletRequest = {
    address: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
    network: "polygon-mumbai",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `address`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | the address of the wallet from which you need to retrieve available nonces | 0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326                                 |
| `network`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | the network from which you need to retrieve available nonces               | polygon-mumbai                                                             |