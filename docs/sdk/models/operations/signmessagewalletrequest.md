# SignMessageWalletRequest

## Example Usage

```typescript
import { SignMessageWalletRequest } from "@starton/sdk/sdk/models/operations";

let value: SignMessageWalletRequest = {
    signMessageDto: {
        message: "<value>",
    },
    address: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `signMessageDto`                                                      | [shared.SignMessageDto](../../../sdk/models/shared/signmessagedto.md) | :heavy_check_mark:                                                    | N/A                                                                   |                                                                       |
| `address`                                                             | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | 0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326                            |