# GetAllWebhookWebhookPaginated

## Example Usage

```typescript
import { GetAllWebhookWebhookPaginated } from "@starton/sdk/sdk/models/operations";
import { WebhookAttemptStatus, WebhookStatus } from "@starton/sdk/sdk/models/shared";

let value: GetAllWebhookWebhookPaginated = {
  items: [
    {
      attempts: [
        {
          attempt: 2621.18,
          attemptDate: "<value>",
          id: "<id>",
          responsePayload: "<value>",
          responseStatusCode: 4561.41,
          status: WebhookAttemptStatus.FailedCall,
          webhookId: "<id>",
        },
      ],
      headers: {},
      id: "<id>",
      payload: {},
      projectId: "<id>",
      refId: "<id>",
      status: WebhookStatus.Failed,
      url: "https://hungry-conservative.net/",
    },
  ],
  meta: {
    currentPage: 568.48,
    itemCount: 6969.97,
    itemsPerPage: 7786.95,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Webhook](../../../sdk/models/shared/webhook.md)[]             | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |