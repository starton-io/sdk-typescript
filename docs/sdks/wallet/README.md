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

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.wallet.create({
    kmsId: "<value>",
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
import { walletCreate } from "@starton/sdk/funcs/walletCreate.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await walletCreate(starton, {
    kmsId: "<value>",
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
| `request`                                                                                                                                                                      | [shared.CreateWalletDto](../../sdk/models/shared/createwalletdto.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateWalletResponse](../../sdk/models/operations/createwalletresponse.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BadRequestException  | 400                         | application/json            |
| errors.MaximumWalletReached | 412                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## delete

Removes a wallet from the Key Management System.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.wallet.delete({
    address: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
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
import { walletDelete } from "@starton/sdk/funcs/walletDelete.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await walletDelete(starton, {
    address: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
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
| `request`                                                                                                                                                                      | [operations.DeleteWalletRequest](../../sdk/models/operations/deletewalletrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteWalletResponse](../../sdk/models/operations/deletewalletresponse.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BadRequestException  | 400                         | application/json            |
| errors.CouldNotFindResource | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## getAll

Fetches the list of wallets of the project

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.wallet.getAll({
    limit: 20,
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
import { walletGetAll } from "@starton/sdk/funcs/walletGetAll.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await walletGetAll(starton, {
    limit: 20,
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
| `request`                                                                                                                                                                      | [operations.GetAllWalletRequest](../../sdk/models/operations/getallwalletrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAllWalletResponse](../../sdk/models/operations/getallwalletresponse.md)\>**

### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequestException | 400                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |


## getOne

Retrieves information about a specific wallet.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.wallet.getOne({
    address: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
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
import { walletGetOne } from "@starton/sdk/funcs/walletGetOne.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await walletGetOne(starton, {
    address: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
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
| `request`                                                                                                                                                                      | [operations.GetOneWalletRequest](../../sdk/models/operations/getonewalletrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetOneWalletResponse](../../sdk/models/operations/getonewalletresponse.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BadRequestException  | 400                         | application/json            |
| errors.CouldNotFindResource | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## import

Imports a wallet using a Key Management System.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";
import { ImportProviderKeyDtoProvider } from "@starton/sdk/sdk/models/shared";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.wallet.import({
    provider: ImportProviderKeyDtoProvider.Aws,
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
import { walletImport } from "@starton/sdk/funcs/walletImport.js";
import { ImportProviderKeyDtoProvider } from "@starton/sdk/sdk/models/shared";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await walletImport(starton, {
    provider: ImportProviderKeyDtoProvider.Aws,
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
| `request`                                                                                                                                                                      | [shared.ImportProviderKeyDto](../../sdk/models/shared/importproviderkeydto.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ImportProviderKeyWalletResponse](../../sdk/models/operations/importproviderkeywalletresponse.md)\>**

### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequestException | 400                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |


## requestFaucet

Request tokens from the faucet, which can be used for testing and development purposes on testnet networks. Each user is limited to one request per day.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.wallet.requestFaucet({
    requireFaucetDto: {
      captchaToken: "testCaptchaToken",
      wallet: "0x298e760768c8481780397eE28A127eAd584df4ee",
    },
    network: "polygon-mumbai",
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
import { walletRequestFaucet } from "@starton/sdk/funcs/walletRequestFaucet.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await walletRequestFaucet(starton, {
    requireFaucetDto: {
      captchaToken: "testCaptchaToken",
      wallet: "0x298e760768c8481780397eE28A127eAd584df4ee",
    },
    network: "polygon-mumbai",
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
| `request`                                                                                                                                                                      | [operations.ClaimFaucetRequest](../../sdk/models/operations/claimfaucetrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ClaimFaucetResponse](../../sdk/models/operations/claimfaucetresponse.md)\>**

### Errors

| Error Object                     | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.BadRequestException       | 400                              | application/json                 |
| errors.MicroserviceNotResponding | 500                              | application/json                 |
| errors.CouldNotPerformRequest    | 500                              | application/json                 |
| errors.SDKError                  | 4xx-5xx                          | */*                              |


## resyncNonce

Updates the stored nonce values for a wallet, synchronizing them with the current blockchain state.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.wallet.resyncNonce({
    address: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
    network: "polygon-mumbai",
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
import { walletResyncNonce } from "@starton/sdk/funcs/walletResyncNonce.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await walletResyncNonce(starton, {
    address: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
    network: "polygon-mumbai",
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
| `request`                                                                                                                                                                      | [operations.ResyncNoncesWalletRequest](../../sdk/models/operations/resyncnonceswalletrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ResyncNoncesWalletResponse](../../sdk/models/operations/resyncnonceswalletresponse.md)\>**

### Errors

| Error Object                 | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.BadRequestException   | 400                          | application/json             |
| errors.CouldNotFindResource  | 404                          | application/json             |
| errors.CouldNotProcessEntity | 422                          | application/json             |
| errors.CouldNotAssignNonce   | 500                          | application/json             |
| errors.SDKError              | 4xx-5xx                      | */*                          |


## sign

Generates a cryptographic signature for a given message using a specified wallet.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.wallet.sign({
    signMessageDto: {
      message: "<value>",
    },
    address: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
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
import { walletSign } from "@starton/sdk/funcs/walletSign.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await walletSign(starton, {
    signMessageDto: {
      message: "<value>",
    },
    address: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
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
| `request`                                                                                                                                                                      | [operations.SignMessageWalletRequest](../../sdk/models/operations/signmessagewalletrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SignMessageWalletResponse](../../sdk/models/operations/signmessagewalletresponse.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BadRequestException  | 400                         | application/json            |
| errors.Forbidden            | 403                         | application/json            |
| errors.CouldNotFindResource | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## update

Modifies details of an existing wallet using its address.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.wallet.update({
    updateWalletDto: {},
    address: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
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
import { walletUpdate } from "@starton/sdk/funcs/walletUpdate.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await walletUpdate(starton, {
    updateWalletDto: {},
    address: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
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
| `request`                                                                                                                                                                      | [operations.UpdateWalletRequest](../../sdk/models/operations/updatewalletrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateWalletResponse](../../sdk/models/operations/updatewalletresponse.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BadRequestException  | 400                         | application/json            |
| errors.CouldNotFindResource | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |
