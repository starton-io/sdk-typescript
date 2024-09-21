# GetAllTransactionResponse

## Example Usage

```typescript
import { GetAllTransactionResponse } from "@starton/sdk/sdk/models/operations";

let value: GetAllTransactionResponse = {
  contentType: "<value>",
  statusCode: 208876,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                               | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | HTTP response content type for this operation                                                                               |
| `statusCode`                                                                                                                | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | HTTP response status code for this operation                                                                                |
| `rawResponse`                                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                       | :heavy_check_mark:                                                                                                          | Raw HTTP response; suitable for custom response parsing                                                                     |
| `transactionPaginated`                                                                                                      | [operations.GetAllTransactionTransactionPaginated](../../../sdk/models/operations/getalltransactiontransactionpaginated.md) | :heavy_minus_sign:                                                                                                          | N/A                                                                                                                         |