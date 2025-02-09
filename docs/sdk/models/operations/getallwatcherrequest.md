# GetAllWatcherRequest

## Example Usage

```typescript
import { GetAllWatcherRequest, Type } from "@starton/sdk/sdk/models/operations";

let value: GetAllWatcherRequest = {
  address: "0x298e760768c8481780397eE28A127eAd584df4ee",
  confirmationsBlocks: 0,
  limit: 20,
  name: "watcher",
  network: "polygon-mumbai",
  page: 0,
  paused: false,
  type: Type.AddressActivity,
  webhookUrl: "https://webhook.site/db756457-9ca1-4975-9a3d-6257c9e0601e",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `address`                                                                       | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             | 0x298e760768c8481780397eE28A127eAd584df4ee                                      |
| `confirmationsBlocks`                                                           | *number*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             | 0                                                                               |
| `limit`                                                                         | *number*                                                                        | :heavy_minus_sign:                                                              | Number of entities returned on each page. By default this number is set to 100. | 20                                                                              |
| `name`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             | watcher                                                                         |
| `network`                                                                       | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             | polygon-mumbai                                                                  |
| `page`                                                                          | *number*                                                                        | :heavy_minus_sign:                                                              | Number of returned page. By default the returned page is the first.             | 0                                                                               |
| `paused`                                                                        | *boolean*                                                                       | :heavy_minus_sign:                                                              | N/A                                                                             | false                                                                           |
| `type`                                                                          | [operations.Type](../../../sdk/models/operations/type.md)                       | :heavy_minus_sign:                                                              | N/A                                                                             | ADDRESS_ACTIVITY                                                                |
| `webhookUrl`                                                                    | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             | https://webhook.site/db756457-9ca1-4975-9a3d-6257c9e0601e                       |