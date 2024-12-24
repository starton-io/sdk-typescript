# Webhook

## Example Usage

```typescript
import { Webhook, WebhookAttemptStatus, WebhookStatus } from "@starton/sdk/sdk/models/shared";

let value: Webhook = {
  attempts: [
    {
      attempt: 1158.34,
      attemptDate: "<value>",
      id: "<id>",
      responsePayload: "<value>",
      responseStatusCode: 4570.59,
      status: WebhookAttemptStatus.FailedCall,
      webhookId: "<id>",
    },
  ],
  headers: {},
  id: "<id>",
  payload: {},
  projectId: "<id>",
  refId: "<id>",
  status: WebhookStatus.Successful,
  url: "https://clear-cut-dredger.info",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `attempts`                                                                                    | [shared.WebhookAttempt](../../../sdk/models/shared/webhookattempt.md)[]                       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `headers`                                                                                     | [shared.Headers](../../../sdk/models/shared/headers.md)                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `payload`                                                                                     | [shared.WebhookPayload](../../../sdk/models/shared/webhookpayload.md)                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `refId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.WebhookStatus](../../../sdk/models/shared/webhookstatus.md)                           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |