# GetAllSmartContractSmartContractPaginated

## Example Usage

```typescript
import { GetAllSmartContractSmartContractPaginated } from "@starton/sdk/sdk/models/operations";
import { SmartContractStatus, State } from "@starton/sdk/sdk/models/shared";

let value: GetAllSmartContractSmartContractPaginated = {
    items: [
        {
            address: "41638 Terrill Causeway",
            id: "<id>",
            name: "<value>",
            network: "<value>",
            projectId: "<value>",
            state: State.Success,
            status: SmartContractStatus.AlreadyKnown,
        },
    ],
    meta: {
        currentPage: 5651.89,
        itemCount: 5666.02,
        itemsPerPage: 8651.03,
    },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.SmartContract](../../../sdk/models/shared/smartcontract.md)[] | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |