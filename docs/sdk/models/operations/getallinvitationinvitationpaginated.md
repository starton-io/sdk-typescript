# GetAllInvitationInvitationPaginated

## Example Usage

```typescript
import { GetAllInvitationInvitationPaginated } from "@starton/sdk/sdk/models/operations";
import { InvitationRole } from "@starton/sdk/sdk/models/shared";

let value: GetAllInvitationInvitationPaginated = {
  items: [
    {
      email: "Shannon_Reinger@yahoo.com",
      id: "<id>",
      projectId: "<value>",
      role: InvitationRole.Owner,
    },
  ],
  meta: {
    currentPage: 4238.55,
    itemCount: 6063.93,
    itemsPerPage: 191.93,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Invitation](../../../sdk/models/shared/invitation.md)[]       | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |