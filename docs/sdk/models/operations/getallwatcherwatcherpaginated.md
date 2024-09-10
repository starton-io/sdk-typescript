# GetAllWatcherWatcherPaginated

## Example Usage

```typescript
import { GetAllWatcherWatcherPaginated } from "@starton/sdk/sdk/models/operations";
import { TriggerType, WatcherType } from "@starton/sdk/sdk/models/shared";

let value: GetAllWatcherWatcherPaginated = {
  items: [
    {
      address: "509 Emily Avenue",
      confirmationsBlocks: 6674.11,
      id: "<id>",
      network: "<value>",
      paused: false,
      projectId: "<value>",
      triggerType: TriggerType.GasPrice,
      type: WatcherType.AddressActivity,
      webhookUrl: "<value>",
    },
  ],
  meta: {
    currentPage: 6471.74,
    itemCount: 7163.27,
    itemsPerPage: 8413.86,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Watcher](../../../sdk/models/shared/watcher.md)[]             | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |