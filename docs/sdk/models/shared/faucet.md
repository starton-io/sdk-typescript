# Faucet

## Example Usage

```typescript
import { Faucet } from "@starton/sdk/sdk/models/shared";

let value: Faucet = {
  id: "<id>",
  ip: "adaf:8dff:7ad5:3bfa:dcae:ccdb:3d81:95c0",
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