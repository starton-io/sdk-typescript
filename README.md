# @starton/sdk

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/starton-io/sdk-typescript.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/starton-io/sdk-typescript/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/productionize-sdks/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README
<!-- Start SDK Installation -->
# SDK Installation

## NPM

```bash
npm add @starton/sdk
```

## Yarn

```bash
yarn add @starton/sdk
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->


```typescript
import { Starton } from "@starton/sdk";

(async () => {
    const sdk = new Starton({
        startonApiKey: "",
    });

    const res = await sdk.data.getBalance({
        address: "164 Runolfsson Via",
        network: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
# Available Resources and Operations


## [data](docs/sdks/data/README.md)

* [getBalance](docs/sdks/data/README.md#getbalance) - Retrieve the native token balance of a specific blockchain address
* [getErc20Balance](docs/sdks/data/README.md#geterc20balance) - Retrieve the ERC20 token balance for a specific address
* [getGasPrice](docs/sdks/data/README.md#getgasprice) -  Retrieve the current gas prices

## [ipfs](docs/sdks/ipfs/README.md)

* [delete](docs/sdks/ipfs/README.md#delete) - Delete a pin
* [getAll](docs/sdks/ipfs/README.md#getall) - Get all files
* [getOne](docs/sdks/ipfs/README.md#getone) - Get a file
* [getStorageUsed](docs/sdks/ipfs/README.md#getstorageused) - Get storage used
* [pinExistingFile](docs/sdks/ipfs/README.md#pinexistingfile) - Pin a file already on IPFS
* [update](docs/sdks/ipfs/README.md#update) - Update a file name/metadata
* [uploadFile](docs/sdks/ipfs/README.md#uploadfile) - Upload a file
* [uploadFolder](docs/sdks/ipfs/README.md#uploadfolder) - Upload a folder
* [uploadJson](docs/sdks/ipfs/README.md#uploadjson) - Upload a json

## [kms](docs/sdks/kms/README.md)

* [create](docs/sdks/kms/README.md#create) - Create a new KMS entry
* [delete](docs/sdks/kms/README.md#delete) - Remove a specific KMS entry
* [getAll](docs/sdks/kms/README.md#getall) - Retrieve all Key Management Systems (KMS)
* [getOne](docs/sdks/kms/README.md#getone) - Retrieve details of a specific KMS
* [update](docs/sdks/kms/README.md#update) - Update the details of a KMS

## [monitor](docs/sdks/monitor/README.md)

* [create](docs/sdks/monitor/README.md#create) - Create a New Watcher
* [delete](docs/sdks/monitor/README.md#delete) - Delete a watcher
* [getAll](docs/sdks/monitor/README.md#getall) - Retrieve List of Watchers
* [getAllEvents](docs/sdks/monitor/README.md#getallevents) - Fetches the list of events for a watcher 
* [getOne](docs/sdks/monitor/README.md#getone) - Get a specific watcher
* [getOneEvent](docs/sdks/monitor/README.md#getoneevent) - Get a watcher event
* [update](docs/sdks/monitor/README.md#update) - Update a watcher

## [network](docs/sdks/network/README.md)

* [create](docs/sdks/network/README.md#create) - Create a new network (Enterprise)
* [delete](docs/sdks/network/README.md#delete) - Delete a network (Enterprise)
* [getAll](docs/sdks/network/README.md#getall) - Retrieve the list of supported networks
* [getOne](docs/sdks/network/README.md#getone) - Fetch a specific network
* [update](docs/sdks/network/README.md#update) - Update specific network details (Enterprise)

## [network.rpc](docs/sdks/networkrpc/README.md)

* [create](docs/sdks/networkrpc/README.md#create) - Add a rpc (enterprise)
* [delete](docs/sdks/networkrpc/README.md#delete) - Delete a rpc (enterprise)
* [getAll](docs/sdks/networkrpc/README.md#getall) - Get all rpc (enterprise)
* [getOne](docs/sdks/networkrpc/README.md#getone) - Get a rpc (enterprise)
* [update](docs/sdks/networkrpc/README.md#update) - Update a rpc (enterprise)

## [smartContractManagement](docs/sdks/smartcontractmanagement/README.md)

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

## [transactionManager](docs/sdks/transactionmanager/README.md)

* [create](docs/sdks/transactionmanager/README.md#create) - Create a new transaction
* [getAll](docs/sdks/transactionmanager/README.md#getall) - Retrieve a List of Transactions
* [getAvailableNonces](docs/sdks/transactionmanager/README.md#getavailablenonces) - Retrieve Available Nonces for a wallet
* [getOne](docs/sdks/transactionmanager/README.md#getone) - Get a Specific Transaction
* [resyncNonce](docs/sdks/transactionmanager/README.md#resyncnonce) - Synchronize Nonces for a wallet

## [transactionManager.setting](docs/sdks/transactionmanagersetting/README.md)

* [get](docs/sdks/transactionmanagersetting/README.md#get) - Get Relayer settings
* [update](docs/sdks/transactionmanagersetting/README.md#update) - Update Relayer Settings

## [wallet](docs/sdks/wallet/README.md)

* [create](docs/sdks/wallet/README.md#create) - Create a new wallet
* [delete](docs/sdks/wallet/README.md#delete) - Delete a wallet
* [getAll](docs/sdks/wallet/README.md#getall) - Retrieve the list of Wallets
* [getOne](docs/sdks/wallet/README.md#getone) - Fetch Wallet Details
* [import](docs/sdks/wallet/README.md#import) - Import Wallet from Provider Key
* [requestFaucet](docs/sdks/wallet/README.md#requestfaucet) - Request tokens from faucet
* [resyncNonce](docs/sdks/wallet/README.md#resyncnonce) - Synchronize Nonces for a wallet
* [sign](docs/sdks/wallet/README.md#sign) - Sign a message
* [update](docs/sdks/wallet/README.md#update) - Update Wallet Information

## [webhook](docs/sdks/webhook/README.md)

* [cancel](docs/sdks/webhook/README.md#cancel) - Cancel a webhook
* [getAll](docs/sdks/webhook/README.md#getall) - Retrieve the list of Webhooks
* [getOne](docs/sdks/webhook/README.md#getone) - Retrieve a Specific Webhook
* [getSigningSecret](docs/sdks/webhook/README.md#getsigningsecret) - Retrieve Webhook Signing Secret
* [regenerateSigningSecret](docs/sdks/webhook/README.md#regeneratesigningsecret) - Regenerate Webhook signing secret
* [resend](docs/sdks/webhook/README.md#resend) - Resend a Webhook


## [project.member](docs/sdks/projectmember/README.md)

* [delete](docs/sdks/projectmember/README.md#delete) - Delete a member
* [getAll](docs/sdks/projectmember/README.md#getall) - Get all members

## [project.member.invitation](docs/sdks/projectmemberinvitation/README.md)

* [create](docs/sdks/projectmemberinvitation/README.md#create) - Invite a member
* [delete](docs/sdks/projectmemberinvitation/README.md#delete) - Delete an invitation
* [getAll](docs/sdks/projectmemberinvitation/README.md#getall) - Get all member invitation


## [smartContract.template](docs/sdks/smartcontracttemplate/README.md)

* [getAll](docs/sdks/smartcontracttemplate/README.md#getall) - Fetch the list of Smart Contract Templates
* [getOne](docs/sdks/smartcontracttemplate/README.md#getone) - Retrieve a Specific Smart Contract Template
<!-- End SDK Available Operations -->

<!-- Start Dev Containers -->



<!-- End Dev Containers -->

<!-- Start Error Handling -->
# Error Handling

Handling errors in your SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.


<!-- End Error Handling -->

<!-- Start Custom HTTP Client -->
# Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.


For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from @starton/sdk import Starton;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})


const sdk = new Starton({defaultClient: httpClient});
```


<!-- End Custom HTTP Client -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
