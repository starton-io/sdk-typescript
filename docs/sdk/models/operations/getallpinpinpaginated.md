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
      status: Status.Failed,
    },
  ],
  meta: {
    currentPage: 1433.53,
    itemCount: 9446.69,
    itemsPerPage: 5218.48,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Pin](../../../sdk/models/shared/pin.md)[]                     | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |