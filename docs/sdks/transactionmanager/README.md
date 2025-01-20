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

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.transactionManager.create({
    createTransactionDto: {
      network: "polygon-mumbai",
      signerWallet: "0x298e760768c8481780397eE28A127eAd584df4ee",
      speed: CreateTransactionDtoSpeed.Low,
      to: "0x298e760768c8481780397eE28A127eAd584df4ee",
      value: "0",
    },
    simulate: false,
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
import { transactionManagerCreate } from "@starton/sdk/funcs/transactionManagerCreate.js";
import { CreateTransactionDtoSpeed } from "@starton/sdk/sdk/models/shared";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await transactionManagerCreate(starton, {
    createTransactionDto: {
      network: "polygon-mumbai",
      signerWallet: "0x298e760768c8481780397eE28A127eAd584df4ee",
      speed: CreateTransactionDtoSpeed.Low,
      to: "0x298e760768c8481780397eE28A127eAd584df4ee",
      value: "0",
    },
    simulate: false,
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
| `request`                                                                                                                                                                      | [operations.CreateTransactionRequest](../../sdk/models/operations/createtransactionrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateTransactionResponse](../../sdk/models/operations/createtransactionresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.NonceExpired                   | 400                                   | application/json                      |
| errors.ExecutionWillFail              | 400                                   | application/json                      |
| errors.InvalidGasPrice                | 400                                   | application/json                      |
| errors.InsufficientFunds              | 400                                   | application/json                      |
| errors.AlreadyKnown                   | 400                                   | application/json                      |
| errors.UnpredictableGasLimit          | 400                                   | application/json                      |
| errors.BadRequestException            | 400                                   | application/json                      |
| errors.CouldNotFindResource           | 404                                   | application/json                      |
| errors.ReplacementGasPriceUnderpriced | 422                                   | application/json                      |
| errors.CouldNotAssignNonce            | 500                                   | application/json                      |
| errors.CouldNotBroadcast              | 500                                   | application/json                      |
| errors.CouldNotEstimateGasPrice       | 500                                   | application/json                      |
| errors.NoProviderForNetwork           | 500                                   | application/json                      |
| errors.CouldNotSign                   | 500                                   | application/json                      |
| errors.Unknown                        | 500                                   | application/json                      |
| errors.SDKError                       | 4XX, 5XX                              | \*/\*                                 |

## getAll

Retrieves a list of transactions.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.transactionManager.getAll({
    from: "0x298e760768c8481780397eE28A127eAd584df4ee",
    limit: 20,
    network: "polygon-mumbai",
    page: 0,
    to: "0x298e760768c8481780397eE28A127eAd584df4ee",
    transactionHash: "0x59d2053f9d73d9e7d81acab1890b7f53d1718d27947092a5962e49e59b2596b5",
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
import { transactionManagerGetAll } from "@starton/sdk/funcs/transactionManagerGetAll.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await transactionManagerGetAll(starton, {
    from: "0x298e760768c8481780397eE28A127eAd584df4ee",
    limit: 20,
    network: "polygon-mumbai",
    page: 0,
    to: "0x298e760768c8481780397eE28A127eAd584df4ee",
    transactionHash: "0x59d2053f9d73d9e7d81acab1890b7f53d1718d27947092a5962e49e59b2596b5",
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
| `request`                                                                                                                                                                      | [operations.GetAllTransactionRequest](../../sdk/models/operations/getalltransactionrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAllTransactionResponse](../../sdk/models/operations/getalltransactionresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequestException | 400                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getAvailableNonces

Gets all available nonces for a wallet, ensuring transaction integrity on the blockchain.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.transactionManager.getAvailableNonces({
    address: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
    network: "polygon-mumbai",
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
import { transactionManagerGetAvailableNonces } from "@starton/sdk/funcs/transactionManagerGetAvailableNonces.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await transactionManagerGetAvailableNonces(starton, {
    address: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
    network: "polygon-mumbai",
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
| `request`                                                                                                                                                                      | [operations.GetAvailableNoncesWalletRequest](../../sdk/models/operations/getavailablenonceswalletrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAvailableNoncesWalletResponse](../../sdk/models/operations/getavailablenonceswalletresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.BadRequestException   | 400                          | application/json             |
| errors.CouldNotFindResource  | 404                          | application/json             |
| errors.CouldNotProcessEntity | 422                          | application/json             |
| errors.CouldNotAssignNonce   | 500                          | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |

## getOne

Retrieves the details of a specific transaction using its unique identifier.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.transactionManager.getOne({
    id: "tx_1abfa87e04814cb7a669d614d1fe5f78",
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
import { transactionManagerGetOne } from "@starton/sdk/funcs/transactionManagerGetOne.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await transactionManagerGetOne(starton, {
    id: "tx_1abfa87e04814cb7a669d614d1fe5f78",
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
| `request`                                                                                                                                                                      | [operations.GetOneTransactionRequest](../../sdk/models/operations/getonetransactionrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetOneTransactionResponse](../../sdk/models/operations/getonetransactionresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BadRequestException  | 400                         | application/json            |
| errors.CouldNotFindResource | 404                         | application/json            |
| errors.SDKError             | 4XX, 5XX                    | \*/\*                       |

## resyncNonce

Updates the stored nonce values for a wallet, synchronizing them with the current blockchain state.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.transactionManager.resyncNonce({
    address: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
    network: "polygon-mumbai",
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
import { transactionManagerResyncNonce } from "@starton/sdk/funcs/transactionManagerResyncNonce.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await transactionManagerResyncNonce(starton, {
    address: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
    network: "polygon-mumbai",
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
| `request`                                                                                                                                                                      | [operations.ResyncNoncesWalletRequest](../../sdk/models/operations/resyncnonceswalletrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ResyncNoncesWalletResponse](../../sdk/models/operations/resyncnonceswalletresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.BadRequestException   | 400                          | application/json             |
| errors.CouldNotFindResource  | 404                          | application/json             |
| errors.CouldNotProcessEntity | 422                          | application/json             |
| errors.CouldNotAssignNonce   | 500                          | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |