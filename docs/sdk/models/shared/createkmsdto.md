# CreateKmsDto

## Example Usage

```typescript
import { CreateKmsDto, Provider } from "@starton/sdk/sdk/models/shared";

let value: CreateKmsDto = {
    name: "<value>",
    provider: Provider.Vault,
    secret: "<value>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `credentials`                                             | *shared.Credentials*                                      | :heavy_minus_sign:                                        | N/A                                                       |
| `metadata`                                                | [shared.Metadata](../../../sdk/models/shared/metadata.md) | :heavy_minus_sign:                                        | N/A                                                       |
| `name`                                                    | *string*                                                  | :heavy_check_mark:                                        | N/A                                                       |
| `provider`                                                | [shared.Provider](../../../sdk/models/shared/provider.md) | :heavy_check_mark:                                        | N/A                                                       |
| `secret`                                                  | *string*                                                  | :heavy_check_mark:                                        | N/A                                                       |