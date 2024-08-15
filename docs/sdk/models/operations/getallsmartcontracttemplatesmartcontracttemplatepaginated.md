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
            category: Category.Sale,
            description: "Switchable discrete data-warehouse",
            githubUrl: "<value>",
            humanReadableAbi: ["<value>"],
            id: "<id>",
            name: "<value>",
            shortDescription: "<value>",
            tags: ["<value>"],
        },
    ],
    meta: {
        currentPage: 1831.91,
        itemCount: 3978.21,
        itemsPerPage: 5865.13,
    },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `items`                                                                               | [shared.SmartContractTemplate](../../../sdk/models/shared/smartcontracttemplate.md)[] | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `meta`                                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md)                 | :heavy_check_mark:                                                                    | N/A                                                                                   |