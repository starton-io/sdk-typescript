# CallSmartContractRequest


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `callDto`                                                    | [shared.CallDto](../../../sdk/models/shared/calldto.md)      | :heavy_check_mark:                                           | Body to interact with a smart contract.                      |
| `address`                                                    | *string*                                                     | :heavy_check_mark:                                           | Smart contract address.                                      |
| `network`                                                    | *string*                                                     | :heavy_check_mark:                                           | EVM starton supported network.                               |
| `simulate`                                                   | *boolean*                                                    | :heavy_minus_sign:                                           | Boolean for transaction simulation. Will estimate gas price. |