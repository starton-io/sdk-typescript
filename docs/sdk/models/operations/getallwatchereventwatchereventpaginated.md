# GetAllWatcherEventWatcherEventPaginated

## Example Usage

```typescript
import { GetAllWatcherEventWatcherEventPaginated } from "@starton/sdk/sdk/models/operations";
import { WatcherEventStatus } from "@starton/sdk/sdk/models/shared";

let value: GetAllWatcherEventWatcherEventPaginated = {
  items: [
    {
      blockHash: "<value>",
      blockNumber: 114.27,
      id: "<id>",
      network: "<value>",
      payload: {},
      projectId: "<id>",
      status: WatcherEventStatus.Canceled,
      txHash: "<value>",
      watcherId: "<id>",
    },
  ],
  meta: {
    currentPage: 1469.47,
    itemCount: 795.22,
    itemsPerPage: 896.03,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.WatcherEvent](../../../sdk/models/shared/watcherevent.md)[]   | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |