# SmartContractManagement
(*smartContractManagement*)

## Overview

The Smart contract management is an abstraction on top of our **Transaction Manager** and it allow you to build and automate your smart contract transaction easily, without struggling with the ABI and params encoding. With it you can:
- **Deploying smart contract:** Deploy **audited** contract from our library or your own smart contract
- **Import existing contract:** Import existing contract to view them on your dashboard and interact with them.
- **Interact:** Read state and interact with the smart contract previously deployed or imported

### Available Operations

* [call](#call) - Execute Smart Contract Function
* [delete](#delete) - Delete a smart contract
* [deployFromBytecode](#deployfrombytecode) - Deploy from bytecode (your own contract)
* [deployFromTemplate](#deployfromtemplate) - Deploy Smart Contract from Template
* [getAll](#getall) - Get all smart contracts
* [getFunctions](#getfunctions) - Retrieves Smart Contract Functions and Events
* [getOne](#getone) - Get a single smart contract
* [importExisting](#importexisting) - Import Existing Smart Contract
* [read](#read) - Query Smart Contract Function
* [update](#update) - Update a smart contract

## call

Calls a specific function within a deployed smart contract, enabling interactions such as executing transactions or querying state. The method parameters, including the smart contract address and network, need to be specified.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.smartContractManagement.call({
    callDto: {
      customGas: {},
      functionName: "<value>",
      params: [
        "TestToken",
        "TEST",
        "1000000000000000000000000",
        "0x298e760768c8481780397eE28A127eAd584df4ee",
      ],
      signerWallet: "<value>",
    },
    address: "842 Lee Forges",
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
| `request`                                                                                                                                                                      | [operations.CallSmartContractRequest](../../sdk/models/operations/callsmartcontractrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CallSmartContractResponse](../../sdk/models/operations/callsmartcontractresponse.md)>**
### Errors

| Error Object                                                           | Status Code                                                            | Content Type                                                           |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| errors.CallSmartContractResponseBody                                   | 400                                                                    | application/json                                                       |
| errors.CallSmartContractSmartContractManagementResponseBody            | 404                                                                    | application/json                                                       |
| errors.CallSmartContractSmartContractManagementResponseResponseBody    | 422                                                                    | application/json                                                       |
| errors.CallSmartContractSmartContractManagementResponse500ResponseBody | 500                                                                    | application/json                                                       |
| errors.SDKError                                                        | 4xx-5xx                                                                | */*                                                                    |

## delete

Deletes a specific smart contract based on network and address.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.smartContractManagement.delete({
    address: "8653 Vaughn Hills",
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
| `request`                                                                                                                                                                      | [operations.DeleteSmartContractRequest](../../sdk/models/operations/deletesmartcontractrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeleteSmartContractResponse](../../sdk/models/operations/deletesmartcontractresponse.md)>**
### Errors

| Error Object                                                  | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.DeleteSmartContractResponseBody                        | 400                                                           | application/json                                              |
| errors.DeleteSmartContractSmartContractManagementResponseBody | 404                                                           | application/json                                              |
| errors.SDKError                                               | 4xx-5xx                                                       | */*                                                           |

## deployFromBytecode

Deploys a smart contract from bytecode and returns transaction details.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";
import { Type } from "@starton/sdk/sdk/models/shared";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.smartContractManagement.deployFromBytecode({
    deployFromBytecodeDto: {
      abi: [
        {
          inputs: {
            components: {},
            name: "<value>",
            type: "<value>",
          },
          outputs: {
            components: {},
            name: "<value>",
            type: "<value>",
          },
          type: Type.Event,
        },
      ],
      bytecode: "<value>",
      customGas: {},
      name: "<value>",
      network: "<value>",
      params: [
        "TestToken",
        "TEST",
        "1000000000000000000000000",
        "0x298e760768c8481780397eE28A127eAd584df4ee",
      ],
      signerWallet: "<value>",
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
| `request`                                                                                                                                                                      | [operations.DeployFromBytecodeSmartContractRequest](../../sdk/models/operations/deployfrombytecodesmartcontractrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeployFromBytecodeSmartContractResponse](../../sdk/models/operations/deployfrombytecodesmartcontractresponse.md)>**
### Errors

| Error Object                                                                         | Status Code                                                                          | Content Type                                                                         |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| errors.DeployFromBytecodeSmartContractResponseBody                                   | 400                                                                                  | application/json                                                                     |
| errors.DeployFromBytecodeSmartContractSmartContractManagementResponseBody            | 404                                                                                  | application/json                                                                     |
| errors.DeployFromBytecodeSmartContractSmartContractManagementResponseResponseBody    | 422                                                                                  | application/json                                                                     |
| errors.DeployFromBytecodeSmartContractSmartContractManagementResponse500ResponseBody | 500                                                                                  | application/json                                                                     |
| errors.SDKError                                                                      | 4xx-5xx                                                                              | */*                                                                                  |

## deployFromTemplate

Deploy from Starton audited smart contract template.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.smartContractManagement.deployFromTemplate({
    deployFromTemplateDto: {
      customGas: {},
      name: "TestToken",
      network: "polygon-mumbai",
      params: [
        "TestToken",
        "TEST",
        "1000000000000000000000000",
        "0x298e760768c8481780397eE28A127eAd584df4ee",
      ],
      signerWallet: "0x298e760768c8481780397eE28A127eAd584df4ee",
      templateId: "ERC20_META_TRANSACTION",
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
| `request`                                                                                                                                                                      | [operations.DeployFromTemplateSmartContractRequest](../../sdk/models/operations/deployfromtemplatesmartcontractrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeployFromTemplateSmartContractResponse](../../sdk/models/operations/deployfromtemplatesmartcontractresponse.md)>**
### Errors

| Error Object                                                                      | Status Code                                                                       | Content Type                                                                      |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| errors.DeployFromTemplateSmartContractResponseBody                                | 400                                                                               | application/json                                                                  |
| errors.DeployFromTemplateSmartContractSmartContractManagementResponseBody         | 404                                                                               | application/json                                                                  |
| errors.DeployFromTemplateSmartContractSmartContractManagementResponseResponseBody | 500                                                                               | application/json                                                                  |
| errors.SDKError                                                                   | 4xx-5xx                                                                           | */*                                                                               |

## getAll

Fetches and returns the list of smart contracts.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.smartContractManagement.getAll({});

  for await (const page of result) {
    // handle page
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAllSmartContractRequest](../../sdk/models/operations/getallsmartcontractrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetAllSmartContractResponse](../../sdk/models/operations/getallsmartcontractresponse.md)>**
### Errors

| Error Object                           | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.GetAllSmartContractResponseBody | 400                                    | application/json                       |
| errors.SDKError                        | 4xx-5xx                                | */*                                    |

## getFunctions

Provides a list of the available read and write functions, as well as events, of a specified smart contract. This can be used to understand how to interact with the contract.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.smartContractManagement.getFunctions({
    address: "18523 Buford Brook",
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
| `request`                                                                                                                                                                      | [operations.GetAvailableFunctionsSmartContractRequest](../../sdk/models/operations/getavailablefunctionssmartcontractrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetAvailableFunctionsSmartContractResponse](../../sdk/models/operations/getavailablefunctionssmartcontractresponse.md)>**
### Errors

| Error Object                                                                         | Status Code                                                                          | Content Type                                                                         |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| errors.GetAvailableFunctionsSmartContractResponseBody                                | 400                                                                                  | application/json                                                                     |
| errors.GetAvailableFunctionsSmartContractSmartContractManagementResponseBody         | 404                                                                                  | application/json                                                                     |
| errors.GetAvailableFunctionsSmartContractSmartContractManagementResponseResponseBody | 500                                                                                  | application/json                                                                     |
| errors.SDKError                                                                      | 4xx-5xx                                                                              | */*                                                                                  |

## getOne

Fetches details of a specific smart contract based on network and address.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.smartContractManagement.getOne({
    address: "43504 Penelope Expressway",
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
| `request`                                                                                                                                                                      | [operations.GetOneSmartContractRequest](../../sdk/models/operations/getonesmartcontractrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetOneSmartContractResponse](../../sdk/models/operations/getonesmartcontractresponse.md)>**
### Errors

| Error Object                                                  | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.GetOneSmartContractResponseBody                        | 400                                                           | application/json                                              |
| errors.GetOneSmartContractSmartContractManagementResponseBody | 404                                                           | application/json                                              |
| errors.SDKError                                               | 4xx-5xx                                                       | */*                                                           |

## importExisting

Import an already deployed smart contract into the project. This requires providing the smart contract’s address, ABI, and the network it’s deployed on.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";
import { StateMutability, Type } from "@starton/sdk/sdk/models/shared";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.smartContractManagement.importExisting({
    abi: [
      {
        inputs: {
          components: {},
          name: "<value>",
          type: "<value>",
        },
        outputs: {
          components: {},
          name: "<value>",
          type: "<value>",
        },
        stateMutability: StateMutability.Nonpayable,
        type: Type.Constructor,
      },
    ],
    address: "0x1C1f7A4d7F853856b964947CA03B92993D3ef40e",
    creationHash: "0x55b782a3db6d7b8c1949536110dcaaac69b4f83455959ab2839c09c2ed2ab1da",
    description: "Minimal smart contract description.",
    name: "Minimal Contract Test.",
    network: "polygon-mumbai",
    params: [
      "TestToken",
      "TEST",
      "1000000000000000000000000",
      "0x298e760768c8481780397eE28A127eAd584df4ee",
    ],
    templateId: "ERC721_META_TRANSACTION",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.ImportSmartContractDto](../../sdk/models/shared/importsmartcontractdto.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ImportExistingSmartContractResponse](../../sdk/models/operations/importexistingsmartcontractresponse.md)>**
### Errors

| Error Object                                   | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.ImportExistingSmartContractResponseBody | 400                                            | application/json                               |
| errors.SDKError                                | 4xx-5xx                                        | */*                                            |

## read

Reads data from a smart contract by calling one of its functions without making any state changes on the blockchain. This is typically used for retrieving information from the contract.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.smartContractManagement.read({
    readDto: {
      functionName: "<value>",
      params: [
        "TestToken",
        "TEST",
        "1000000000000000000000000",
        "0x298e760768c8481780397eE28A127eAd584df4ee",
      ],
    },
    address: "660 Romaine Highway",
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
| `request`                                                                                                                                                                      | [operations.ReadSmartContractRequest](../../sdk/models/operations/readsmartcontractrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ReadSmartContractResponse](../../sdk/models/operations/readsmartcontractresponse.md)>**
### Errors

| Error Object                                                        | Status Code                                                         | Content Type                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| errors.ReadSmartContractResponseBody                                | 400                                                                 | application/json                                                    |
| errors.ReadSmartContractSmartContractManagementResponseBody         | 404                                                                 | application/json                                                    |
| errors.ReadSmartContractSmartContractManagementResponseResponseBody | 500                                                                 | application/json                                                    |
| errors.SDKError                                                     | 4xx-5xx                                                             | */*                                                                 |

## update

Updates and returns details of a specific smart contract based on network and address.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await sdk.smartContractManagement.update({
    updateSmartContractDto: {
      metadata: {},
    },
    address: "050 Mellie Well",
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
| `request`                                                                                                                                                                      | [operations.UpdateSmartContractRequest](../../sdk/models/operations/updatesmartcontractrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.UpdateSmartContractResponse](../../sdk/models/operations/updatesmartcontractresponse.md)>**
### Errors

| Error Object                                                  | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.UpdateSmartContractResponseBody                        | 400                                                           | application/json                                              |
| errors.UpdateSmartContractSmartContractManagementResponseBody | 404                                                           | application/json                                              |
| errors.SDKError                                               | 4xx-5xx                                                       | */*                                                           |
