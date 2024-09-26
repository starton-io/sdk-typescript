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
* [encode](#encode) - Encode data for a Smart Contract call
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

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.smartContractManagement.call({
    callDto: {
      functionName: "mint",
      params: [
        "0x298e760768c8481780397eE28A127eAd584df4ee",
        "1000000000000000000",
      ],
      signerWallet: "0x298e760768c8481780397eE28A127eAd584df4ee",
    },
    address: "0x820f8728E32519b9C91B2406BF48AF80711aFecD",
    network: "polygon-mumbai",
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
import { smartContractManagementCall } from "@starton/sdk/funcs/smartContractManagementCall.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await smartContractManagementCall(starton, {
    callDto: {
      functionName: "mint",
      params: [
        "0x298e760768c8481780397eE28A127eAd584df4ee",
        "1000000000000000000",
      ],
      signerWallet: "0x298e760768c8481780397eE28A127eAd584df4ee",
    },
    address: "0x820f8728E32519b9C91B2406BF48AF80711aFecD",
    network: "polygon-mumbai",
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
| `request`                                                                                                                                                                      | [operations.CallSmartContractRequest](../../sdk/models/operations/callsmartcontractrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CallSmartContractResponse](../../sdk/models/operations/callsmartcontractresponse.md)\>**

### Errors

| Error Object                          | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.InvalidBytecode                | 400                                   | application/json                      |
| errors.InvalidAbi                     | 400                                   | application/json                      |
| errors.InvalidFunction                | 400                                   | application/json                      |
| errors.MissingArgument                | 400                                   | application/json                      |
| errors.UnexpectedArgument             | 400                                   | application/json                      |
| errors.InvalidArgument                | 400                                   | application/json                      |
| errors.CallException                  | 400                                   | application/json                      |
| errors.NumericFault                   | 400                                   | application/json                      |
| errors.EnsNotSupported                | 400                                   | application/json                      |
| errors.UnpredictableGasLimit          | 400                                   | application/json                      |
| errors.ExecutionWillFail              | 400                                   | application/json                      |
| errors.InvalidGasPrice                | 400                                   | application/json                      |
| errors.InsufficientFunds              | 400                                   | application/json                      |
| errors.AlreadyKnown                   | 400                                   | application/json                      |
| errors.NonceExpired                   | 400                                   | application/json                      |
| errors.ContractNotYetDeployed         | 400                                   | application/json                      |
| errors.BadRequestException            | 400                                   | application/json                      |
| errors.CouldNotFindResource           | 404                                   | application/json                      |
| errors.ReplacementGasPriceUnderpriced | 422                                   | application/json                      |
| errors.Unknown                        | 500                                   | application/json                      |
| errors.CouldNotBroadcast              | 500                                   | application/json                      |
| errors.NoProviderForNetwork           | 500                                   | application/json                      |
| errors.CouldNotEstimateGasPrice       | 500                                   | application/json                      |
| errors.CouldNotAssignNonce            | 500                                   | application/json                      |
| errors.CouldNotSign                   | 500                                   | application/json                      |
| errors.SDKError                       | 4xx-5xx                               | */*                                   |


## delete

Deletes a specific smart contract based on network and address.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.smartContractManagement.delete({
    address: "8653 Vaughn Hills",
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
import { smartContractManagementDelete } from "@starton/sdk/funcs/smartContractManagementDelete.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await smartContractManagementDelete(starton, {
    address: "8653 Vaughn Hills",
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
| `request`                                                                                                                                                                      | [operations.DeleteSmartContractRequest](../../sdk/models/operations/deletesmartcontractrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteSmartContractResponse](../../sdk/models/operations/deletesmartcontractresponse.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BadRequestException  | 400                         | application/json            |
| errors.CouldNotFindResource | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## deployFromBytecode

Deploys a smart contract from bytecode and returns transaction details.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";
import { StateMutability, Type } from "@starton/sdk/sdk/models/shared";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.smartContractManagement.deployFromBytecode({
    deployFromBytecodeDto: {
      abi: [
        {
          inputs: {
            name: "<value>",
            type: "<value>",
          },
          stateMutability: StateMutability.Nonpayable,
          type: Type.Constructor,
        },
      ],
      bytecode: "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220543af7de4c3e10d25def66e7de6e0ecaf799771e226c96cf4620087585c071fd64736f6c63430008120033",
      name: "Minimal test contract",
      network: "polygon-mumbai",
      params: [
        "<value>",
      ],
      signerWallet: "0x298e760768c8481780397eE28A127eAd584df4ee",
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
import { smartContractManagementDeployFromBytecode } from "@starton/sdk/funcs/smartContractManagementDeployFromBytecode.js";
import { StateMutability, Type } from "@starton/sdk/sdk/models/shared";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await smartContractManagementDeployFromBytecode(starton, {
    deployFromBytecodeDto: {
      abi: [
        {
          inputs: {
            name: "<value>",
            type: "<value>",
          },
          stateMutability: StateMutability.Nonpayable,
          type: Type.Constructor,
        },
      ],
      bytecode: "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220543af7de4c3e10d25def66e7de6e0ecaf799771e226c96cf4620087585c071fd64736f6c63430008120033",
      name: "Minimal test contract",
      network: "polygon-mumbai",
      params: [
        5392.97,
      ],
      signerWallet: "0x298e760768c8481780397eE28A127eAd584df4ee",
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
| `request`                                                                                                                                                                      | [operations.DeployFromBytecodeSmartContractRequest](../../sdk/models/operations/deployfrombytecodesmartcontractrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeployFromBytecodeSmartContractResponse](../../sdk/models/operations/deployfrombytecodesmartcontractresponse.md)\>**

### Errors

| Error Object                          | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.InvalidBytecode                | 400                                   | application/json                      |
| errors.InvalidAbi                     | 400                                   | application/json                      |
| errors.MissingArgument                | 400                                   | application/json                      |
| errors.UnexpectedArgument             | 400                                   | application/json                      |
| errors.InvalidArgument                | 400                                   | application/json                      |
| errors.CallException                  | 400                                   | application/json                      |
| errors.NumericFault                   | 400                                   | application/json                      |
| errors.EnsNotSupported                | 400                                   | application/json                      |
| errors.ExecutionWillFail              | 400                                   | application/json                      |
| errors.InvalidGasPrice                | 400                                   | application/json                      |
| errors.InsufficientFunds              | 400                                   | application/json                      |
| errors.AlreadyKnown                   | 400                                   | application/json                      |
| errors.NonceExpired                   | 400                                   | application/json                      |
| errors.UnpredictableGasLimit          | 400                                   | application/json                      |
| errors.BadRequestException            | 400                                   | application/json                      |
| errors.CouldNotFindResource           | 404                                   | application/json                      |
| errors.ReplacementGasPriceUnderpriced | 422                                   | application/json                      |
| errors.Unknown                        | 500                                   | application/json                      |
| errors.NoProviderForNetwork           | 500                                   | application/json                      |
| errors.CouldNotEstimateGasPrice       | 500                                   | application/json                      |
| errors.CouldNotSign                   | 500                                   | application/json                      |
| errors.CouldNotAssignNonce            | 500                                   | application/json                      |
| errors.CouldNotBroadcast              | 500                                   | application/json                      |
| errors.SDKError                       | 4xx-5xx                               | */*                                   |


## deployFromTemplate

Deploy from Starton audited smart contract template.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.smartContractManagement.deployFromTemplate({
    deployFromTemplateDto: {
      name: "TestToken",
      network: "polygon-mumbai",
      params: [
        "TestToken",
        "TEST",
        "1000000000000000000000000",
        "0x298e760768c8481780397eE28A127eAd584df4ee",
      ],
      signerWallet: "0x298e760768c8481780397eE28A127eAd584df4ee",
      templateId: "ERC20_MINT_META_TRANSACTION",
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
import { smartContractManagementDeployFromTemplate } from "@starton/sdk/funcs/smartContractManagementDeployFromTemplate.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await smartContractManagementDeployFromTemplate(starton, {
    deployFromTemplateDto: {
      name: "TestToken",
      network: "polygon-mumbai",
      params: [
        "TestToken",
        "TEST",
        "1000000000000000000000000",
        "0x298e760768c8481780397eE28A127eAd584df4ee",
      ],
      signerWallet: "0x298e760768c8481780397eE28A127eAd584df4ee",
      templateId: "ERC20_MINT_META_TRANSACTION",
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
| `request`                                                                                                                                                                      | [operations.DeployFromTemplateSmartContractRequest](../../sdk/models/operations/deployfromtemplatesmartcontractrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeployFromTemplateSmartContractResponse](../../sdk/models/operations/deployfromtemplatesmartcontractresponse.md)\>**

### Errors

| Error Object                     | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.SmartContractNotActivated | 400                              | application/json                 |
| errors.InvalidBytecode           | 400                              | application/json                 |
| errors.InvalidAbi                | 400                              | application/json                 |
| errors.MissingArgument           | 400                              | application/json                 |
| errors.UnexpectedArgument        | 400                              | application/json                 |
| errors.InvalidArgument           | 400                              | application/json                 |
| errors.CallException             | 400                              | application/json                 |
| errors.NumericFault              | 400                              | application/json                 |
| errors.EnsNotSupported           | 400                              | application/json                 |
| errors.ExecutionWillFail         | 400                              | application/json                 |
| errors.InvalidGasPrice           | 400                              | application/json                 |
| errors.InsufficientFunds         | 400                              | application/json                 |
| errors.AlreadyKnown              | 400                              | application/json                 |
| errors.NonceExpired              | 400                              | application/json                 |
| errors.UnpredictableGasLimit     | 400                              | application/json                 |
| errors.BadRequestException       | 400                              | application/json                 |
| errors.CouldNotFindResource      | 404                              | application/json                 |
| errors.MicroserviceNotResponding | 500                              | application/json                 |
| errors.Unknown                   | 500                              | application/json                 |
| errors.CouldNotEstimateGasPrice  | 500                              | application/json                 |
| errors.CouldNotBroadcast         | 500                              | application/json                 |
| errors.CouldNotAssignNonce       | 500                              | application/json                 |
| errors.CouldNotSign              | 500                              | application/json                 |
| errors.NoProviderForNetwork      | 500                              | application/json                 |
| errors.SDKError                  | 4xx-5xx                          | */*                              |


## encode

Display the encoded data that is sent to a smart contract

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.smartContractManagement.encode({
    encodeDto: {
      functionName: "mint",
      params: [
        "0x298e760768c8481780397eE28A127eAd584df4ee",
        "1000000000000000000",
      ],
    },
    address: "0x820f8728E32519b9C91B2406BF48AF80711aFecD",
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
import { smartContractManagementEncode } from "@starton/sdk/funcs/smartContractManagementEncode.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await smartContractManagementEncode(starton, {
    encodeDto: {
      functionName: "mint",
      params: [
        "0x298e760768c8481780397eE28A127eAd584df4ee",
        "1000000000000000000",
      ],
    },
    address: "0x820f8728E32519b9C91B2406BF48AF80711aFecD",
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
| `request`                                                                                                                                                                      | [operations.EncodeSmartContractRequest](../../sdk/models/operations/encodesmartcontractrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EncodeSmartContractResponse](../../sdk/models/operations/encodesmartcontractresponse.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.InvalidBytecode      | 400                         | application/json            |
| errors.InvalidAbi           | 400                         | application/json            |
| errors.InvalidFunction      | 400                         | application/json            |
| errors.MissingArgument      | 400                         | application/json            |
| errors.UnexpectedArgument   | 400                         | application/json            |
| errors.InvalidArgument      | 400                         | application/json            |
| errors.CallException        | 400                         | application/json            |
| errors.NumericFault         | 400                         | application/json            |
| errors.ExecutionWillFail    | 400                         | application/json            |
| errors.EnsNotSupported      | 400                         | application/json            |
| errors.BadRequestException  | 400                         | application/json            |
| errors.CouldNotFindResource | 404                         | application/json            |
| errors.Unknown              | 500                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## getAll

Fetches and returns the list of smart contracts.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.smartContractManagement.getAll({
    address: "0x820f8728E32519b9C91B2406BF48AF80711aFecD",
    includeAbi: true,
    includeCompilationDetails: true,
    limit: 20,
    network: "polygon-mumbai",
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
import { smartContractManagementGetAll } from "@starton/sdk/funcs/smartContractManagementGetAll.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await smartContractManagementGetAll(starton, {
    address: "0x820f8728E32519b9C91B2406BF48AF80711aFecD",
    includeAbi: true,
    includeCompilationDetails: true,
    limit: 20,
    network: "polygon-mumbai",
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
| `request`                                                                                                                                                                      | [operations.GetAllSmartContractRequest](../../sdk/models/operations/getallsmartcontractrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAllSmartContractResponse](../../sdk/models/operations/getallsmartcontractresponse.md)\>**

### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequestException | 400                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |


## getFunctions

Provides a list of the available read and write functions, as well as events, of a specified smart contract. This can be used to understand how to interact with the contract.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.smartContractManagement.getFunctions({
    address: "0x820f8728E32519b9C91B2406BF48AF80711aFecD",
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
import { smartContractManagementGetFunctions } from "@starton/sdk/funcs/smartContractManagementGetFunctions.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await smartContractManagementGetFunctions(starton, {
    address: "0x820f8728E32519b9C91B2406BF48AF80711aFecD",
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
| `request`                                                                                                                                                                      | [operations.GetAvailableFunctionsSmartContractRequest](../../sdk/models/operations/getavailablefunctionssmartcontractrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAvailableFunctionsSmartContractResponse](../../sdk/models/operations/getavailablefunctionssmartcontractresponse.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.InvalidBytecode      | 400                         | application/json            |
| errors.InvalidAbi           | 400                         | application/json            |
| errors.BadRequestException  | 400                         | application/json            |
| errors.CouldNotFindResource | 404                         | application/json            |
| errors.Unknown              | 500                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## getOne

Fetches details of a specific smart contract based on network and address.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.smartContractManagement.getOne({
    address: "0x820f8728E32519b9C91B2406BF48AF80711aFecD",
    includeAbi: true,
    includeCompilationDetails: true,
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
import { smartContractManagementGetOne } from "@starton/sdk/funcs/smartContractManagementGetOne.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await smartContractManagementGetOne(starton, {
    address: "0x820f8728E32519b9C91B2406BF48AF80711aFecD",
    includeAbi: true,
    includeCompilationDetails: true,
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
| `request`                                                                                                                                                                      | [operations.GetOneSmartContractRequest](../../sdk/models/operations/getonesmartcontractrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetOneSmartContractResponse](../../sdk/models/operations/getonesmartcontractresponse.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BadRequestException  | 400                         | application/json            |
| errors.CouldNotFindResource | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## importExisting

Import an already deployed smart contract into the project. This requires providing the smart contract’s address, ABI, and the network it’s deployed on.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";
import { StateMutability, Type } from "@starton/sdk/sdk/models/shared";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.smartContractManagement.importExisting({
    abi: [
      {
        inputs: {
          name: "<value>",
          type: "<value>",
        },
        stateMutability: StateMutability.Nonpayable,
        type: Type.Constructor,
      },
    ],
    address: "0x1C1f7A4d7F853856b964947CA03B92993D3ef40e",
    creationHash: "0x55b782a3db6d7b8c1949536110dcaaac69b4f83455959ab2839c09c2ed2ab1da",
    description: "Test minimal contract tests.",
    name: "Minimal contract tests.",
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
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StartonCore } from "@starton/sdk/core.js";
import { smartContractManagementImportExisting } from "@starton/sdk/funcs/smartContractManagementImportExisting.js";
import { StateMutability, Type } from "@starton/sdk/sdk/models/shared";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await smartContractManagementImportExisting(starton, {
    abi: [
      {
        inputs: {
          name: "<value>",
          type: "<value>",
        },
        stateMutability: StateMutability.Nonpayable,
        type: Type.Constructor,
      },
    ],
    address: "0x1C1f7A4d7F853856b964947CA03B92993D3ef40e",
    creationHash: "0x55b782a3db6d7b8c1949536110dcaaac69b4f83455959ab2839c09c2ed2ab1da",
    description: "Test minimal contract tests.",
    name: "Minimal contract tests.",
    network: "polygon-mumbai",
    params: [
      "TestToken",
      "TEST",
      "1000000000000000000000000",
      "0x298e760768c8481780397eE28A127eAd584df4ee",
    ],
    templateId: "ERC721_META_TRANSACTION",
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
| `request`                                                                                                                                                                      | [shared.ImportSmartContractDto](../../sdk/models/shared/importsmartcontractdto.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ImportExistingSmartContractResponse](../../sdk/models/operations/importexistingsmartcontractresponse.md)\>**

### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.InvalidAbi          | 400                        | application/json           |
| errors.BadRequestException | 400                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |


## read

Reads data from a smart contract by calling one of its functions without making any state changes on the blockchain. This is typically used for retrieving information from the contract.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.smartContractManagement.read({
    readDto: {
      functionName: "balanceOf",
      params: [
        "0x298e760768c8481780397eE28A127eAd584df4ee",
      ],
    },
    address: "0x820f8728E32519b9C91B2406BF48AF80711aFecD",
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
import { smartContractManagementRead } from "@starton/sdk/funcs/smartContractManagementRead.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await smartContractManagementRead(starton, {
    readDto: {
      functionName: "balanceOf",
      params: [
        "0x298e760768c8481780397eE28A127eAd584df4ee",
      ],
    },
    address: "0x820f8728E32519b9C91B2406BF48AF80711aFecD",
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
| `request`                                                                                                                                                                      | [operations.ReadSmartContractRequest](../../sdk/models/operations/readsmartcontractrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ReadSmartContractResponse](../../sdk/models/operations/readsmartcontractresponse.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.InvalidBytecode      | 400                         | application/json            |
| errors.InvalidAbi           | 400                         | application/json            |
| errors.InvalidFunction      | 400                         | application/json            |
| errors.MissingArgument      | 400                         | application/json            |
| errors.UnexpectedArgument   | 400                         | application/json            |
| errors.InvalidArgument      | 400                         | application/json            |
| errors.CallException        | 400                         | application/json            |
| errors.NumericFault         | 400                         | application/json            |
| errors.ExecutionWillFail    | 400                         | application/json            |
| errors.EnsNotSupported      | 400                         | application/json            |
| errors.BadRequestException  | 400                         | application/json            |
| errors.CouldNotFindResource | 404                         | application/json            |
| errors.Unknown              | 500                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## update

Updates and returns details of a specific smart contract based on network and address.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.smartContractManagement.update({
    updateSmartContractDto: {
      description: "Test description",
      name: "Test smart contract",
    },
    address: "0x820f8728E32519b9C91B2406BF48AF80711aFecD",
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
import { smartContractManagementUpdate } from "@starton/sdk/funcs/smartContractManagementUpdate.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await smartContractManagementUpdate(starton, {
    updateSmartContractDto: {
      description: "Test description",
      name: "Test smart contract",
    },
    address: "0x820f8728E32519b9C91B2406BF48AF80711aFecD",
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
| `request`                                                                                                                                                                      | [operations.UpdateSmartContractRequest](../../sdk/models/operations/updatesmartcontractrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateSmartContractResponse](../../sdk/models/operations/updatesmartcontractresponse.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.BadRequestException  | 400                         | application/json            |
| errors.CouldNotFindResource | 404                         | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |
