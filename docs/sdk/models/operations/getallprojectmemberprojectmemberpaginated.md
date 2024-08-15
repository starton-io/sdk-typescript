# GetAllProjectMemberProjectMemberPaginated

## Example Usage

```typescript
import { GetAllProjectMemberProjectMemberPaginated } from "@starton/sdk/sdk/models/operations";

let value: GetAllProjectMemberProjectMemberPaginated = {
    items: [
        {
            email: "Deion33@yahoo.com",
            fullName: "Kayla O'Kon",
            id: "<id>",
        },
    ],
    meta: {
        currentPage: 7783.46,
        itemCount: 1965.82,
        itemsPerPage: 9495.72,
    },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.ProjectMember](../../../sdk/models/shared/projectmember.md)[] | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |