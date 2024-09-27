# GetAllSmartContractSmartContractPaginated

## Example Usage

```typescript
import { GetAllSmartContractSmartContractPaginated } from "@starton/sdk/sdk/models/operations";
import { SmartContractStatus, State } from "@starton/sdk/sdk/models/shared";

let value: GetAllSmartContractSmartContractPaginated = {
  items: [
    {
      address: "2006 Leuschke Turnpike",
      id: "<id>",
      name: "<value>",
      network: "<value>",
      projectId: "<id>",
      state: State.Error,
      status: SmartContractStatus.GasPriceEstimated,
    },
  ],
  meta: {
    currentPage: 6630.78,
    itemCount: 2633.22,
    itemsPerPage: 206.51,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.SmartContract](../../../sdk/models/shared/smartcontract.md)[] | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |