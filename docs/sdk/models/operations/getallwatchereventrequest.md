# GetAllWatcherEventRequest

## Example Usage

```typescript
import { GetAllWatcherEventRequest } from "@starton/sdk/sdk/models/operations";

let value: GetAllWatcherEventRequest = {
  id: "ntif_f94e4a79611947d48254537a8861265d",
  limit: 20,
  page: 0,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `id`                                                                            | *string*                                                                        | :heavy_check_mark:                                                              | The unique identifier of the watcher from which you'll retrieve events.         | ntif_f94e4a79611947d48254537a8861265d                                           |
| `limit`                                                                         | *number*                                                                        | :heavy_minus_sign:                                                              | Number of entities returned on each page. By default this number is set to 100. | 20                                                                              |
| `page`                                                                          | *number*                                                                        | :heavy_minus_sign:                                                              | Number of returned page. By default the returned page is the first.             | 0                                                                               |