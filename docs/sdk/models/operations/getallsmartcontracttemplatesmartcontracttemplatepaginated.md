# GetAllSmartContractTemplateSmartContractTemplatePaginated

## Example Usage

```typescript
import { GetAllSmartContractTemplateSmartContractTemplatePaginated } from "@starton/sdk/sdk/models/operations";
import { Category } from "@starton/sdk/sdk/models/shared";

let value: GetAllSmartContractTemplateSmartContractTemplatePaginated = {
    items: [
        {
            abi: [{}],
            blockchains: ["<value>"],
            category: Category.Nft,
            description: "Down-sized needs-based knowledge base",
            githubUrl: "<value>",
            humanReadableAbi: ["<value>"],
            id: "<id>",
            name: "<value>",
            shortDescription: "<value>",
            tags: ["<value>"],
        },
    ],
    meta: {
        currentPage: 5666.02,
        itemCount: 8651.03,
        itemsPerPage: 2653.89,
    },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `items`                                                                               | [shared.SmartContractTemplate](../../../sdk/models/shared/smartcontracttemplate.md)[] | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `meta`                                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md)                 | :heavy_check_mark:                                                                    | N/A                                                                                   |