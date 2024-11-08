# UpdateWatcherDto

## Example Usage

```typescript
import { UpdateWatcherDto } from "@starton/sdk/sdk/models/shared";

let value: UpdateWatcherDto = {
  confirmationsBlocks: 0,
  description: "watcher tests",
  metadata: {},
  name: "watcher tests",
  paused: true,
  webhookUrl: "",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `confirmationsBlocks`                                                                     | *number*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | 0                                                                                         |
| `description`                                                                             | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | watcher tests                                                                             |
| `metadata`                                                                                | [shared.UpdateWatcherDtoMetadata](../../../sdk/models/shared/updatewatcherdtometadata.md) | :heavy_minus_sign:                                                                        | N/A                                                                                       | {<br/>"test": "metadata"<br/>}                                                            |
| `name`                                                                                    | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | watcher tests                                                                             |
| `paused`                                                                                  | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | N/A                                                                                       | true                                                                                      |
| `webhookUrl`                                                                              | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |                                                                                           |