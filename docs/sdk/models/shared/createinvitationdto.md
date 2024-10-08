# CreateInvitationDto

## Example Usage

```typescript
import { CreateInvitationDto, Role } from "@starton/sdk/sdk/models/shared";

let value: CreateInvitationDto = {
  email: "Brendan_Hoppe@yahoo.com",
  role: Role.Owner,
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `email`                                           | *string*                                          | :heavy_check_mark:                                | N/A                                               |
| `role`                                            | [shared.Role](../../../sdk/models/shared/role.md) | :heavy_check_mark:                                | N/A                                               |