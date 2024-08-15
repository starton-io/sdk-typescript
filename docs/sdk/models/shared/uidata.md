# UiData

## Example Usage

```typescript
import { DeployMethod, UiData, Version } from "@starton/sdk/sdk/models/shared";

let value: UiData = {
    deployMethod: DeployMethod.Kms,
    imported: false,
    version: Version.One,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `chainId`                                                         | *number*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `deployMethod`                                                    | [shared.DeployMethod](../../../sdk/models/shared/deploymethod.md) | :heavy_check_mark:                                                | N/A                                                               |
| `deployType`                                                      | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `imported`                                                        | *boolean*                                                         | :heavy_check_mark:                                                | N/A                                                               |
| `version`                                                         | [shared.Version](../../../sdk/models/shared/version.md)           | :heavy_check_mark:                                                | N/A                                                               |