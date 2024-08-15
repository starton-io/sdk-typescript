# GetBalanceErc20Response

## Example Usage

```typescript
import { GetBalanceErc20Response } from "@starton/sdk/sdk/models/operations";

let value: GetBalanceErc20Response = {
    contentType: "<value>",
    erc20BalanceResponse: {
        balance: "0",
        contractAddress: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
        decimal: 6,
        formatted: "0.0",
        symbol: "USDT",
    },
    statusCode: 592845,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `erc20BalanceResponse`                                                            | [shared.Erc20BalanceResponse](../../../sdk/models/shared/erc20balanceresponse.md) | :heavy_minus_sign:                                                                | N/A                                                                               |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |