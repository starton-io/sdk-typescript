# CreateTransactionRequest


## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `createTransactionDto`                                                            | [shared.CreateTransactionDto](../../../sdk/models/shared/createtransactiondto.md) | :heavy_check_mark:                                                                | Transaction payload                                                               |
| `simulate`                                                                        | *boolean*                                                                         | :heavy_minus_sign:                                                                | Boolean for transaction simulation. Will estimate gas price.                      |