# ReadSmartContractRequest


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `readDto`                                               | [shared.ReadDto](../../../sdk/models/shared/readdto.md) | :heavy_check_mark:                                      | Call read function of smart contracts.                  |                                                         |
| `address`                                               | *string*                                                | :heavy_check_mark:                                      | Smart contract address.                                 | 0x820f8728E32519b9C91B2406BF48AF80711aFecD              |
| `network`                                               | *string*                                                | :heavy_check_mark:                                      | EVM starton supported network.                          | polygon-mumbai                                          |