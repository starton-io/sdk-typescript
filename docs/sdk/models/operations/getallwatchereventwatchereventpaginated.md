# GetAllWatcherEventWatcherEventPaginated

## Example Usage

```typescript
import { GetAllWatcherEventWatcherEventPaginated } from "@starton/sdk/sdk/models/operations";
import { WatcherEventStatus } from "@starton/sdk/sdk/models/shared";

let value: GetAllWatcherEventWatcherEventPaginated = {
  items: [
    {
      blockHash: "<value>",
      blockNumber: 2453.67,
      id: "<id>",
      network: "<value>",
      payload: {},
      projectId: "<id>",
      status: WatcherEventStatus.Completed,
      txHash: "<value>",
      watcherId: "<id>",
    },
  ],
  meta: {
    currentPage: 5573.69,
    itemCount: 8605.51,
    itemsPerPage: 7270.44,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.WatcherEvent](../../../sdk/models/shared/watcherevent.md)[]   | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |