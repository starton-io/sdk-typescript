# GetAllPinRequest

## Example Usage

```typescript
import { GetAllPinRequest } from "@starton/sdk/sdk/models/operations";

let value: GetAllPinRequest = {
  limit: 20,
  page: 0,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `cid`                                                                           | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |
| `includeDirectoryContent`                                                       | *boolean*                                                                       | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |
| `limit`                                                                         | *number*                                                                        | :heavy_minus_sign:                                                              | Number of entities returned on each page. By default this number is set to 100. | 20                                                                              |
| `name`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |
| `page`                                                                          | *number*                                                                        | :heavy_minus_sign:                                                              | Number of returned page. By default the returned page is the first.             | 0                                                                               |
| `status`                                                                        | [operations.Status](../../../sdk/models/operations/status.md)                   | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |