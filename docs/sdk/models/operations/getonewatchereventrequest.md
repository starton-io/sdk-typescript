# GetOneWatcherEventRequest

## Example Usage

```typescript
import { GetOneWatcherEventRequest } from "@starton/sdk/sdk/models/operations";

let value: GetOneWatcherEventRequest = {
  eventId: "wevent_437e18e7470944099bd094e1c936e4cd",
  id: "ntif_f94e4a79611947d48254537a8861265d",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `eventId`                                   | *string*                                    | :heavy_check_mark:                          | The unique identifier of the watcher event. | wevent_437e18e7470944099bd094e1c936e4cd     |
| `id`                                        | *string*                                    | :heavy_check_mark:                          | The unique identifier of the watcher.       | ntif_f94e4a79611947d48254537a8861265d       |