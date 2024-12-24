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
      type: RpcType.Full,
      url: "https://intrepid-technician.info",
    },
  ],
  meta: {
    currentPage: 4358.65,
    itemCount: 8919.23,
    itemsPerPage: 8061.94,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Rpc](../../../sdk/models/shared/rpc.md)[]                     | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |