# Wallet
(*wallet*)

## Overview

Starton wallet service

### Available Operations

* [create](#create) - Create a new wallet
* [delete](#delete) - Delete a wallet
* [getAll](#getall) - Retrieve the list of Wallets
* [getOne](#getone) - Fetch Wallet Details
* [import](#import) - Import Wallet from Provider Key
* [requestFaucet](#requestfaucet) - Request tokens from faucet
* [resyncNonce](#resyncnonce) - Synchronize Nonces for a wallet
* [sign](#sign) - Sign a message
* [update](#update) - Update Wallet Information

## create

Create a new wallet for the project.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.wallet.create({
    kmsId: "<value>",
    metadata: {},
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.CreateWalletDto](../../sdk/models/shared/createwalletdto.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CreateWalletResponse](../../sdk/models/operations/createwalletresponse.md)>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.CreateWalletResponseBody | 400                             | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |

## delete

Removes a wallet from the Key Management System.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.wallet.delete({
    address: "8653 Vaughn Hills",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteWalletRequest](../../sdk/models/operations/deletewalletrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeleteWalletResponse](../../sdk/models/operations/deletewalletresponse.md)>**
### Errors

| Error Object                          | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.DeleteWalletResponseBody       | 400                                   | application/json                      |
| errors.DeleteWalletWalletResponseBody | 404                                   | application/json                      |
| errors.SDKError                       | 4xx-5xx                               | */*                                   |

## getAll

Fetches the list of wallets of the project

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.wallet.getAll({});

  for await (const page of result) {
    // handle page
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAllWalletRequest](../../sdk/models/operations/getallwalletrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetAllWalletResponse](../../sdk/models/operations/getallwalletresponse.md)>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.GetAllWalletResponseBody | 400                             | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |

## getOne

Retrieves information about a specific wallet.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.wallet.getOne({
    address: "43504 Penelope Expressway",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOneWalletRequest](../../sdk/models/operations/getonewalletrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetOneWalletResponse](../../sdk/models/operations/getonewalletresponse.md)>**
### Errors

| Error Object                          | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.GetOneWalletResponseBody       | 400                                   | application/json                      |
| errors.GetOneWalletWalletResponseBody | 404                                   | application/json                      |
| errors.SDKError                       | 4xx-5xx                               | */*                                   |

## import

Imports a wallet using a Key Management System.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";
import { ImportProviderKeyDtoProvider } from "@starton/sdk/sdk/models/shared";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.wallet.import({
    metadata: {},
    provider: ImportProviderKeyDtoProvider.Aws,
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.ImportProviderKeyDto](../../sdk/models/shared/importproviderkeydto.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ImportProviderKeyWalletResponse](../../sdk/models/operations/importproviderkeywalletresponse.md)>**
### Errors

| Error Object                               | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.ImportProviderKeyWalletResponseBody | 400                                        | application/json                           |
| errors.SDKError                            | 4xx-5xx                                    | */*                                        |

## requestFaucet

Request tokens from the faucet, which can be used for testing and development purposes on testnet networks. Each user is limited to one request per day.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.wallet.requestFaucet({
    requireFaucetDto: {
      captchaToken: "testCaptchaToken",
      wallet: "0x298e760768c8481780397eE28A127eAd584df4ee",
    },
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
| `request`                                                                                                                                                                      | [operations.ClaimFaucetRequest](../../sdk/models/operations/claimfaucetrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ClaimFaucetResponse](../../sdk/models/operations/claimfaucetresponse.md)>**
### Errors

| Error Object                         | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ClaimFaucetResponseBody       | 400                                  | application/json                     |
| errors.ClaimFaucetWalletResponseBody | 500                                  | application/json                     |
| errors.SDKError                      | 4xx-5xx                              | */*                                  |

## resyncNonce

Updates the stored nonce values for a wallet, synchronizing them with the current blockchain state.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.wallet.resyncNonce({
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

## sign

Generates a cryptographic signature for a given message using a specified wallet.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.wallet.sign({
    signMessageDto: {
      message: "<value>",
    },
    address: "924 Makenzie Curve",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SignMessageWalletRequest](../../sdk/models/operations/signmessagewalletrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.SignMessageWalletResponse](../../sdk/models/operations/signmessagewalletresponse.md)>**
### Errors

| Error Object                               | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.SignMessageWalletResponseBody       | 400                                        | application/json                           |
| errors.SignMessageWalletWalletResponseBody | 404                                        | application/json                           |
| errors.SDKError                            | 4xx-5xx                                    | */*                                        |

## update

Modifies details of an existing wallet using its address.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.wallet.update({
    updateWalletDto: {
      metadata: {},
    },
    address: "050 Mellie Well",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateWalletRequest](../../sdk/models/operations/updatewalletrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.UpdateWalletResponse](../../sdk/models/operations/updatewalletresponse.md)>**
### Errors

| Error Object                          | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.UpdateWalletResponseBody       | 400                                   | application/json                      |
| errors.UpdateWalletWalletResponseBody | 404                                   | application/json                      |
| errors.SDKError                       | 4xx-5xx                               | */*                                   |
