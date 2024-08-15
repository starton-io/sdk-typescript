# Pin

## Example Usage

```typescript
import { Pin, Status } from "@starton/sdk/sdk/models/shared";

let value: Pin = {
    id: "<id>",
    projectId: "<value>",
    status: Status.Failed,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cid`                                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `delegates`                                                                                   | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `directoryContent`                                                                            | [shared.DirectoryContent](../../../sdk/models/shared/directorycontent.md)[]                   | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | [shared.PinMetadata](../../../sdk/models/shared/pinmetadata.md)                               | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `origins`                                                                                     | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `size`                                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.Status](../../../sdk/models/shared/status.md)                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [shared.PinType](../../../sdk/models/shared/pintype.md)                                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |