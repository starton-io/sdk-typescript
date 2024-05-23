# Network
(*network*)

## Overview

Get all available network, or add your custom one (enterprise only)

### Available Operations

* [create](#create) - Create a new network (Enterprise)
* [delete](#delete) - Delete a network (Enterprise)
* [getAll](#getall) - Retrieve the list of supported networks
* [getOne](#getone) - Fetch a specific network
* [update](#update) - Update specific network details (Enterprise)

## create

Adds a new network to the project, available only for Enterprise plans.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";
import { ExplorerApiDtoType } from "@starton/sdk/sdk/models/shared";

const starton = new Starton({
  startonApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.network.create({
    blockchain: "optimism",
    chainId: 10,
    confirmationBlocks: 128,
    displayName: "optimism-private",
    enableExternalWallet: false,
    enableListener: false,
    enableRelayer: false,
    explorerApi: {
      apiKey: "<value>",
      type: ExplorerApiDtoType.Etherscan,
      url: "http://limp-pastry.org",
    },
    explorerUrl: "https://optimism-invalid-test-explorer.com",
    logo: "https://optimism-invalid-test-logo.com",
    name: "optimism-functional-tests1706709455336",
    symbol: "ETH",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.CreateNetworkDto](../../sdk/models/shared/createnetworkdto.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.CreateNetworkResponse](../../sdk/models/operations/createnetworkresponse.md)\>**
### Errors

| Error Object                     | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.CreateNetworkResponseBody | 400                              | application/json                 |
| errors.SDKError                  | 4xx-5xx                          | */*                              |

## delete

Removes a network from the project, available only for Enterprise plans.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  startonApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.network.delete({
    name: "optimism-functional-tests1706709455337",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteNetworkRequest](../../sdk/models/operations/deletenetworkrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.DeleteNetworkResponse](../../sdk/models/operations/deletenetworkresponse.md)\>**
### Errors

| Error Object                            | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.DeleteNetworkResponseBody        | 400                                     | application/json                        |
| errors.DeleteNetworkNetworkResponseBody | 404                                     | application/json                        |
| errors.SDKError                         | 4xx-5xx                                 | */*                                     |

## getAll

Fetches a paginated list of networks available in the current project.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  startonApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.network.getAll({
    limit: 20,
    origin: "<value>",
    page: 0,
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
| `request`                                                                                                                                                                      | [operations.GetAllNetworkRequest](../../sdk/models/operations/getallnetworkrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.GetAllNetworkResponse](../../sdk/models/operations/getallnetworkresponse.md)\>**
### Errors

| Error Object                     | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.GetAllNetworkResponseBody | 400                              | application/json                 |
| errors.SDKError                  | 4xx-5xx                          | */*                              |

## getOne

Retrieves detailed information about a specific network based on its name.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  startonApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.network.getOne({
    name: "optimism-functional-tests",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOneNetworkRequest](../../sdk/models/operations/getonenetworkrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.GetOneNetworkResponse](../../sdk/models/operations/getonenetworkresponse.md)\>**
### Errors

| Error Object                            | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.GetOneNetworkResponseBody        | 400                                     | application/json                        |
| errors.GetOneNetworkNetworkResponseBody | 404                                     | application/json                        |
| errors.SDKError                         | 4xx-5xx                                 | */*                                     |

## update

Modifies the details of a specific network based on its unique name. This feature is only available to Entreprise plans. 

### Example Usage

```typescript
import { Starton } from "@starton/sdk";
import { ExplorerApiDtoType } from "@starton/sdk/sdk/models/shared";

const starton = new Starton({
  startonApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.network.update({
    updateNetworkDto: {
      explorerApi: {
        apiKey: "<value>",
        type: ExplorerApiDtoType.Etherscan,
        url: "https://alarming-nondisclosure.com",
      },
    },
    name: "optimism-functional-tests",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateNetworkRequest](../../sdk/models/operations/updatenetworkrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.UpdateNetworkResponse](../../sdk/models/operations/updatenetworkresponse.md)\>**
### Errors

| Error Object                            | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.UpdateNetworkResponseBody        | 400                                     | application/json                        |
| errors.UpdateNetworkNetworkResponseBody | 404                                     | application/json                        |
| errors.SDKError                         | 4xx-5xx                                 | */*                                     |
