# GetAllWatcherWatcherPaginated

## Example Usage

```typescript
import { GetAllWatcherWatcherPaginated } from "@starton/sdk/sdk/models/operations";
import { TriggerType, WatcherType } from "@starton/sdk/sdk/models/shared";

let value: GetAllWatcherWatcherPaginated = {
  items: [
    {
      address: "18999 Grove Lane",
      confirmationsBlocks: 811.01,
      id: "<id>",
      network: "<value>",
      paused: false,
      projectId: "<id>",
      triggerType: TriggerType.Transaction,
      type: WatcherType.AddressReceivedNativeCurrency,
      webhookUrl: "https://awesome-quinoa.com/",
    },
  ],
  meta: {
    currentPage: 7705.81,
    itemCount: 1469.47,
    itemsPerPage: 795.22,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Watcher](../../../sdk/models/shared/watcher.md)[]             | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |