# GetAllWatcherEventWatcherEventPaginated

## Example Usage

```typescript
import { GetAllWatcherEventWatcherEventPaginated } from "@starton/sdk/sdk/models/operations";
import { WatcherEventStatus } from "@starton/sdk/sdk/models/shared";

let value: GetAllWatcherEventWatcherEventPaginated = {
    items: [
        {
            blockHash: "<value>",
            blockNumber: 5920.42,
            id: "<id>",
            network: "<value>",
            payload: {},
            projectId: "<value>",
            status: WatcherEventStatus.Canceled,
            txHash: "<value>",
            watcherId: "<value>",
        },
    ],
    meta: {
        currentPage: 5722.52,
        itemCount: 6389.21,
        itemsPerPage: 2230.81,
    },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.WatcherEvent](../../../sdk/models/shared/watcherevent.md)[]   | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |