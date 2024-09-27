# GetAllInvitationInvitationPaginated

## Example Usage

```typescript
import { GetAllInvitationInvitationPaginated } from "@starton/sdk/sdk/models/operations";
import { InvitationRole } from "@starton/sdk/sdk/models/shared";

let value: GetAllInvitationInvitationPaginated = {
  items: [
    {
      email: "Cody34@gmail.com",
      id: "<id>",
      projectId: "<id>",
      role: InvitationRole.Owner,
    },
  ],
  meta: {
    currentPage: 7044.14,
    itemCount: 318.39,
    itemsPerPage: 1646.94,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Invitation](../../../sdk/models/shared/invitation.md)[]       | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |