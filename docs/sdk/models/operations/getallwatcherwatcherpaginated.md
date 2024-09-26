# GetAllWatcherWatcherPaginated

## Example Usage

```typescript
import { GetAllWatcherWatcherPaginated } from "@starton/sdk/sdk/models/operations";
import { TriggerType, WatcherType } from "@starton/sdk/sdk/models/shared";

let value: GetAllWatcherWatcherPaginated = {
  items: [
    {
      address: "51735 Burdette Lock",
      confirmationsBlocks: 3556.13,
      id: "<id>",
      network: "<value>",
      paused: false,
      projectId: "<value>",
      triggerType: TriggerType.GasPrice,
      type: WatcherType.EventMint,
      webhookUrl: "<value>",
    },
  ],
  meta: {
    currentPage: 7486.64,
    itemCount: 9037.20,
    itemsPerPage: 834.22,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Watcher](../../../sdk/models/shared/watcher.md)[]             | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |