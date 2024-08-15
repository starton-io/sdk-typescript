# GetAllRpcRequest

## Example Usage

```typescript
import { GetAllRpcRequest } from "@starton/sdk/sdk/models/operations";

let value: GetAllRpcRequest = {
    limit: 20,
    name: "optimism-functionnal-tests",
    page: 0,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `limit`                                                                         | *number*                                                                        | :heavy_minus_sign:                                                              | Number of entities returned on each page. By default this number is set to 100. | 20                                                                              |
| `name`                                                                          | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             | optimism-functionnal-tests                                                      |
| `page`                                                                          | *number*                                                                        | :heavy_minus_sign:                                                              | Number of returned page. By default the returned page is the first.             | 0                                                                               |