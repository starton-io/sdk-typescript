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
      description: "until twist oof ack flame turbulent",
      githubUrl: "https://thick-ocelot.com/",
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
    currentPage: 3472.34,
    itemCount: 1481.41,
    itemsPerPage: 9818.29,
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `items`                                                                               | [shared.SmartContractTemplate](../../../sdk/models/shared/smartcontracttemplate.md)[] | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `meta`                                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md)                 | :heavy_check_mark:                                                                    | N/A                                                                                   |