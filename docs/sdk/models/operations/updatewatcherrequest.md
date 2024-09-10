# UpdateWatcherRequest

## Example Usage

```typescript
import { UpdateWatcherRequest } from "@starton/sdk/sdk/models/operations";

let value: UpdateWatcherRequest = {
  updateWatcherDto: {
    confirmationsBlocks: 0,
    description: "watcher tests",
    metadata: {},
    name: "watcher tests",
    paused: true,
    webhookUrl: "",
  },
  id: "ntif_f94e4a79611947d48254537a8861265d",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `updateWatcherDto`                                                        | [shared.UpdateWatcherDto](../../../sdk/models/shared/updatewatcherdto.md) | :heavy_check_mark:                                                        | Object containing the fields to update on the watcher.                    |                                                                           |
| `id`                                                                      | *string*                                                                  | :heavy_check_mark:                                                        | The unique identifier of the watcher to update.                           | ntif_f94e4a79611947d48254537a8861265d                                     |