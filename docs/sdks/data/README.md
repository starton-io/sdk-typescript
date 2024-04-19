# Data
(*data*)

## Overview

Starton Blockchain data endpoints.

### Available Operations

* [getBalance](#getbalance) - Retrieve the native token balance of a specific blockchain address
* [getErc20Balance](#geterc20balance) - Retrieve the ERC20 token balance for a specific address
* [getGasPrice](#getgasprice) -  Retrieve the current gas prices

## getBalance

Checks the native balance of a given address on a specified blockchain network. 

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  startonApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.data.getBalance({
    address: "164 Runolfsson Via",
    network: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetBalanceAddressRequest](../../sdk/models/operations/getbalanceaddressrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetBalanceAddressResponse](../../sdk/models/operations/getbalanceaddressresponse.md)>**
### Errors

| Error Object                         | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.GetBalanceAddressResponseBody | 400                                  | application/json                     |
| errors.SDKError                      | 4xx-5xx                              | */*                                  |

## getErc20Balance

Fetches the balance of ERC20 tokens held by a specific address. You must specify the blockchain network, the contract address of the ERC20 token, and the address of the token holder. 

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  startonApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.data.getErc20Balance({
    address: "81562 Emard Grove",
    contractAddress: "<value>",
    network: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetBalanceErc20Request](../../sdk/models/operations/getbalanceerc20request.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetBalanceErc20Response](../../sdk/models/operations/getbalanceerc20response.md)>**
### Errors

| Error Object                       | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.GetBalanceErc20ResponseBody | 400                                | application/json                   |
| errors.SDKError                    | 4xx-5xx                            | */*                                |

## getGasPrice

Provides the current gas prices for the specified blockchain network, offering crucial information to estimate transaction costs.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  startonApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.data.getGasPrice({
    network: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAllGasPriceRequest](../../sdk/models/operations/getallgaspricerequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetAllGasPriceResponse](../../sdk/models/operations/getallgaspriceresponse.md)>**
### Errors

| Error Object                      | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.GetAllGasPriceResponseBody | 400                               | application/json                  |
| errors.SDKError                   | 4xx-5xx                           | */*                               |
