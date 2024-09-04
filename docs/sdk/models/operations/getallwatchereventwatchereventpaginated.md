# GetAllWatcherEventWatcherEventPaginated

## Example Usage

```typescript
import { GetAllWatcherEventWatcherEventPaginated } from "@starton/sdk/sdk/models/operations";
import { WatcherEventStatus } from "@starton/sdk/sdk/models/shared";

let value: GetAllWatcherEventWatcherEventPaginated = {
    items: [
        {
            blockHash: "<value>",
            blockNumber: 2647.3,
            id: "<id>",
            network: "<value>",
            payload: {},
            projectId: "<value>",
            status: WatcherEventStatus.PendingValidation,
            txHash: "<value>",
            watcherId: "<value>",
        },
    ],
    meta: {
        currentPage: 3978.21,
        itemCount: 5865.13,
        itemsPerPage: 5528.22,
    },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.WatcherEvent](../../../sdk/models/shared/watcherevent.md)[]   | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |