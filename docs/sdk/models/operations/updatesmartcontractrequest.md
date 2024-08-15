# UpdateSmartContractRequest

## Example Usage

```typescript
import { UpdateSmartContractRequest } from "@starton/sdk/sdk/models/operations";

let value: UpdateSmartContractRequest = {
    updateSmartContractDto: {},
    address: "0x820f8728E32519b9C91B2406BF48AF80711aFecD",
    network: "polygon-mumbai",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `updateSmartContractDto`                                                              | [shared.UpdateSmartContractDto](../../../sdk/models/shared/updatesmartcontractdto.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |                                                                                       |
| `address`                                                                             | *string*                                                                              | :heavy_check_mark:                                                                    | Smart contract address.                                                               | 0x820f8728E32519b9C91B2406BF48AF80711aFecD                                            |
| `network`                                                                             | *string*                                                                              | :heavy_check_mark:                                                                    | EVM starton supported network.                                                        | polygon-mumbai                                                                        |