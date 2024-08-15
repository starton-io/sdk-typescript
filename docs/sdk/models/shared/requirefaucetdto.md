# RequireFaucetDto

## Example Usage

```typescript
import { RequireFaucetDto } from "@starton/sdk/sdk/models/shared";

let value: RequireFaucetDto = {
    captchaToken: "testCaptchaToken",
    wallet: "0x298e760768c8481780397eE28A127eAd584df4ee",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `captchaToken`                             | *string*                                   | :heavy_minus_sign:                         | Captcha token.                             | testCaptchaToken                           |
| `wallet`                                   | *string*                                   | :heavy_check_mark:                         | Destination wallet address.                | 0x298e760768c8481780397eE28A127eAd584df4ee |