# ImportSmartContractDto

## Example Usage

```typescript
import { ImportSmartContractDto, StateMutability, Type } from "@starton/sdk/sdk/models/shared";

let value: ImportSmartContractDto = {
    abi: [
        {
            inputs: {
                name: "<value>",
                type: "<value>",
            },
            stateMutability: StateMutability.Nonpayable,
            type: Type.Constructor,
        },
    ],
    address: "0x1C1f7A4d7F853856b964947CA03B92993D3ef40e",
    creationHash: "0x55b782a3db6d7b8c1949536110dcaaac69b4f83455959ab2839c09c2ed2ab1da",
    description: "Minimal smart contract description.",
    name: "Minimal Contract Test.",
    network: "polygon-mumbai",
    params: [
        "TestToken",
        "TEST",
        "1000000000000000000000000",
        "0x298e760768c8481780397eE28A127eAd584df4ee",
    ],
    templateId: "ERC721_META_TRANSACTION",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `abi`                                                                                                 | [shared.AbiObjectDto](../../../sdk/models/shared/abiobjectdto.md)[]                                   | :heavy_check_mark:                                                                                    | N/A                                                                                                   | [<br/>{<br/>"inputs": [],<br/>"stateMutability": "nonpayable",<br/>"type": "constructor"<br/>}<br/>]  |
| `address`                                                                                             | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | 0x1C1f7A4d7F853856b964947CA03B92993D3ef40e                                                            |
| `creationHash`                                                                                        | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | 0x55b782a3db6d7b8c1949536110dcaaac69b4f83455959ab2839c09c2ed2ab1da                                    |
| `description`                                                                                         | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | Minimal smart contract description.                                                                   |
| `metadata`                                                                                            | [shared.ImportSmartContractDtoMetadata](../../../sdk/models/shared/importsmartcontractdtometadata.md) | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `name`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | Minimal Contract Test.                                                                                |
| `network`                                                                                             | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   | polygon-mumbai                                                                                        |
| `params`                                                                                              | *shared.ImportSmartContractDtoParams*[]                                                               | :heavy_minus_sign:                                                                                    | Smart contract constructor parameters.                                                                | [<br/>"TestToken",<br/>"TEST",<br/>"1000000000000000000000000",<br/>"0x298e760768c8481780397eE28A127eAd584df4ee"<br/>] |
| `templateId`                                                                                          | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | ERC721_META_TRANSACTION                                                                               |
| `uiData`                                                                                              | [shared.ImportSmartContractDtoUiData](../../../sdk/models/shared/importsmartcontractdtouidata.md)     | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |