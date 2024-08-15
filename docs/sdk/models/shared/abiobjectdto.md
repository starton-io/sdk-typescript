# AbiObjectDto

## Example Usage

```typescript
import { AbiObjectDto, Type } from "@starton/sdk/sdk/models/shared";

let value: AbiObjectDto = {
    type: Type.Event,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `anonymous`                                                             | *boolean*                                                               | :heavy_minus_sign:                                                      | N/A                                                                     |
| `constant`                                                              | *boolean*                                                               | :heavy_minus_sign:                                                      | N/A                                                                     |
| `inputs`                                                                | [shared.AbiInputDto](../../../sdk/models/shared/abiinputdto.md)         | :heavy_minus_sign:                                                      | N/A                                                                     |
| `name`                                                                  | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `outputs`                                                               | [shared.AbiOutputDto](../../../sdk/models/shared/abioutputdto.md)       | :heavy_minus_sign:                                                      | N/A                                                                     |
| `payability`                                                            | *boolean*                                                               | :heavy_minus_sign:                                                      | N/A                                                                     |
| `stateMutability`                                                       | [shared.StateMutability](../../../sdk/models/shared/statemutability.md) | :heavy_minus_sign:                                                      | N/A                                                                     |
| `type`                                                                  | [shared.Type](../../../sdk/models/shared/type.md)                       | :heavy_check_mark:                                                      | N/A                                                                     |