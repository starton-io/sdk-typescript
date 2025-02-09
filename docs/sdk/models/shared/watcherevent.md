# WatcherEvent

## Example Usage

```typescript
import { WatcherEvent, WatcherEventStatus } from "@starton/sdk/sdk/models/shared";

let value: WatcherEvent = {
  blockHash: "<value>",
  blockNumber: 8595.81,
  id: "<id>",
  network: "<value>",
  payload: {},
  projectId: "<id>",
  status: WatcherEventStatus.PendingValidation,
  txHash: "<value>",
  watcherId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `blockHash`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `blockNumber`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `network`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `payload`                                                                                     | [shared.Payload](../../../sdk/models/shared/payload.md)                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.WatcherEventStatus](../../../sdk/models/shared/watchereventstatus.md)                 | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `txHash`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `watcherId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |