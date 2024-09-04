# DeployFromTemplateSmartContractResponse

## Example Usage

```typescript
import { DeployFromTemplateSmartContractResponse } from "@starton/sdk/sdk/models/operations";

let value: DeployFromTemplateSmartContractResponse = {
    contentType: "<value>",
    statusCode: 622846,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `contentType`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | HTTP response content type for this operation                                                   |
| `deploySmartContractResponse`                                                                   | [shared.DeploySmartContractResponse](../../../sdk/models/shared/deploysmartcontractresponse.md) | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `statusCode`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | HTTP response status code for this operation                                                    |
| `rawResponse`                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                           | :heavy_check_mark:                                                                              | Raw HTTP response; suitable for custom response parsing                                         |