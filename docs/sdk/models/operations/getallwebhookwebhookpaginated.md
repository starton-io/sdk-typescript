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
          attempt: 896.03,
          attemptDate: "<value>",
          id: "<id>",
          responsePayload: "<value>",
          responseStatusCode: 6720.48,
          status: WebhookAttemptStatus.RunningCall,
          webhookId: "<id>",
        },
      ],
      headers: {},
      id: "<id>",
      payload: {},
      projectId: "<id>",
      refId: "<id>",
      status: WebhookStatus.Successful,
      url: "https://torn-railway.biz",
    },
  ],
  meta: {
    currentPage: 1314.83,
    itemCount: 553.74,
    itemsPerPage: 3015.99,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Webhook](../../../sdk/models/shared/webhook.md)[]             | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |