# GetOnePinRequest

## Example Usage

```typescript
import { GetOnePinRequest } from "@starton/sdk/sdk/models/operations";

let value: GetOnePinRequest = {
    id: "req_f9701ff8e2ea4a1d964e0d6d40564801",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The unique identifier of the file to be retrieved. This {id} is assigned when the file is initially uploaded to IPFS.  | req_f9701ff8e2ea4a1d964e0d6d40564801                                                                                   |
| `includeDirectoryContent`                                                                                              | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |