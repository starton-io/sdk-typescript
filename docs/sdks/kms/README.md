# Kms
(*kms*)

## Overview

Starton kms service

### Available Operations

* [create](#create) - Create a new KMS entry
* [delete](#delete) - Remove a specific KMS entry
* [getAll](#getall) - Retrieve all Key Management Systems (KMS)
* [getOne](#getone) - Retrieve details of a specific KMS
* [update](#update) - Update the details of a KMS

## create

Add a new Key Management System entry to the project.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";
import { Provider } from "@starton/sdk/sdk/models/shared";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.kms.create({
    name: "<value>",
    provider: Provider.Aws,
    secret: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StartonCore } from "@starton/sdk/core.js";
import { kmsCreate } from "@starton/sdk/funcs/kmsCreate.js";
import { Provider } from "@starton/sdk/sdk/models/shared";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await kmsCreate(starton, {
    name: "<value>",
    provider: Provider.Vault,
    secret: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.CreateKmsDto](../../sdk/models/shared/createkmsdto.md)                                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateKmsResponse](../../sdk/models/operations/createkmsresponse.md)\>**

### Errors

| Error Object                 | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.CreateKmsResponseBody | 400                          | application/json             |
| errors.SDKError              | 4xx-5xx                      | */*                          |


## delete

Delete a Key Management System entry from the project. 

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.kms.delete({
    id: "kms_000",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StartonCore } from "@starton/sdk/core.js";
import { kmsDelete } from "@starton/sdk/funcs/kmsDelete.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await kmsDelete(starton, {
    id: "kms_000",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteKmsRequest](../../sdk/models/operations/deletekmsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteKmsResponse](../../sdk/models/operations/deletekmsresponse.md)\>**

### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.DeleteKmsResponseBody    | 400                             | application/json                |
| errors.DeleteKmsKmsResponseBody | 404                             | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |


## getAll

Provides a list of all Key Management Systems entries associated with the current project

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.kms.getAll({
    limit: 20,
    page: 0,
  });

  for await (const page of result) {
    // handle page
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StartonCore } from "@starton/sdk/core.js";
import { kmsGetAll } from "@starton/sdk/funcs/kmsGetAll.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await kmsGetAll(starton, {
    limit: 20,
    page: 0,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // handle page
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAllKmsRequest](../../sdk/models/operations/getallkmsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAllKmsResponse](../../sdk/models/operations/getallkmsresponse.md)\>**

### Errors

| Error Object                 | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.GetAllKmsResponseBody | 400                          | application/json             |
| errors.SDKError              | 4xx-5xx                      | */*                          |


## getOne

Returns information of a particular Key Management Systems entry using its unique identifier.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.kms.getOne({
    id: "kms_000",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StartonCore } from "@starton/sdk/core.js";
import { kmsGetOne } from "@starton/sdk/funcs/kmsGetOne.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await kmsGetOne(starton, {
    id: "kms_000",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOneKmsRequest](../../sdk/models/operations/getonekmsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetOneKmsResponse](../../sdk/models/operations/getonekmsresponse.md)\>**

### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.GetOneKmsResponseBody    | 400                             | application/json                |
| errors.GetOneKmsKmsResponseBody | 404                             | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |


## update

Updates changes to a particular Key Management Systems entry.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.kms.update({
    updateKmsDto: {},
    id: "kms_000",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StartonCore } from "@starton/sdk/core.js";
import { kmsUpdate } from "@starton/sdk/funcs/kmsUpdate.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await kmsUpdate(starton, {
    updateKmsDto: {},
    id: "kms_000",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateKmsRequest](../../sdk/models/operations/updatekmsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateKmsResponse](../../sdk/models/operations/updatekmsresponse.md)\>**

### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.UpdateKmsResponseBody    | 400                             | application/json                |
| errors.UpdateKmsKmsResponseBody | 404                             | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |
