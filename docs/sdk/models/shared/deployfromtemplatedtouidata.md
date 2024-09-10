# DeployFromTemplateDtoUiData

## Example Usage

```typescript
import {
  DeployFromTemplateDtoDeployMethod,
  DeployFromTemplateDtoUiData,
  DeployFromTemplateDtoVersion,
} from "@starton/sdk/sdk/models/shared";

let value: DeployFromTemplateDtoUiData = {
  deployMethod: DeployFromTemplateDtoDeployMethod.Web3,
  imported: false,
  version: DeployFromTemplateDtoVersion.One,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `chainId`                                                                                                   | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `deployMethod`                                                                                              | [shared.DeployFromTemplateDtoDeployMethod](../../../sdk/models/shared/deployfromtemplatedtodeploymethod.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `deployType`                                                                                                | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `imported`                                                                                                  | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `version`                                                                                                   | [shared.DeployFromTemplateDtoVersion](../../../sdk/models/shared/deployfromtemplatedtoversion.md)           | :heavy_check_mark:                                                                                          | N/A                                                                                                         |