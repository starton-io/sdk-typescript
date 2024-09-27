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
      projectId: "<id>",
      refId: "<id>",
      status: WebhookStatus.Retrying,
      url: "https://back-possession.net",
    },
  ],
  meta: {
    currentPage: 7774.08,
    itemCount: 2594.23,
    itemsPerPage: 3738.13,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Webhook](../../../sdk/models/shared/webhook.md)[]             | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |