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
import { Role } from "@starton/sdk/sdk/models/shared";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.project.member.invitation.create({
    email: "Jena.Nienow28@yahoo.com",
    role: Role.Owner,
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.CreateInvitationDto](../../sdk/models/shared/createinvitationdto.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CreateInvitationResponse](../../sdk/models/operations/createinvitationresponse.md)>**
### Errors

| Error Object                                               | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.CreateInvitationResponseBody                        | 400                                                        | application/json                                           |
| errors.CreateInvitationProjectMemberInvitationResponseBody | 401                                                        | application/json                                           |
| errors.SDKError                                            | 4xx-5xx                                                    | */*                                                        |

## delete

Deletes an invitation that was previously sent. The user needs to have the necessary permissions to delete invitations. The id of the invitation to be revoked must be provided in the request URL

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.project.member.invitation.delete({
    id: "<id>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteInvitationRequest](../../sdk/models/operations/deleteinvitationrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeleteInvitationResponse](../../sdk/models/operations/deleteinvitationresponse.md)>**
### Errors

| Error Object                                               | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.DeleteInvitationResponseBody                        | 400                                                        | application/json                                           |
| errors.DeleteInvitationProjectMemberInvitationResponseBody | 404                                                        | application/json                                           |
| errors.SDKError                                            | 4xx-5xx                                                    | */*                                                        |

## getAll

Fetch all member invitations for a project. The user needs to have the appropriate permissions to access this data.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.project.member.invitation.getAll({});

  for await (const page of result) {
    // handle page
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAllInvitationRequest](../../sdk/models/operations/getallinvitationrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetAllInvitationResponse](../../sdk/models/operations/getallinvitationresponse.md)>**
### Errors

| Error Object                        | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.GetAllInvitationResponseBody | 400                                 | application/json                    |
| errors.SDKError                     | 4xx-5xx                             | */*                                 |
