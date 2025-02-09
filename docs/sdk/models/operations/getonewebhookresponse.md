# GetOneWebhookResponse

## Example Usage

```typescript
import { GetOneWebhookResponse } from "@starton/sdk/sdk/models/operations";

let value: GetOneWebhookResponse = {
  contentType: "<value>",
  statusCode: 422,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `webhook`                                                             | [shared.Webhook](../../../sdk/models/shared/webhook.md)               | :heavy_minus_sign:                                                    | N/A                                                                   |