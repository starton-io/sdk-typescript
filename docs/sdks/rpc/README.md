# Rpc
(*network.rpc*)

## Overview

### Available Operations

* [create](#create) - Add a rpc (enterprise)
* [delete](#delete) - Delete a rpc (enterprise)
* [getAll](#getall) - Get all rpc (enterprise)
* [getOne](#getone) - Get a rpc (enterprise)
* [update](#update) - Update a rpc (enterprise)

## create

Add a rpc for a specific network

### Example Usage

```typescript
import { Starton } from "@starton/sdk";
import { CreateRpcDtoType } from "@starton/sdk/sdk/models/shared";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.network.rpc.create({
    createRpcDto: {
      type: CreateRpcDtoType.Archive,
      url: "https://optimism.publicnode.com",
    },
    name: "optimism-functionnal-tests",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StartonCore } from "@starton/sdk/core.js";
import { networkRpcCreate } from "@starton/sdk/funcs/networkRpcCreate.js";
import { CreateRpcDtoType } from "@starton/sdk/sdk/models/shared";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await networkRpcCreate(starton, {
    createRpcDto: {
      type: CreateRpcDtoType.Archive,
      url: "https://optimism.publicnode.com",
    },
    name: "optimism-functionnal-tests",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateRpcRequest](../../sdk/models/operations/createrpcrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateRpcResponse](../../sdk/models/operations/createrpcresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BadRequestException  | 400                         | application/json            |
| errors.CouldNotFindResource | 404                         | application/json            |
| errors.SDKError             | 4XX, 5XX                    | \*/\*                       |

## delete

Delete a rpc for a specific network

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.network.rpc.delete({
    id: "rpc_c3d39f5a79be4599b0cdff667ffd1df3",
    name: "optimism-functionnal-tests",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StartonCore } from "@starton/sdk/core.js";
import { networkRpcDelete } from "@starton/sdk/funcs/networkRpcDelete.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await networkRpcDelete(starton, {
    id: "rpc_c3d39f5a79be4599b0cdff667ffd1df3",
    name: "optimism-functionnal-tests",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteRpcRequest](../../sdk/models/operations/deleterpcrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteRpcResponse](../../sdk/models/operations/deleterpcresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BadRequestException  | 400                         | application/json            |
| errors.CouldNotFindResource | 404                         | application/json            |
| errors.SDKError             | 4XX, 5XX                    | \*/\*                       |

## getAll

Return all rpc for a specific network

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.network.rpc.getAll({
    limit: 20,
    name: "optimism-functionnal-tests",
    page: 0,
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StartonCore } from "@starton/sdk/core.js";
import { networkRpcGetAll } from "@starton/sdk/funcs/networkRpcGetAll.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await networkRpcGetAll(starton, {
    limit: 20,
    name: "optimism-functionnal-tests",
    page: 0,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAllRpcRequest](../../sdk/models/operations/getallrpcrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAllRpcResponse](../../sdk/models/operations/getallrpcresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequestException | 400                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getOne

Return a specific rpc for a specific network

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.network.rpc.getOne({
    id: "rpc_7fb8f5ed4f1f4f06a18d86f78676d71d",
    name: "optimism-functionnal-tests",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StartonCore } from "@starton/sdk/core.js";
import { networkRpcGetOne } from "@starton/sdk/funcs/networkRpcGetOne.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await networkRpcGetOne(starton, {
    id: "rpc_7fb8f5ed4f1f4f06a18d86f78676d71d",
    name: "optimism-functionnal-tests",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOneRpcRequest](../../sdk/models/operations/getonerpcrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetOneRpcResponse](../../sdk/models/operations/getonerpcresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BadRequestException  | 400                         | application/json            |
| errors.CouldNotFindResource | 404                         | application/json            |
| errors.SDKError             | 4XX, 5XX                    | \*/\*                       |

## update

Update a specific rpc for a specific network

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.network.rpc.update({
    updateRpcDto: {
      url: "https://optimism.publicnode.com",
    },
    id: "rpc_7fb8f5ed4f1f4f06a18d86f78676d71d",
    name: "optimism-functionnal-tests",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StartonCore } from "@starton/sdk/core.js";
import { networkRpcUpdate } from "@starton/sdk/funcs/networkRpcUpdate.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await networkRpcUpdate(starton, {
    updateRpcDto: {
      url: "https://optimism.publicnode.com",
    },
    id: "rpc_7fb8f5ed4f1f4f06a18d86f78676d71d",
    name: "optimism-functionnal-tests",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateRpcRequest](../../sdk/models/operations/updaterpcrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateRpcResponse](../../sdk/models/operations/updaterpcresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BadRequestException  | 400                         | application/json            |
| errors.CouldNotFindResource | 404                         | application/json            |
| errors.SDKError             | 4XX, 5XX                    | \*/\*                       |