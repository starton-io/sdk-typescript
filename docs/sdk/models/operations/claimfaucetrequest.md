# ClaimFaucetRequest

## Example Usage

```typescript
import { ClaimFaucetRequest } from "@starton/sdk/sdk/models/operations";

let value: ClaimFaucetRequest = {
  requireFaucetDto: {
    captchaToken: "testCaptchaToken",
    wallet: "0x298e760768c8481780397eE28A127eAd584df4ee",
  },
  network: "polygon-mumbai",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `requireFaucetDto`                                                        | [shared.RequireFaucetDto](../../../sdk/models/shared/requirefaucetdto.md) | :heavy_check_mark:                                                        | N/A                                                                       |                                                                           |
| `network`                                                                 | *string*                                                                  | :heavy_check_mark:                                                        | EVM starton supported network.                                            | polygon-mumbai                                                            |