# CreateWatcherDto

## Example Usage

```typescript
import { CreateWatcherDto, CreateWatcherDtoType } from "@starton/sdk/sdk/models/shared";

let value: CreateWatcherDto = {
  address: "0x298e760768c8481780397eE28A127eAd584df4ee",
  confirmationsBlocks: 0,
  description: "watcher tests",
  metadata: {},
  name: "watcher tests",
  network: "polygon-mumbai",
  type: CreateWatcherDtoType.AddressActivity,
  webhookUrl: "",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `address`                                                                                 | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | 0x298e760768c8481780397eE28A127eAd584df4ee                                                |
| `confirmationsBlocks`                                                                     | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | 0                                                                                         |
| `customEventAbi`                                                                          | [shared.CustomEventAbi](../../../sdk/models/shared/customeventabi.md)                     | :heavy_minus_sign:                                                                        | N/A                                                                                       |                                                                                           |
| `customFilters`                                                                           | [shared.CustomFilters](../../../sdk/models/shared/customfilters.md)                       | :heavy_minus_sign:                                                                        | N/A                                                                                       |                                                                                           |
| `description`                                                                             | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | watcher tests                                                                             |
| `metadata`                                                                                | [shared.CreateWatcherDtoMetadata](../../../sdk/models/shared/createwatcherdtometadata.md) | :heavy_minus_sign:                                                                        | N/A                                                                                       | {<br/>"test": "metadata"<br/>}                                                            |
| `name`                                                                                    | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       | watcher tests                                                                             |
| `network`                                                                                 | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       | polygon-mumbai                                                                            |
| `type`                                                                                    | [shared.CreateWatcherDtoType](../../../sdk/models/shared/createwatcherdtotype.md)         | :heavy_check_mark:                                                                        | N/A                                                                                       | ADDRESS_ACTIVITY                                                                          |
| `webhookUrl`                                                                              | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |                                                                                           |