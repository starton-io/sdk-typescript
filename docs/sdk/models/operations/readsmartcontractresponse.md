# ReadSmartContractResponse

## Example Usage

```typescript
import { ReadSmartContractResponse } from "@starton/sdk/sdk/models/operations";

let value: ReadSmartContractResponse = {
  contentType: "<value>",
  readSmartContractResponse: {
    address: "17335 Princes Street",
    functionName: "<value>",
    network: "<value>",
    params: [
      "TestToken",
      "TEST",
      "1000000000000000000000000",
      "0x298e760768c8481780397eE28A127eAd584df4ee",
    ],
    response: [
      "<value>",
    ],
  },
  statusCode: 207,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | HTTP response content type for this operation                                               |
| `readSmartContractResponse`                                                                 | [shared.ReadSmartContractResponse](../../../sdk/models/shared/readsmartcontractresponse.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_check_mark:                                                                          | HTTP response status code for this operation                                                |
| `rawResponse`                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                       | :heavy_check_mark:                                                                          | Raw HTTP response; suitable for custom response parsing                                     |