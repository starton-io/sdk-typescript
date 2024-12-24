# Faucet

## Example Usage

```typescript
import { Faucet } from "@starton/sdk/sdk/models/shared";

let value: Faucet = {
  id: "<id>",
  ip: "fe09:bbe6:28f4:dbad:af8d:ff7a:d53b:fadc",
  network: "<value>",
  wallet: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Claim date.                                                                                   |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Faucet claim id.                                                                              |
| `ip`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Claim ip.                                                                                     |
| `network`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Testnet network claim.                                                                        |
| `txHash`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Hash transaction of native faucet transfer.                                                   |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | UserId claim.                                                                                 |
| `wallet`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Claim wallet                                                                                  |