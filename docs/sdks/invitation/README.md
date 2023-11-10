# Invitation
(*project.member.invitation*)

### Available Operations

* [create](#create) - Send an invitation to the project
* [delete](#delete) - Revoke a previously sent invitation.
* [getAll](#getall) - Retrieve a list of all member invitations for a specific project

## create

Invites a new member to the project. The user needs to have the necessary permissions to send invitations. The invitation details, including the recipient's email and role, must be provided in the request body.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";
import { Role } from "@starton/sdk/dist/sdk/models/shared";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.project.member.invitation.create({
    email: "Jena.Nienow28@yahoo.com",
    role: Role.Owner,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.CreateInvitationDto](../../sdk/models/shared/createinvitationdto.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CreateInvitationResponse](../../sdk/models/operations/createinvitationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## delete

Deletes an invitation that was previously sent. The user needs to have the necessary permissions to delete invitations. The id of the invitation to be revoked must be provided in the request URL

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.project.member.invitation.delete({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteInvitationRequest](../../sdk/models/operations/deleteinvitationrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteInvitationResponse](../../sdk/models/operations/deleteinvitationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getAll

Fetch all member invitations for a project. The user needs to have the appropriate permissions to access this data.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.project.member.invitation.getAll({});

  if (res.statusCode == 200) {
    do {
      // handle items

      res = res.next();
    } while (res);
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetAllInvitationRequest](../../sdk/models/operations/getallinvitationrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetAllInvitationResponse](../../sdk/models/operations/getallinvitationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
