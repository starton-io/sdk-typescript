# GetAllProjectMemberProjectMemberPaginated

## Example Usage

```typescript
import { GetAllProjectMemberProjectMemberPaginated } from "@starton/sdk/sdk/models/operations";

let value: GetAllProjectMemberProjectMemberPaginated = {
  items: [
    {
      email: "Simeon91@yahoo.com",
      fullName: "Louis Crooks",
      id: "<id>",
    },
  ],
  meta: {
    currentPage: 1238.20,
    itemCount: 8480.08,
    itemsPerPage: 8073.19,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.ProjectMember](../../../sdk/models/shared/projectmember.md)[] | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |