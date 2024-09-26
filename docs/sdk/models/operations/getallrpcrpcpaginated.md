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
      url: "https://quiet-elevator.name/",
    },
  ],
  meta: {
    currentPage: 4287.69,
    itemCount: 1354.74,
    itemsPerPage: 2982.82,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Rpc](../../../sdk/models/shared/rpc.md)[]                     | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |