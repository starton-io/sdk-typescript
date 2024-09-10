# GetAllSettingRelayerRequest

## Example Usage

```typescript
import { GetAllSettingRelayerRequest } from "@starton/sdk/sdk/models/operations";

let value: GetAllSettingRelayerRequest = {
  network: "polygon-mumbai",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `network`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | The blockchain network for which the Relayer settings should be retrieved. | polygon-mumbai                                                             |