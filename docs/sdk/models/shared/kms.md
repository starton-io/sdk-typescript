# Kms

## Example Usage

```typescript
import { Kms, KmsProvider } from "@starton/sdk/sdk/models/shared";

let value: Kms = {
    credentials: {},
    id: "<id>",
    name: "<value>",
    projectId: "<value>",
    provider: KmsProvider.Vault,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `credentials`                                                                                 | [shared.KmsCredentials](../../../sdk/models/shared/kmscredentials.md)                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | [shared.KmsMetadata](../../../sdk/models/shared/kmsmetadata.md)                               | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `provider`                                                                                    | [shared.KmsProvider](../../../sdk/models/shared/kmsprovider.md)                               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `wallets`                                                                                     | [shared.Wallets](../../../sdk/models/shared/wallets.md)                                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |