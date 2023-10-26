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
import { CallDtoSpeed } from "@starton/sdk/dist/sdk/models/shared";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.smartContractManagement.call({
    callDto: {
      customGas: {},
      functionName: "string",
      params: [
        "string",
        "string",
        "string",
        "string",
      ],
      signerWallet: "string",
    },
    address: "842 Lee Forges",
    network: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CallSmartContractRequest](../../models/operations/callsmartcontractrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CallSmartContractResponse](../../models/operations/callsmartcontractresponse.md)>**


## delete

Deletes a specific smart contract based on network and address.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.smartContractManagement.delete({
    address: "8653 Vaughn Hills",
    network: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeleteSmartContractRequest](../../models/operations/deletesmartcontractrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeleteSmartContractResponse](../../models/operations/deletesmartcontractresponse.md)>**


## deployFromBytecode

Deploys a smart contract from bytecode and returns transaction details.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";
import { AbiObjectDtoStateMutability, AbiObjectDtoType, DeployFromBytecodeDtoSpeed } from "@starton/sdk/dist/sdk/models/shared";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.smartContractManagement.deployFromBytecode({
    deployFromBytecodeDto: {
      abi: [
        {
          inputs: {
            components: {},
            name: "string",
            type: "string",
          },
          outputs: {
            components: {},
            name: "string",
            type: "string",
          },
          type: AbiObjectDtoType.Event,
        },
      ],
      bytecode: "string",
      customGas: {},
      name: "string",
      network: "string",
      params: [
        "string",
        "string",
        "string",
        "string",
      ],
      signerWallet: "string",
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.DeployFromBytecodeSmartContractRequest](../../models/operations/deployfrombytecodesmartcontractrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.DeployFromBytecodeSmartContractResponse](../../models/operations/deployfrombytecodesmartcontractresponse.md)>**


## deployFromTemplate

Deploy from Starton audited smart contract template.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";
import { DeployFromTemplateDtoSpeed } from "@starton/sdk/dist/sdk/models/shared";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.smartContractManagement.deployFromTemplate({
    deployFromTemplateDto: {
      customGas: {},
      name: "TestToken",
      network: "polygon-mumbai",
      params: [
        "string",
        "string",
        "string",
        "string",
      ],
      signerWallet: "0x298e760768c8481780397eE28A127eAd584df4ee",
      templateId: "ERC20_META_TRANSACTION",
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.DeployFromTemplateSmartContractRequest](../../models/operations/deployfromtemplatesmartcontractrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.DeployFromTemplateSmartContractResponse](../../models/operations/deployfromtemplatesmartcontractresponse.md)>**


## getAll

Fetches and returns the list of smart contracts.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.smartContractManagement.getAll({});


  if (res.statusCode == 200) {
    do {
      // handle items

      res = res.next();
    } while (res);
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetAllSmartContractRequest](../../models/operations/getallsmartcontractrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetAllSmartContractResponse](../../models/operations/getallsmartcontractresponse.md)>**


## getFunctions

Provides a list of the available read and write functions, as well as events, of a specified smart contract. This can be used to understand how to interact with the contract.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.smartContractManagement.getFunctions({
    address: "18523 Buford Brook",
    network: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.GetAvailableFunctionsSmartContractRequest](../../models/operations/getavailablefunctionssmartcontractrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.GetAvailableFunctionsSmartContractResponse](../../models/operations/getavailablefunctionssmartcontractresponse.md)>**


## getOne

Fetches details of a specific smart contract based on network and address.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.smartContractManagement.getOne({
    address: "43504 Penelope Expressway",
    network: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetOneSmartContractRequest](../../models/operations/getonesmartcontractrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetOneSmartContractResponse](../../models/operations/getonesmartcontractresponse.md)>**


## importExisting

Import an already deployed smart contract into the project. This requires providing the smart contract’s address, ABI, and the network it’s deployed on.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";
import { AbiObjectDtoStateMutability, AbiObjectDtoType } from "@starton/sdk/dist/sdk/models/shared";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.smartContractManagement.importExisting({
    abi: [
      {
        inputs: {
          components: {},
          name: "string",
          type: "string",
        },
        outputs: {
          components: {},
          name: "string",
          type: "string",
        },
        type: AbiObjectDtoType.Function,
      },
    ],
    address: "0x1C1f7A4d7F853856b964947CA03B92993D3ef40e",
    creationHash: "0x55b782a3db6d7b8c1949536110dcaaac69b4f83455959ab2839c09c2ed2ab1da",
    description: "Minimal smart contract description.",
    name: "Minimal Contract Test.",
    network: "polygon-mumbai",
    params: [
      "string",
      "string",
      "string",
      "string",
    ],
    templateId: "ERC721_META_TRANSACTION",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.ImportSmartContractDto](../../models/shared/importsmartcontractdto.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ImportExistingSmartContractResponse](../../models/operations/importexistingsmartcontractresponse.md)>**


## read

Reads data from a smart contract by calling one of its functions without making any state changes on the blockchain. This is typically used for retrieving information from the contract.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.smartContractManagement.read({
    readDto: {
      functionName: "string",
      params: [
        "string",
        "string",
        "string",
        "string",
      ],
    },
    address: "660 Romaine Highway",
    network: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ReadSmartContractRequest](../../models/operations/readsmartcontractrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ReadSmartContractResponse](../../models/operations/readsmartcontractresponse.md)>**


## update

Updates and returns details of a specific smart contract based on network and address.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.smartContractManagement.update({
    updateSmartContractDto: {
      metadata: {},
    },
    address: "050 Mellie Well",
    network: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdateSmartContractRequest](../../models/operations/updatesmartcontractrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateSmartContractResponse](../../models/operations/updatesmartcontractresponse.md)>**

