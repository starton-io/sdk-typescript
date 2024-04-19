# Rpc
(*network.rpc*)

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

const starton = new Starton({
  startonApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.network.rpc.create({
    createRpcDto: {
      url: "http://limp-pastry.org",
    },
    name: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateRpcRequest](../../sdk/models/operations/createrpcrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CreateRpcResponse](../../sdk/models/operations/createrpcresponse.md)>**
### Errors

| Error Object                           | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.CreateRpcResponseBody           | 400                                    | application/json                       |
| errors.CreateRpcNetworkRpcResponseBody | 404                                    | application/json                       |
| errors.SDKError                        | 4xx-5xx                                | */*                                    |

## delete

Delete a rpc for a specific network

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  startonApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.network.rpc.delete({
    id: "<id>",
    name: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteRpcRequest](../../sdk/models/operations/deleterpcrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeleteRpcResponse](../../sdk/models/operations/deleterpcresponse.md)>**
### Errors

| Error Object                           | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.DeleteRpcResponseBody           | 400                                    | application/json                       |
| errors.DeleteRpcNetworkRpcResponseBody | 404                                    | application/json                       |
| errors.SDKError                        | 4xx-5xx                                | */*                                    |

## getAll

Return all rpc for a specific network

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  startonApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.network.rpc.getAll({
    name: "<value>",
  });

  for await (const page of result) {
    // handle page
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


### Response

**Promise<[operations.GetAllRpcResponse](../../sdk/models/operations/getallrpcresponse.md)>**
### Errors

| Error Object                 | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.GetAllRpcResponseBody | 400                          | application/json             |
| errors.SDKError              | 4xx-5xx                      | */*                          |

## getOne

Return a specific rpc for a specific network

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  startonApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.network.rpc.getOne({
    id: "<id>",
    name: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOneRpcRequest](../../sdk/models/operations/getonerpcrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetOneRpcResponse](../../sdk/models/operations/getonerpcresponse.md)>**
### Errors

| Error Object                           | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.GetOneRpcResponseBody           | 400                                    | application/json                       |
| errors.GetOneRpcNetworkRpcResponseBody | 404                                    | application/json                       |
| errors.SDKError                        | 4xx-5xx                                | */*                                    |

## update

Update a specific rpc for a specific network

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  startonApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.network.rpc.update({
    updateRpcDto: {},
    id: "<id>",
    name: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateRpcRequest](../../sdk/models/operations/updaterpcrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.UpdateRpcResponse](../../sdk/models/operations/updaterpcresponse.md)>**
### Errors

| Error Object                           | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.UpdateRpcResponseBody           | 400                                    | application/json                       |
| errors.UpdateRpcNetworkRpcResponseBody | 404                                    | application/json                       |
| errors.SDKError                        | 4xx-5xx                                | */*                                    |
