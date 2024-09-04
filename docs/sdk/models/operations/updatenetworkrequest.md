# UpdateNetworkRequest

## Example Usage

```typescript
import { UpdateNetworkRequest } from "@starton/sdk/sdk/models/operations";
import { ExplorerApiDtoType } from "@starton/sdk/sdk/models/shared";

let value: UpdateNetworkRequest = {
    updateNetworkDto: {
        explorerApi: {
            apiKey: "<value>",
            type: ExplorerApiDtoType.Etherscan,
            url: "http://periodic-glasses.org",
        },
    },
    name: "optimism-functional-tests",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `updateNetworkDto`                                                        | [shared.UpdateNetworkDto](../../../sdk/models/shared/updatenetworkdto.md) | :heavy_check_mark:                                                        | Network details to update                                                 |                                                                           |
| `name`                                                                    | *string*                                                                  | :heavy_check_mark:                                                        | The unique name of the network to update                                  | optimism-functional-tests                                                 |