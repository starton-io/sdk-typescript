# GetAllSmartContractSmartContractPaginated

## Example Usage

```typescript
import { GetAllSmartContractSmartContractPaginated } from "@starton/sdk/sdk/models/operations";
import { SmartContractStatus, State } from "@starton/sdk/sdk/models/shared";

let value: GetAllSmartContractSmartContractPaginated = {
  items: [
    {
      address: "742 Anderson Keys",
      id: "<id>",
      name: "<value>",
      network: "<value>",
      projectId: "<value>",
      state: State.Pending,
      status: SmartContractStatus.AlreadyKnown,
    },
  ],
  meta: {
    currentPage: 3777.52,
    itemCount: 1796.04,
    itemsPerPage: 246.79,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.SmartContract](../../../sdk/models/shared/smartcontract.md)[] | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |