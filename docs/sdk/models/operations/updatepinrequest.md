# UpdatePinRequest

## Example Usage

```typescript
import { UpdatePinRequest } from "@starton/sdk/sdk/models/operations";

let value: UpdatePinRequest = {
  updatePinDto: {},
  id: "req_f9701ff8e2ea4a1d964e0d6d40564801",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `updatePinDto`                                                                                                          | [shared.UpdatePinDto](../../../sdk/models/shared/updatepindto.md)                                                       | :heavy_check_mark:                                                                                                      | An object containing the fields you wish to update for the specified file. Can include 'name' and 'metadata'.           |                                                                                                                         |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The unique identifier for the file you wish to update. This ID is assigned upon the initial upload of the file to IPFS. | req_f9701ff8e2ea4a1d964e0d6d40564801                                                                                    |