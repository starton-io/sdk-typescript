# TransactionManager
(*transactionManager*)

## Overview

Starton Transaction Manager. Handle nonce issue, gas management, rebroadcasting etc.

### Available Operations

* [create](#create) - Create a new transaction
* [getAll](#getall) - Retrieve a List of Transactions
* [getAvailableNonces](#getavailablenonces) - Retrieve Available Nonces for a wallet
* [getOne](#getone) - Get a Specific Transaction
* [resyncNonce](#resyncnonce) - Synchronize Nonces for a wallet

## create

Create a new blockchain transaction

### Example Usage

```typescript
import { Starton } from "@starton/sdk";
import { CreateTransactionDtoSpeed } from "@starton/sdk/sdk/models/shared";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.transactionManager.create({
    createTransactionDto: {
      customGas: {},
      data: "0x1234",
      metadata: {},
      network: "polygon-mumbai",
      signerWallet: "0x298e760768c8481780397eE28A127eAd584df4ee",
      speed: CreateTransactionDtoSpeed.Low,
      to: "0x298e760768c8481780397eE28A127eAd584df4ee",
      value: "0",
    },
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateTransactionRequest](../../sdk/models/operations/createtransactionrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CreateTransactionResponse](../../sdk/models/operations/createtransactionresponse.md)>**
### Errors

| Error Object                                                      | Status Code                                                       | Content Type                                                      |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| errors.CreateTransactionResponseBody                              | 400                                                               | application/json                                                  |
| errors.CreateTransactionTransactionManagerResponseBody            | 404                                                               | application/json                                                  |
| errors.CreateTransactionTransactionManagerResponseResponseBody    | 422                                                               | application/json                                                  |
| errors.CreateTransactionTransactionManagerResponse500ResponseBody | 500                                                               | application/json                                                  |
| errors.SDKError                                                   | 4xx-5xx                                                           | */*                                                               |

## getAll

Retrieves a list of transactions.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.transactionManager.getAll({});

  for await (const page of result) {
    // handle page
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAllTransactionRequest](../../sdk/models/operations/getalltransactionrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetAllTransactionResponse](../../sdk/models/operations/getalltransactionresponse.md)>**
### Errors

| Error Object                         | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.GetAllTransactionResponseBody | 400                                  | application/json                     |
| errors.SDKError                      | 4xx-5xx                              | */*                                  |

## getAvailableNonces

Gets all available nonces for a wallet, ensuring transaction integrity on the blockchain.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.transactionManager.getAvailableNonces({
    address: "92240 Harris Row",
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
| `request`                                                                                                                                                                      | [operations.GetAvailableNoncesWalletRequest](../../sdk/models/operations/getavailablenonceswalletrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetAvailableNoncesWalletResponse](../../sdk/models/operations/getavailablenonceswalletresponse.md)>**
### Errors

| Error Object                                                             | Status Code                                                              | Content Type                                                             |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| errors.GetAvailableNoncesWalletResponseBody                              | 400                                                                      | application/json                                                         |
| errors.GetAvailableNoncesWalletTransactionManagerResponseBody            | 404                                                                      | application/json                                                         |
| errors.GetAvailableNoncesWalletTransactionManagerResponseResponseBody    | 422                                                                      | application/json                                                         |
| errors.GetAvailableNoncesWalletTransactionManagerResponse500ResponseBody | 500                                                                      | application/json                                                         |
| errors.SDKError                                                          | 4xx-5xx                                                                  | */*                                                                      |

## getOne

Retrieves the details of a specific transaction using its unique identifier.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.transactionManager.getOne({
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
| `request`                                                                                                                                                                      | [operations.GetOneTransactionRequest](../../sdk/models/operations/getonetransactionrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetOneTransactionResponse](../../sdk/models/operations/getonetransactionresponse.md)>**
### Errors

| Error Object                                           | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.GetOneTransactionResponseBody                   | 400                                                    | application/json                                       |
| errors.GetOneTransactionTransactionManagerResponseBody | 404                                                    | application/json                                       |
| errors.SDKError                                        | 4xx-5xx                                                | */*                                                    |

## resyncNonce

Updates the stored nonce values for a wallet, synchronizing them with the current blockchain state.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.transactionManager.resyncNonce({
    address: "4925 Shanahan Parkways",
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
| `request`                                                                                                                                                                      | [operations.ResyncNoncesWalletRequest](../../sdk/models/operations/resyncnonceswalletrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ResyncNoncesWalletResponse](../../sdk/models/operations/resyncnonceswalletresponse.md)>**
### Errors

| Error Object                                                          | Status Code                                                           | Content Type                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| errors.ResyncNoncesWalletResponseBody                                 | 400                                                                   | application/json                                                      |
| errors.ResyncNoncesWalletWalletResponseBody                           | 404                                                                   | application/json                                                      |
| errors.ResyncNoncesWalletWalletTransactionManagerResponseBody         | 422                                                                   | application/json                                                      |
| errors.ResyncNoncesWalletWalletTransactionManagerResponseResponseBody | 500                                                                   | application/json                                                      |
| errors.SDKError                                                       | 4xx-5xx                                                               | */*                                                                   |
