# ExplorerApiDto

## Example Usage

```typescript
import { ExplorerApiDto, ExplorerApiDtoType } from "@starton/sdk/sdk/models/shared";

let value: ExplorerApiDto = {
    apiKey: "<value>",
    type: ExplorerApiDtoType.Etherscan,
    url: "https://triangular-apprehension.com",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `apiKey`                                                                      | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |                                                                               |
| `type`                                                                        | [shared.ExplorerApiDtoType](../../../sdk/models/shared/explorerapidtotype.md) | :heavy_check_mark:                                                            | N/A                                                                           | etherscan                                                                     |
| `url`                                                                         | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |                                                                               |