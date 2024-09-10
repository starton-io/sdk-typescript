# ResyncNoncesWalletRequest

## Example Usage

```typescript
import { ResyncNoncesWalletRequest } from "@starton/sdk/sdk/models/operations";

let value: ResyncNoncesWalletRequest = {
  address: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
  network: "polygon-mumbai",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `address`                                                           | *string*                                                            | :heavy_check_mark:                                                  | the address of the wallet on which you need to resynchronize nonces | 0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326                          |
| `network`                                                           | *string*                                                            | :heavy_check_mark:                                                  | the network on which you need to resynchronize a nonce              | polygon-mumbai                                                      |