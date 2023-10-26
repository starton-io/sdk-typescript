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

* [getBalance](docs/sdks/data/README.md#getbalance) - Get native balance
* [getErc20Balance](docs/sdks/data/README.md#geterc20balance) - Get erc20 balance
* [getGasPrice](docs/sdks/data/README.md#getgasprice) - Get gas price

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

* [create](docs/sdks/kms/README.md#create) - Create a kms
* [delete](docs/sdks/kms/README.md#delete) - Delete a kms
* [getAll](docs/sdks/kms/README.md#getall) - Get all kms
* [getOne](docs/sdks/kms/README.md#getone) - Get a kms
* [update](docs/sdks/kms/README.md#update) - Update a kms

## [monitor](docs/sdks/monitor/README.md)

* [create](docs/sdks/monitor/README.md#create) - Create a watcher
* [delete](docs/sdks/monitor/README.md#delete) - Delete a watcher
* [getAll](docs/sdks/monitor/README.md#getall) - Get all watcher
* [getAllEvents](docs/sdks/monitor/README.md#getallevents) - Get all events
* [getOne](docs/sdks/monitor/README.md#getone) - Get a watcher
* [getOneEvent](docs/sdks/monitor/README.md#getoneevent) - Get a watcher event
* [update](docs/sdks/monitor/README.md#update) - Update a watcher

## [network](docs/sdks/network/README.md)

* [create](docs/sdks/network/README.md#create) - Create a network (enterprise)
* [delete](docs/sdks/network/README.md#delete) - Delete a network (enterprise)
* [getAll](docs/sdks/network/README.md#getall) - Get all networks
* [getOne](docs/sdks/network/README.md#getone) - Get a network
* [update](docs/sdks/network/README.md#update) - Update a network (enterprise)

## [network.rpc](docs/sdks/networkrpc/README.md)

* [create](docs/sdks/networkrpc/README.md#create) - Add a rpc (enterprise)
* [delete](docs/sdks/networkrpc/README.md#delete) - Delete a rpc (enterprise)
* [getAll](docs/sdks/networkrpc/README.md#getall) - Get all rpc (enterprise)
* [getOne](docs/sdks/networkrpc/README.md#getone) - Get a rpc (enterprise)
* [update](docs/sdks/networkrpc/README.md#update) - Update a rpc (enterprise)

## [smartContractManagement](docs/sdks/smartcontractmanagement/README.md)

* [call](docs/sdks/smartcontractmanagement/README.md#call) - Call smart contract
* [delete](docs/sdks/smartcontractmanagement/README.md#delete) - Delete a smart contract
* [deployFromBytecode](docs/sdks/smartcontractmanagement/README.md#deployfrombytecode) - Deploy from bytecode (your own contract)
* [deployFromTemplate](docs/sdks/smartcontractmanagement/README.md#deployfromtemplate) - Deploy from template
* [getAll](docs/sdks/smartcontractmanagement/README.md#getall) - Get all smart contract
* [getFunctions](docs/sdks/smartcontractmanagement/README.md#getfunctions) - Get functions & events
* [getOne](docs/sdks/smartcontractmanagement/README.md#getone) - Get a smart contract
* [importExisting](docs/sdks/smartcontractmanagement/README.md#importexisting) - Import existing contract
* [read](docs/sdks/smartcontractmanagement/README.md#read) - Read smart contract
* [update](docs/sdks/smartcontractmanagement/README.md#update) - Update a smart contract

## [transactionManager](docs/sdks/transactionmanager/README.md)

* [create](docs/sdks/transactionmanager/README.md#create) - Create a transaction
* [getAll](docs/sdks/transactionmanager/README.md#getall) - Get all transactions
* [getAvailableNonces](docs/sdks/transactionmanager/README.md#getavailablenonces) - Get available nonce for a wallet
* [getOne](docs/sdks/transactionmanager/README.md#getone) - Get a transaction
* [resyncNonce](docs/sdks/transactionmanager/README.md#resyncnonce) - Resync nonce for a wallet

## [transactionManager.setting](docs/sdks/transactionmanagersetting/README.md)

* [get](docs/sdks/transactionmanagersetting/README.md#get) - Get settings
* [update](docs/sdks/transactionmanagersetting/README.md#update) - Update settings

## [wallet](docs/sdks/wallet/README.md)

* [create](docs/sdks/wallet/README.md#create) - Create a wallet
* [delete](docs/sdks/wallet/README.md#delete) - Delete a wallet
* [getAll](docs/sdks/wallet/README.md#getall) - Get all wallet
* [getOne](docs/sdks/wallet/README.md#getone) - Get a wallet
* [import](docs/sdks/wallet/README.md#import) - Import a wallet
* [requestFaucet](docs/sdks/wallet/README.md#requestfaucet) - Request faucet
* [resyncNonce](docs/sdks/wallet/README.md#resyncnonce) - Resync nonce for a wallet
* [sign](docs/sdks/wallet/README.md#sign) - Sign a message
* [update](docs/sdks/wallet/README.md#update) - Update a wallet

## [webhook](docs/sdks/webhook/README.md)

* [cancel](docs/sdks/webhook/README.md#cancel) - Cancel a webhook
* [getAll](docs/sdks/webhook/README.md#getall) - Get all webhooks
* [getOne](docs/sdks/webhook/README.md#getone) - Get a webhook
* [getSigningSecret](docs/sdks/webhook/README.md#getsigningsecret) - Get signing secret
* [regenerateSigningSecret](docs/sdks/webhook/README.md#regeneratesigningsecret) - Regenerate signing secret
* [resend](docs/sdks/webhook/README.md#resend) - Resend a webhook


## [project.member](docs/sdks/projectmember/README.md)

* [delete](docs/sdks/projectmember/README.md#delete) - Delete a member
* [getAll](docs/sdks/projectmember/README.md#getall) - Get all members

## [project.member.invitation](docs/sdks/projectmemberinvitation/README.md)

* [create](docs/sdks/projectmemberinvitation/README.md#create) - Invite a member
* [delete](docs/sdks/projectmemberinvitation/README.md#delete) - Delete an invitation
* [getAll](docs/sdks/projectmemberinvitation/README.md#getall) - Get all member invitation


## [smartContract.template](docs/sdks/smartcontracttemplate/README.md)

* [getAll](docs/sdks/smartcontracttemplate/README.md#getall) - Get all templates
* [getOne](docs/sdks/smartcontracttemplate/README.md#getone) - Get a template
<!-- End SDK Available Operations -->

<!-- Start Dev Containers -->



<!-- End Dev Containers -->

<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:


## Example

```typescript
import { Starton } from "@starton/sdk";
import { GetAllPinStatus } from "@starton/sdk/dist/sdk/models/operations";

(async () => {
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
<!-- End Pagination -->

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
