# CreateRpcRequest

## Example Usage

```typescript
import { CreateRpcRequest } from "@starton/sdk/sdk/models/operations";
import { CreateRpcDtoType } from "@starton/sdk/sdk/models/shared";

let value: CreateRpcRequest = {
  createRpcDto: {
    type: CreateRpcDtoType.Full,
    url: "https://polished-horde.com/",
  },
  name: "optimism-functionnal-tests",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `createRpcDto`                                                    | [shared.CreateRpcDto](../../../sdk/models/shared/createrpcdto.md) | :heavy_check_mark:                                                | N/A                                                               |                                                                   |
| `name`                                                            | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               | optimism-functionnal-tests                                        |