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
import { ExplorerApiDtoType } from "@starton/sdk/dist/sdk/models/shared";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.network.create({
    blockchain: "string",
    chainId: 4865.89,
    confirmationBlocks: 4893.82,
    displayName: "string",
    explorerApi: {
      apiKey: "string",
      type: ExplorerApiDtoType.Etherscan,
      url: "https://timely-haven.biz",
    },
    gasPriceRecommendation: {
      defaultRelayerUnstuck: "string",
      lowest: "string",
      max: "string",
    },
    logo: "string",
    name: "string",
    symbol: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.CreateNetworkDto](../../sdk/models/shared/createnetworkdto.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.CreateNetworkResponse](../../sdk/models/operations/createnetworkresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## delete

Removes a network from the project, available only for Enterprise plans.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.network.delete({
    name: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeleteNetworkRequest](../../sdk/models/operations/deletenetworkrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteNetworkResponse](../../sdk/models/operations/deletenetworkresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getAll

Fetches a paginated list of networks available in the current project.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.network.getAll({});

  if (res.statusCode == 200) {
    do {
      // handle items

      res = res.next();
    } while (res);
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetAllNetworkRequest](../../sdk/models/operations/getallnetworkrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetAllNetworkResponse](../../sdk/models/operations/getallnetworkresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getOne

Retrieves detailed information about a specific network based on its name.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.network.getOne({
    name: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetOneNetworkRequest](../../sdk/models/operations/getonenetworkrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetOneNetworkResponse](../../sdk/models/operations/getonenetworkresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## update

Modifies the details of a specific network based on its unique name. This feature is only available to Entreprise plans. 

### Example Usage

```typescript
import { Starton } from "@starton/sdk";
import { ExplorerApiDtoType } from "@starton/sdk/dist/sdk/models/shared";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.network.update({
    updateNetworkDto: {
      explorerApi: {
        apiKey: "string",
        type: ExplorerApiDtoType.Etherscan,
        url: "https://alarming-nondisclosure.com",
      },
      gasPriceRecommendation: {
        defaultRelayerUnstuck: "string",
        lowest: "string",
        max: "string",
      },
    },
    name: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdateNetworkRequest](../../sdk/models/operations/updatenetworkrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateNetworkResponse](../../sdk/models/operations/updatenetworkresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |