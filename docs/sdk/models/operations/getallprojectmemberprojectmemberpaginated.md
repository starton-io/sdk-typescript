# GetAllProjectMemberProjectMemberPaginated

## Example Usage

```typescript
import { GetAllProjectMemberProjectMemberPaginated } from "@starton/sdk/sdk/models/operations";

let value: GetAllProjectMemberProjectMemberPaginated = {
  items: [
    {
      email: "Levi_Stanton@gmail.com",
      fullName: "Dr. Melody Reichert",
      id: "<id>",
    },
  ],
  meta: {
    currentPage: 8558.03,
    itemCount: 117.14,
    itemsPerPage: 3599.78,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.ProjectMember](../../../sdk/models/shared/projectmember.md)[] | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |