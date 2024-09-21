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
      description: "Devolved incremental algorithm",
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
    currentPage: 1999.97,
    itemCount: 185.22,
    itemsPerPage: 7936.98,
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `items`                                                                               | [shared.SmartContractTemplate](../../../sdk/models/shared/smartcontracttemplate.md)[] | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `meta`                                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md)                 | :heavy_check_mark:                                                                    | N/A                                                                                   |