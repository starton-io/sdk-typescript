# ImportProviderKeyDto

## Example Usage

```typescript
import { ImportProviderKeyDto, ImportProviderKeyDtoProvider } from "@starton/sdk/sdk/models/shared";

let value: ImportProviderKeyDto = {
  provider: ImportProviderKeyDtoProvider.Aws,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `description`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `metadata`                                                                                        | [shared.ImportProviderKeyDtoMetadata](../../../sdk/models/shared/importproviderkeydtometadata.md) | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `name`                                                                                            | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `provider`                                                                                        | [shared.ImportProviderKeyDtoProvider](../../../sdk/models/shared/importproviderkeydtoprovider.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `providerKeyId`                                                                                   | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |