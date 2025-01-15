# GetAllWatcherWatcherPaginated

## Example Usage

```typescript
import { GetAllWatcherWatcherPaginated } from "@starton/sdk/sdk/models/operations";
import { TriggerType, WatcherType } from "@starton/sdk/sdk/models/shared";

let value: GetAllWatcherWatcherPaginated = {
  items: [
    {
      address: "8286 Fae Creek",
      confirmationsBlocks: 9818.3,
      id: "<id>",
      network: "<value>",
      paused: false,
      projectId: "<id>",
      triggerType: TriggerType.Transaction,
      type: WatcherType.Erc721EventTransfer,
      webhookUrl: "https://hoarse-challenge.net",
    },
  ],
  meta: {
    currentPage: 1898.48,
    itemCount: 5113.19,
    itemsPerPage: 2243.17,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Watcher](../../../sdk/models/shared/watcher.md)[]             | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |