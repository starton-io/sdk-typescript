# GetAllProjectMemberProjectMemberPaginated

## Example Usage

```typescript
import { GetAllProjectMemberProjectMemberPaginated } from "@starton/sdk/sdk/models/operations";

let value: GetAllProjectMemberProjectMemberPaginated = {
  items: [
    {
      email: "Mariano_Rice@gmail.com",
      fullName: "Perry Wilderman",
      id: "<id>",
    },
  ],
  meta: {
    currentPage: 8464.09,
    itemCount: 6994.79,
    itemsPerPage: 2974.37,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.ProjectMember](../../../sdk/models/shared/projectmember.md)[] | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |