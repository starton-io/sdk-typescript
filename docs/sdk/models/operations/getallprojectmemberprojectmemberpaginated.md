# GetAllProjectMemberProjectMemberPaginated

## Example Usage

```typescript
import { GetAllProjectMemberProjectMemberPaginated } from "@starton/sdk/sdk/models/operations";

let value: GetAllProjectMemberProjectMemberPaginated = {
  items: [
    {
      email: "Sanford84@gmail.com",
      fullName: "Brett Predovic",
      id: "<id>",
    },
  ],
  meta: {
    currentPage: 7220.56,
    itemCount: 8663.82,
    itemsPerPage: 9755.22,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.ProjectMember](../../../sdk/models/shared/projectmember.md)[] | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |