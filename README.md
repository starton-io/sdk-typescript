![Starton Banner](https://github.com/starton-io/.github/blob/master/github-banner.jpg?raw=true)

# @starton/sdk

<div align="left">
    <a href="https://github.com/starton-io/sdk-typescript.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/starton-io/sdk-typescript/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>


## 🏗 **Under construction!** 🏗

This is an alpha release of the Starton SDK.  We are still working on the documentation and examples and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

If you have any questions, please reach out to us on [Discord](https://discord.starton.com/).

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add @starton/sdk
```

### Yarn

```bash
yarn add @starton/sdk
```
<!-- End SDK Installation [installation] -->

## SDK Example Usage
```typescript
import { Starton } from "@starton/sdk"

const sdk = new Starton({
    startonApiKey: "",
})

sdk.data.getBalance({
    address: "0xc479C6ceAd4fE25AF85965aB2364C1C5f5351200",
    network: "ethereum-mainnet",
}).then(response => console.log(response))
```
<!-- No SDK Example Usage -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [data](docs/sdks/data/README.md)

* [getBalance](docs/sdks/data/README.md#getbalance) - Retrieve the native token balance of a specific blockchain address
* [getErc20Balance](docs/sdks/data/README.md#geterc20balance) - Retrieve the ERC20 token balance for a specific address
* [getGasPrice](docs/sdks/data/README.md#getgasprice) -  Retrieve the current gas prices

### [wallet](docs/sdks/wallet/README.md)

* [create](docs/sdks/wallet/README.md#create) - Create a new wallet
* [delete](docs/sdks/wallet/README.md#delete) - Delete a wallet
* [getAll](docs/sdks/wallet/README.md#getall) - Retrieve the list of Wallets
* [getOne](docs/sdks/wallet/README.md#getone) - Fetch Wallet Details
* [import](docs/sdks/wallet/README.md#import) - Import Wallet from Provider Key
* [requestFaucet](docs/sdks/wallet/README.md#requestfaucet) - Request tokens from faucet
* [resyncNonce](docs/sdks/wallet/README.md#resyncnonce) - Synchronize Nonces for a wallet
* [sign](docs/sdks/wallet/README.md#sign) - Sign a message
* [update](docs/sdks/wallet/README.md#update) - Update Wallet Information

### [ipfs](docs/sdks/ipfs/README.md)

* [delete](docs/sdks/ipfs/README.md#delete) - Deletes pinned file referenced by {id}
* [getAll](docs/sdks/ipfs/README.md#getall) - Retrieve all files
* [getOne](docs/sdks/ipfs/README.md#getone) - Retrieve a Specific File
* [getStorageUsed](docs/sdks/ipfs/README.md#getstorageused) - Retrieve Current Storage Usage
* [pinExistingFile](docs/sdks/ipfs/README.md#pinexistingfile) - Pin Existing IPFS File
* [update](docs/sdks/ipfs/README.md#update) - Update File Details
* [uploadFile](docs/sdks/ipfs/README.md#uploadfile) - Upload a file
* [uploadFolder](docs/sdks/ipfs/README.md#uploadfolder) - Upload a folder
* [uploadJson](docs/sdks/ipfs/README.md#uploadjson) - Upload a JSON file

### [kms](docs/sdks/kms/README.md)

* [create](docs/sdks/kms/README.md#create) - Create a new KMS entry
* [delete](docs/sdks/kms/README.md#delete) - Remove a specific KMS entry
* [getAll](docs/sdks/kms/README.md#getall) - Retrieve all Key Management Systems (KMS)
* [getOne](docs/sdks/kms/README.md#getone) - Retrieve details of a specific KMS
* [update](docs/sdks/kms/README.md#update) - Update the details of a KMS

### [transactionManager](docs/sdks/transactionmanager/README.md)

* [create](docs/sdks/transactionmanager/README.md#create) - Create a new transaction
* [getAll](docs/sdks/transactionmanager/README.md#getall) - Retrieve a List of Transactions
* [getAvailableNonces](docs/sdks/transactionmanager/README.md#getavailablenonces) - Retrieve Available Nonces for a wallet
* [getOne](docs/sdks/transactionmanager/README.md#getone) - Get a Specific Transaction
* [resyncNonce](docs/sdks/transactionmanager/README.md#resyncnonce) - Synchronize Nonces for a wallet

### [transactionManager.setting](docs/sdks/setting/README.md)

* [get](docs/sdks/setting/README.md#get) - Get Relayer settings
* [update](docs/sdks/setting/README.md#update) - Update Relayer Settings

### [network](docs/sdks/network/README.md)

* [create](docs/sdks/network/README.md#create) - Create a new network (Enterprise)
* [delete](docs/sdks/network/README.md#delete) - Delete a network (Enterprise)
* [getAll](docs/sdks/network/README.md#getall) - Retrieve the list of supported networks
* [getOne](docs/sdks/network/README.md#getone) - Fetch a specific network
* [update](docs/sdks/network/README.md#update) - Update specific network details (Enterprise)

### [network.rpc](docs/sdks/rpc/README.md)

* [create](docs/sdks/rpc/README.md#create) - Add a rpc (enterprise)
* [delete](docs/sdks/rpc/README.md#delete) - Delete a rpc (enterprise)
* [getAll](docs/sdks/rpc/README.md#getall) - Get all rpc (enterprise)
* [getOne](docs/sdks/rpc/README.md#getone) - Get a rpc (enterprise)
* [update](docs/sdks/rpc/README.md#update) - Update a rpc (enterprise)


### [project.member](docs/sdks/member/README.md)

* [delete](docs/sdks/member/README.md#delete) - Remove a user from a project.
* [getAll](docs/sdks/member/README.md#getall) - Retrieve a list of all members of a specific project.

### [project.member.invitation](docs/sdks/invitation/README.md)

* [create](docs/sdks/invitation/README.md#create) - Send an invitation to the project
* [delete](docs/sdks/invitation/README.md#delete) - Revoke a previously sent invitation.
* [getAll](docs/sdks/invitation/README.md#getall) - Retrieve a list of all member invitations for a specific project

### [smartContractManagement](docs/sdks/smartcontractmanagement/README.md)

* [call](docs/sdks/smartcontractmanagement/README.md#call) - Execute Smart Contract Function
* [delete](docs/sdks/smartcontractmanagement/README.md#delete) - Delete a smart contract
* [deployFromBytecode](docs/sdks/smartcontractmanagement/README.md#deployfrombytecode) - Deploy from bytecode (your own contract)
* [deployFromTemplate](docs/sdks/smartcontractmanagement/README.md#deployfromtemplate) - Deploy Smart Contract from Template
* [getAll](docs/sdks/smartcontractmanagement/README.md#getall) - Get all smart contracts
* [getFunctions](docs/sdks/smartcontractmanagement/README.md#getfunctions) - Retrieves Smart Contract Functions and Events
* [getOne](docs/sdks/smartcontractmanagement/README.md#getone) - Get a single smart contract
* [importExisting](docs/sdks/smartcontractmanagement/README.md#importexisting) - Import Existing Smart Contract
* [read](docs/sdks/smartcontractmanagement/README.md#read) - Query Smart Contract Function
* [update](docs/sdks/smartcontractmanagement/README.md#update) - Update a smart contract


### [smartContract.template](docs/sdks/template/README.md)

* [getAll](docs/sdks/template/README.md#getall) - Fetch the list of Smart Contract Templates
* [getOne](docs/sdks/template/README.md#getone) - Retrieve a Specific Smart Contract Template

### [monitor](docs/sdks/monitor/README.md)

* [create](docs/sdks/monitor/README.md#create) - Create a New Watcher
* [delete](docs/sdks/monitor/README.md#delete) - Delete a watcher
* [getAll](docs/sdks/monitor/README.md#getall) - Retrieve List of Watchers
* [getAllEvents](docs/sdks/monitor/README.md#getallevents) - Fetches the list of events for a watcher 
* [getOne](docs/sdks/monitor/README.md#getone) - Get a specific watcher
* [getOneEvent](docs/sdks/monitor/README.md#getoneevent) - Get a watcher event
* [update](docs/sdks/monitor/README.md#update) - Update a watcher

### [webhook](docs/sdks/webhook/README.md)

* [cancel](docs/sdks/webhook/README.md#cancel) - Cancel a webhook
* [getAll](docs/sdks/webhook/README.md#getall) - Retrieve the list of Webhooks
* [getOne](docs/sdks/webhook/README.md#getone) - Retrieve a Specific Webhook
* [getSigningSecret](docs/sdks/webhook/README.md#getsigningsecret) - Retrieve Webhook Signing Secret
* [regenerateSigningSecret](docs/sdks/webhook/README.md#regeneratesigningsecret) - Regenerate Webhook signing secret
* [resend](docs/sdks/webhook/README.md#resend) - Resend a Webhook
<!-- End Available Resources and Operations [operations] -->

<!-- No Error Handling -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Starton } from "@starton/sdk";
import { HTTPClient } from "@starton/sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Starton({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await starton.wallet.getAll({
        limit: 20,
        page: 0,
    });

    for await (const page of result) {
        // handle page
    }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- No Server Selection -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name            | Type            | Scheme          |
| --------------- | --------------- | --------------- |
| `startonApiKey` | apiKey          | API key         |

To authenticate with the API the `startonApiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await starton.data.getBalance({
        address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
        network: "polygon-mainnet",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await starton.ipfs.uploadFile({});

    // Handle the result
    console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

## Documentation

Find out more on how to use Starton in our [Documentation](https://docs.starton.com/)

## License

[License MIT](./LICENSE.md)

## Authors

- Starton [support@starton.com](mailto:support@starton.com)
