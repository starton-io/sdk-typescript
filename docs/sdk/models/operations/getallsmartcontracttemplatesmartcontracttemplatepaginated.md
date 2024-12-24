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
      category: Category.Tool,
      description: "consequently bouncy abaft",
      githubUrl: "https://reasonable-schnitzel.biz",
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
    currentPage: 5864.10,
    itemCount: 639.55,
    itemsPerPage: 4856.28,
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `items`                                                                               | [shared.SmartContractTemplate](../../../sdk/models/shared/smartcontracttemplate.md)[] | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `meta`                                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md)                 | :heavy_check_mark:                                                                    | N/A                                                                                   |