# GetAllRpcRpcPaginated

## Example Usage

```typescript
import { GetAllRpcRpcPaginated } from "@starton/sdk/sdk/models/operations";
import { RpcType } from "@starton/sdk/sdk/models/shared";

let value: GetAllRpcRpcPaginated = {
  items: [
    {
      id: "<id>",
      isPublic: false,
      networkName: "<value>",
      type: RpcType.Archive,
      url: "http://wiggly-plane.name",
    },
  ],
  meta: {
    currentPage: 6706.38,
    itemCount: 1709.09,
    itemsPerPage: 2103.82,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Rpc](../../../sdk/models/shared/rpc.md)[]                     | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |