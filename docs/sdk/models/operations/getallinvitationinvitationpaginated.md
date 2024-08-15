# GetAllInvitationInvitationPaginated

## Example Usage

```typescript
import { GetAllInvitationInvitationPaginated } from "@starton/sdk/sdk/models/operations";
import { InvitationRole } from "@starton/sdk/sdk/models/shared";

let value: GetAllInvitationInvitationPaginated = {
    items: [
        {
            email: "Avery_Mueller9@gmail.com",
            id: "<id>",
            projectId: "<value>",
            role: InvitationRole.Owner,
        },
    ],
    meta: {
        currentPage: 9719.45,
        itemCount: 9764.6,
        itemsPerPage: 8781.94,
    },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [shared.Invitation](../../../sdk/models/shared/invitation.md)[]       | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [shared.PaginationData](../../../sdk/models/shared/paginationdata.md) | :heavy_check_mark:                                                    | N/A                                                                   |