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
      category: Category.Sale,
      description: "Down-sized value-added policy",
      githubUrl: "<value>",
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
    currentPage: 2539.42,
    itemCount: 2133.12,
    itemsPerPage: 5182.01,
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `items`                                                                               | [shared.SmartContractTemplate](../../../sdk/models/shared/smartcontracttemplate.md)[] | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `meta`                                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md)                 | :heavy_check_mark:                                                                    | N/A                                                                                   |