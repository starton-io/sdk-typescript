# GetAllInvitationInvitationPaginated

## Example Usage

```typescript
import { GetAllInvitationInvitationPaginated } from "@starton/sdk/sdk/models/operations";
import { InvitationRole } from "@starton/sdk/sdk/models/shared";

let value: GetAllInvitationInvitationPaginated = {
  items: [
    {
      email: "Ewell.Purdy@gmail.com",
      id: "<id>",
      projectId: "<id>",
      role: InvitationRole.Owner,
    },
  ],
  meta: {
    currentPage: 5772.29,
    itemCount: 2378.93,
    itemsPerPage: 9342.14,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Invitation](../../../sdk/models/shared/invitation.md)[]       | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |