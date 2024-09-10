# GetOneSmartContractTemplateRequest

## Example Usage

```typescript
import { GetOneSmartContractTemplateRequest } from "@starton/sdk/sdk/models/operations";

let value: GetOneSmartContractTemplateRequest = {
  id: "ERC721_META_TRANSACTION",
  includeForm: true,
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | Unique identifier of the smart contract template. | ERC721_META_TRANSACTION                           |
| `includeForm`                                     | *boolean*                                         | :heavy_minus_sign:                                | N/A                                               | true                                              |