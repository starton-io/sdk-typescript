# GetAllKmsKmsPaginated

## Example Usage

```typescript
import { GetAllKmsKmsPaginated } from "@starton/sdk/sdk/models/operations";
import { KmsProvider } from "@starton/sdk/sdk/models/shared";

let value: GetAllKmsKmsPaginated = {
  items: [
    {
      credentials: {},
      id: "<id>",
      name: "<value>",
      projectId: "<value>",
      provider: KmsProvider.Vault,
    },
  ],
  meta: {
    currentPage: 3595.08,
    itemCount: 4370.32,
    itemsPerPage: 6976.31,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Kms](../../../sdk/models/shared/kms.md)[]                     | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |