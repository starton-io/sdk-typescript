# GetAllWatcherEventWatcherEventPaginated

## Example Usage

```typescript
import { GetAllWatcherEventWatcherEventPaginated } from "@starton/sdk/sdk/models/operations";
import { WatcherEventStatus } from "@starton/sdk/sdk/models/shared";

let value: GetAllWatcherEventWatcherEventPaginated = {
  items: [
    {
      blockHash: "<value>",
      blockNumber: 4904.59,
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
    currentPage: 2543.56,
    itemCount: 580.29,
    itemsPerPage: 4344.17,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.WatcherEvent](../../../sdk/models/shared/watcherevent.md)[]   | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |