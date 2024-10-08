# GetAllWatcherWatcherPaginated

## Example Usage

```typescript
import { GetAllWatcherWatcherPaginated } from "@starton/sdk/sdk/models/operations";
import { TriggerType, WatcherType } from "@starton/sdk/sdk/models/shared";

let value: GetAllWatcherWatcherPaginated = {
  items: [
    {
      address: "4181 Fahey Club",
      confirmationsBlocks: 8621.92,
      id: "<id>",
      network: "<value>",
      paused: false,
      projectId: "<id>",
      triggerType: TriggerType.GasPrice,
      type: WatcherType.EventCustom,
      webhookUrl: "https://sorrowful-finger.com",
    },
  ],
  meta: {
    currentPage: 4072.41,
    itemCount: 2322.34,
    itemsPerPage: 1324.88,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Watcher](../../../sdk/models/shared/watcher.md)[]             | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |