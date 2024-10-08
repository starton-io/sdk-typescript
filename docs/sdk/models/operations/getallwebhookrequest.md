# GetAllWebhookRequest

## Example Usage

```typescript
import { GetAllWebhookQueryParamStatus, GetAllWebhookRequest } from "@starton/sdk/sdk/models/operations";

let value: GetAllWebhookRequest = {
  limit: 20,
  page: 0,
  status: GetAllWebhookQueryParamStatus.Successful,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                     | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | Number of entities returned on each page. By default this number is set to 100.                             | 20                                                                                                          |
| `page`                                                                                                      | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | Number of returned page. By default the returned page is the first.                                         | 0                                                                                                           |
| `status`                                                                                                    | [operations.GetAllWebhookQueryParamStatus](../../../sdk/models/operations/getallwebhookqueryparamstatus.md) | :heavy_minus_sign:                                                                                          | N/A                                                                                                         | SUCCESSFUL                                                                                                  |