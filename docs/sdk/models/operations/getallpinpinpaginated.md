# GetAllPinPinPaginated

## Example Usage

```typescript
import { GetAllPinPinPaginated } from "@starton/sdk/sdk/models/operations";
import { Status } from "@starton/sdk/sdk/models/shared";

let value: GetAllPinPinPaginated = {
  items: [
    {
      id: "<id>",
      projectId: "<value>",
      status: Status.Pinning,
    },
  ],
  meta: {
    currentPage: 9255.97,
    itemCount: 8360.79,
    itemsPerPage: 710.36,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Pin](../../../sdk/models/shared/pin.md)[]                     | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |