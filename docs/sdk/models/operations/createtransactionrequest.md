# CreateTransactionRequest

## Example Usage

```typescript
import { CreateTransactionRequest } from "@starton/sdk/sdk/models/operations";
import { CreateTransactionDtoSpeed } from "@starton/sdk/sdk/models/shared";

let value: CreateTransactionRequest = {
    createTransactionDto: {
        data: "0x1234",
        network: "polygon-mumbai",
        signerWallet: "0x298e760768c8481780397eE28A127eAd584df4ee",
        speed: CreateTransactionDtoSpeed.Low,
        to: "0x298e760768c8481780397eE28A127eAd584df4ee",
        value: "0",
    },
    simulate: false,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `createTransactionDto`                                                            | [shared.CreateTransactionDto](../../../sdk/models/shared/createtransactiondto.md) | :heavy_check_mark:                                                                | Transaction payload                                                               |                                                                                   |
| `simulate`                                                                        | *boolean*                                                                         | :heavy_minus_sign:                                                                | Boolean for transaction simulation. Will estimate gas price.                      | false                                                                             |