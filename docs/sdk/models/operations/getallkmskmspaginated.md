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
            provider: KmsProvider.Aws,
        },
    ],
    meta: {
        currentPage: 2645.55,
        itemCount: 1863.32,
        itemsPerPage: 7742.34,
    },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Kms](../../../sdk/models/shared/kms.md)[]                     | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |