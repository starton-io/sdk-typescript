# GetAllWatcherWatcherPaginated

## Example Usage

```typescript
import { GetAllWatcherWatcherPaginated } from "@starton/sdk/sdk/models/operations";
import { TriggerType, WatcherType } from "@starton/sdk/sdk/models/shared";

let value: GetAllWatcherWatcherPaginated = {
    items: [
        {
            address: "0165 Mckayla River",
            confirmationsBlocks: 2884.76,
            id: "<id>",
            network: "<value>",
            paused: false,
            projectId: "<value>",
            triggerType: TriggerType.GasPrice,
            type: WatcherType.EventTransfer,
            webhookUrl: "<value>",
        },
    ],
    meta: {
        currentPage: 2487.53,
        itemCount: 7561.07,
        itemsPerPage: 5761.57,
    },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Watcher](../../../sdk/models/shared/watcher.md)[]             | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |