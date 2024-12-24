# SmartContractUiData

## Example Usage

```typescript
import { SmartContractDeployMethod, SmartContractUiData, SmartContractVersion } from "@starton/sdk/sdk/models/shared";

let value: SmartContractUiData = {
  deployMethod: SmartContractDeployMethod.Kms,
  imported: false,
  version: SmartContractVersion.One,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `chainId`                                                                                   | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `deployMethod`                                                                              | [shared.SmartContractDeployMethod](../../../sdk/models/shared/smartcontractdeploymethod.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `deployType`                                                                                | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `imported`                                                                                  | *boolean*                                                                                   | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `version`                                                                                   | [shared.SmartContractVersion](../../../sdk/models/shared/smartcontractversion.md)           | :heavy_check_mark:                                                                          | N/A                                                                                         |