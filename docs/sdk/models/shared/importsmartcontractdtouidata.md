# ImportSmartContractDtoUiData

## Example Usage

```typescript
import {
  ImportSmartContractDtoDeployMethod,
  ImportSmartContractDtoUiData,
  ImportSmartContractDtoVersion,
} from "@starton/sdk/sdk/models/shared";

let value: ImportSmartContractDtoUiData = {
  deployMethod: ImportSmartContractDtoDeployMethod.Kms,
  imported: false,
  version: ImportSmartContractDtoVersion.One,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `chainId`                                                                                                     | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `deployMethod`                                                                                                | [shared.ImportSmartContractDtoDeployMethod](../../../sdk/models/shared/importsmartcontractdtodeploymethod.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `deployType`                                                                                                  | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `imported`                                                                                                    | *boolean*                                                                                                     | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `version`                                                                                                     | [shared.ImportSmartContractDtoVersion](../../../sdk/models/shared/importsmartcontractdtoversion.md)           | :heavy_check_mark:                                                                                            | N/A                                                                                                           |