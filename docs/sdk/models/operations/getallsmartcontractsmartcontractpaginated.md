# GetAllSmartContractSmartContractPaginated

## Example Usage

```typescript
import { GetAllSmartContractSmartContractPaginated } from "@starton/sdk/sdk/models/operations";
import { SmartContractStatus, State } from "@starton/sdk/sdk/models/shared";

let value: GetAllSmartContractSmartContractPaginated = {
  items: [
    {
      address: "5892 Gislason Brook",
      id: "<id>",
      name: "<value>",
      network: "<value>",
      projectId: "<id>",
      state: State.Error,
      status: SmartContractStatus.CouldNotEstimateGasLimit,
    },
  ],
  meta: {
    currentPage: 3834.64,
    itemCount: 5883.17,
    itemsPerPage: 8310.48,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.SmartContract](../../../sdk/models/shared/smartcontract.md)[] | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |