# GetAllSmartContractTemplateRequest

## Example Usage

```typescript
import { Category, GetAllSmartContractTemplateRequest } from "@starton/sdk/sdk/models/operations";

let value: GetAllSmartContractTemplateRequest = {
  blockchain: "polygon",
  category: Category.Nft,
  includeCompilationDetails: true,
  includeForm: true,
  isActivated: true,
  isAudited: true,
  limit: 20,
  name: "ERC",
  page: 0,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `blockchain`                                                                    | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             | polygon                                                                         |
| `category`                                                                      | [operations.Category](../../../sdk/models/operations/category.md)               | :heavy_minus_sign:                                                              | N/A                                                                             | NFT                                                                             |
| `includeCompilationDetails`                                                     | *boolean*                                                                       | :heavy_minus_sign:                                                              | N/A                                                                             | true                                                                            |
| `includeForm`                                                                   | *boolean*                                                                       | :heavy_minus_sign:                                                              | N/A                                                                             | true                                                                            |
| `isActivated`                                                                   | *boolean*                                                                       | :heavy_minus_sign:                                                              | N/A                                                                             | true                                                                            |
| `isAudited`                                                                     | *boolean*                                                                       | :heavy_minus_sign:                                                              | N/A                                                                             | true                                                                            |
| `limit`                                                                         | *number*                                                                        | :heavy_minus_sign:                                                              | Number of entities returned on each page. By default this number is set to 100. | 20                                                                              |
| `name`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             | ERC                                                                             |
| `page`                                                                          | *number*                                                                        | :heavy_minus_sign:                                                              | Number of returned page. By default the returned page is the first.             | 0                                                                               |