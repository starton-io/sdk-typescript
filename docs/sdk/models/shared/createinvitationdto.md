# CreateInvitationDto

## Example Usage

```typescript
import { CreateInvitationDto, Role } from "@starton/sdk/sdk/models/shared";

let value: CreateInvitationDto = {
  email: "Bailee.Strosin32@hotmail.com",
  role: Role.Owner,
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `email`                                           | *string*                                          | :heavy_check_mark:                                | N/A                                               |
| `role`                                            | [shared.Role](../../../sdk/models/shared/role.md) | :heavy_check_mark:                                | N/A                                               |