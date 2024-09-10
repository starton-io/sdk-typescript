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
      status: WebhookStatus.Retrying,
      url: "https://nimble-displacement.net",
    },
  ],
  meta: {
    currentPage: 7351.94,
    itemCount: 2884.76,
    itemsPerPage: 9621.89,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Webhook](../../../sdk/models/shared/webhook.md)[]             | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |