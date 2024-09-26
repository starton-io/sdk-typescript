# GetAllWebhookWebhookPaginated

## Example Usage

```typescript
import { GetAllWebhookWebhookPaginated } from "@starton/sdk/sdk/models/operations";
import { WebhookStatus } from "@starton/sdk/sdk/models/shared";

let value: GetAllWebhookWebhookPaginated = {
  items: [
    {
      headers: {},
      id: "<id>",
      payload: {},
      projectId: "<value>",
      refId: "<value>",
      status: WebhookStatus.Canceled,
      url: "https://weighty-tuxedo.net/",
    },
  ],
  meta: {
    currentPage: 6304.48,
    itemCount: 8742.88,
    itemsPerPage: 2930.20,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Webhook](../../../sdk/models/shared/webhook.md)[]             | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |