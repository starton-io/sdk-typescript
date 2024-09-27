# GetAllNetworkResponse

## Example Usage

```typescript
import { GetAllNetworkResponse } from "@starton/sdk/sdk/models/operations";

let value: GetAllNetworkResponse = {
  contentType: "<value>",
  statusCode: 208,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response content type for this operation                                                               |
| `networkPaginated`                                                                                          | [operations.GetAllNetworkNetworkPaginated](../../../sdk/models/operations/getallnetworknetworkpaginated.md) | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `statusCode`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response status code for this operation                                                                |
| `rawResponse`                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                       | :heavy_check_mark:                                                                                          | Raw HTTP response; suitable for custom response parsing                                                     |