# GetAllSmartContractSmartContractPaginated

## Example Usage

```typescript
import { GetAllSmartContractSmartContractPaginated } from "@starton/sdk/sdk/models/operations";
import { SmartContractStatus, State } from "@starton/sdk/sdk/models/shared";

let value: GetAllSmartContractSmartContractPaginated = {
  items: [
    {
      address: "16458 E 14th Street",
      id: "<id>",
      name: "<value>",
      network: "<value>",
      projectId: "<id>",
      state: State.ManualActionRequired,
      status: SmartContractStatus.InvalidGasPrice,
    },
  ],
  meta: {
    currentPage: 206.51,
    itemCount: 7583.79,
    itemsPerPage: 3200.17,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.SmartContract](../../../sdk/models/shared/smartcontract.md)[] | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |