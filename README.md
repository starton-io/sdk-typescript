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

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { @starton/sdk } from "Starton";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new Starton({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
```typescript
import { Starton } from "@starton/sdk";

async function run() {
    const sdk = new Starton({
        startonApiKey: "<YOUR_API_KEY_HERE>",
    });

    const res = await sdk.wallet.getAll({});

    if (res.statusCode == 200) {
        do {
            // handle items

            res = res.next();
        } while (res);
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

async function run() {
    const sdk = new Starton({
        startonApiKey: "<YOUR_API_KEY_HERE>",
    });

    const res = await sdk.data.getBalance({
        address: "164 Runolfsson Via",
        network: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Authentication [security] -->

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
