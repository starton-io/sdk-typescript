# Watcher

## Example Usage

```typescript
import { TriggerType, Watcher, WatcherType } from "@starton/sdk/sdk/models/shared";

let value: Watcher = {
  address: "7899 Hoeger Creek",
  confirmationsBlocks: 6849.34,
  id: "<id>",
  network: "<value>",
  paused: false,
  projectId: "<id>",
  triggerType: TriggerType.Event,
  type: WatcherType.EventApproval,
  webhookUrl: "https://mammoth-mom.biz/",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `address`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `confirmationsBlocks`                                                                         | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `customEventAbi`                                                                              | [shared.WatcherCustomEventAbi](../../../sdk/models/shared/watchercustomeventabi.md)[]         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `customFilters`                                                                               | [shared.WatcherCustomFilters](../../../sdk/models/shared/watchercustomfilters.md)             | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | [shared.WatcherMetadata](../../../sdk/models/shared/watchermetadata.md)                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `network`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `paused`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pausedReason`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `triggerType`                                                                                 | [shared.TriggerType](../../../sdk/models/shared/triggertype.md)                               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [shared.WatcherType](../../../sdk/models/shared/watchertype.md)                               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `webhookUrl`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |