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
      status: Status.Deleted,
    },
  ],
  meta: {
    currentPage: 6818.20,
    itemCount: 3595.08,
    itemsPerPage: 4370.32,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Pin](../../../sdk/models/shared/pin.md)[]                     | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |