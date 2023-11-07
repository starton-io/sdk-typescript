# TransactionManager
(*.transactionManager*)

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
import { CreateTransactionDtoSpeed } from "@starton/sdk/dist/sdk/models/shared";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.transactionManager.create({
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


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateTransactionRequest](../../models/operations/createtransactionrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateTransactionResponse](../../models/operations/createtransactionresponse.md)>**


## getAll

Retrieves a list of transactions.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.transactionManager.getAll({});


  if (res.statusCode == 200) {
    do {
      // handle items

      res = res.next();
    } while (res);
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetAllTransactionRequest](../../models/operations/getalltransactionrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetAllTransactionResponse](../../models/operations/getalltransactionresponse.md)>**


## getAvailableNonces

Gets all available nonces for a wallet, ensuring transaction integrity on the blockchain.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.transactionManager.getAvailableNonces({
    address: "92240 Harris Row",
    network: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetAvailableNoncesWalletRequest](../../models/operations/getavailablenonceswalletrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetAvailableNoncesWalletResponse](../../models/operations/getavailablenonceswalletresponse.md)>**


## getOne

Retrieves the details of a specific transaction using its unique identifier.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.transactionManager.getOne({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetOneTransactionRequest](../../models/operations/getonetransactionrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetOneTransactionResponse](../../models/operations/getonetransactionresponse.md)>**


## resyncNonce

Updates the stored nonce values for a wallet, synchronizing them with the current blockchain state.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.transactionManager.resyncNonce({
    address: "4925 Shanahan Parkways",
    network: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ResyncNoncesWalletRequest](../../models/operations/resyncnonceswalletrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ResyncNoncesWalletResponse](../../models/operations/resyncnonceswalletresponse.md)>**

