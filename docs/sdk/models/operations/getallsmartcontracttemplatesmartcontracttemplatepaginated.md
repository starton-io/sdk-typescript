# GetAllSmartContractTemplateSmartContractTemplatePaginated

## Example Usage

```typescript
import { GetAllSmartContractTemplateSmartContractTemplatePaginated } from "@starton/sdk/sdk/models/operations";
import { Category } from "@starton/sdk/sdk/models/shared";

let value: GetAllSmartContractTemplateSmartContractTemplatePaginated = {
  items: [
    {
      abi: [
        {},
      ],
      blockchains: [
        "<value>",
      ],
      category: Category.Other,
      description: "aha roundabout embarrassment earth wildly",
      githubUrl: "https://weighty-tuxedo.net/",
      humanReadableAbi: [
        "<value>",
      ],
      id: "<id>",
      name: "<value>",
      shortDescription: "<value>",
      tags: [
        "<value>",
      ],
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

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `items`                                                                               | [shared.SmartContractTemplate](../../../sdk/models/shared/smartcontracttemplate.md)[] | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `meta`                                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md)                 | :heavy_check_mark:                                                                    | N/A                                                                                   |