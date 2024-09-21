# GetAllWatcherWatcherPaginated

## Example Usage

```typescript
import { GetAllWatcherWatcherPaginated } from "@starton/sdk/sdk/models/operations";
import { TriggerType, WatcherType } from "@starton/sdk/sdk/models/shared";

let value: GetAllWatcherWatcherPaginated = {
  items: [
    {
      address: "26529 Leuschke Overpass",
      confirmationsBlocks: 7301.22,
      id: "<id>",
      network: "<value>",
      paused: false,
      projectId: "<value>",
      triggerType: TriggerType.Transaction,
      type: WatcherType.EventTransfer,
      webhookUrl: "<value>",
    },
  ],
  meta: {
    currentPage: 2098.44,
    itemCount: 1861.93,
    itemsPerPage: 9443.72,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Watcher](../../../sdk/models/shared/watcher.md)[]             | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |