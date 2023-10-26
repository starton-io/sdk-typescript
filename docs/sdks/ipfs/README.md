# Ipfs
(*ipfs*)

## Overview

IPFS allows users to host and receive content in a manner similar to BitTorrent. As opposed to a centrally located server, IPFS is built around a decentralized system creating a resilient system of file storage and sharing. Starton IPFS storage service acts as a liaison between the IPFS protocol and you, with a user-friendly interface that lets you pin or upload files as you would any other storage service. You get all the benefits of hosting your content on the protocol while still having the easy process of uploading it.

### Available Operations

* [delete](#delete) - Deletes pinned file referenced by {id}
* [getAll](#getall) - Retrieve all files
* [getOne](#getone) - Retrieve a Specific File
* [getStorageUsed](#getstorageused) - Retrieve Current Storage Usage
* [pinExistingFile](#pinexistingfile) - Pin Existing IPFS File
* [update](#update) - Update File Details
* [uploadFile](#uploadfile) - Upload a file
* [uploadFolder](#uploadfolder) - Upload a folder
* [uploadJson](#uploadjson) - Upload a JSON file

## delete

Unpin a previously pinned file by providing the specific {id} associated with the file.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.ipfs.delete({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.DeletePinRequest](../../models/operations/deletepinrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.DeletePinResponse](../../models/operations/deletepinresponse.md)>**


## getAll

Retrieve a list of files that have been pinned on IPFS.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";
import { GetAllPinStatus } from "@starton/sdk/dist/sdk/models/operations";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.ipfs.getAll({});


  if (res.statusCode == 200) {
    do {
      // handle items

      res = res.next();
    } while (res);
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetAllPinRequest](../../models/operations/getallpinrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetAllPinResponse](../../models/operations/getallpinresponse.md)>**


## getOne

Fetches the details of a specific file that has been previously uploaded to IPFS, using its unique identifier.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.ipfs.getOne({
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetOnePinRequest](../../models/operations/getonepinrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetOnePinResponse](../../models/operations/getonepinresponse.md)>**


## getStorageUsed

Fetches the current storage utilization details for the project, providing insights into the used space, total allowance, and remaining free space.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.ipfs.getStorageUsed();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetStorageUsedPinResponse](../../models/operations/getstorageusedpinresponse.md)>**


## pinExistingFile

Requests Starton to retain a copy of a file that has already been uploaded to IPFS, ensuring its availability.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.ipfs.pinExistingFile({
    cid: "string",
    metadata: {},
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.CreatePinDto](../../models/shared/createpindto.md)   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreatePinResponse](../../models/operations/createpinresponse.md)>**


## update

Modifies the name or metadata of an existing file stored in IPFS. Note that direct edits to the file content are not possible; any changes to the content require re-uploading and will result in a new unique hash for the file.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.ipfs.update({
    updatePinDto: {
      metadata: {},
    },
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.UpdatePinRequest](../../models/operations/updatepinrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.UpdatePinResponse](../../models/operations/updatepinresponse.md)>**


## uploadFile

Safely upload a file to IPFS, ensuring it gets securely pinned for reliable retrieval, and receive a unique CID as a reference to the uploaded content. THE BODY PARAMETERS ARE FORM PARAMETERS FOR THIS ENDPOINT.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.ipfs.uploadFile({
    file: {
      content: "U?WWKB{5@q" as bytes <<<>>>,
      file: "string",
    },
    metadata: {},
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UploadFromFilePinRequestBody](../../models/operations/uploadfromfilepinrequestbody.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UploadFromFilePinResponse](../../models/operations/uploadfromfilepinresponse.md)>**


## uploadFolder

Upload an entire folder to IPFS, ensuring secure pinning of its contents for reliable retrieval. This endpoint expects a multipart/form-data payload, consisting of an optional metadata object and an array of files. The successful upload of the folder will result in a unique Content Identifier (CID) reference, which can be used to fetch the folder and its contents from IPFS at any time.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.ipfs.uploadFolder({
    files: [
      {
        content: "$FpFd]o4kP" as bytes <<<>>>,
        files: "string",
      },
    ],
    metadata: {},
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.UploadFromFolderPinRequestBody](../../models/operations/uploadfromfolderpinrequestbody.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.UploadFromFolderPinResponse](../../models/operations/uploadfromfolderpinresponse.md)>**


## uploadJson

Upload a JSON file to IPFS with pinning for reliable access, associating it with a unique CID.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.ipfs.uploadJson({
    content: {},
    metadata: {},
    name: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.UploadJsonDto](../../models/shared/uploadjsondto.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UploadFromJsonPinResponse](../../models/operations/uploadfromjsonpinresponse.md)>**

