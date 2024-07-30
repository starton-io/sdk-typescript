# Setting
(*transactionManager.setting*)

### Available Operations

* [get](#get) - Get Relayer settings
* [update](#update) - Update Relayer Settings

## get

Retrieve the Relayer settings for a specific network within the current project.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: process.env.API_KEY,
});

async function run() {
  const result = await starton.transactionManager.setting.get({
    network: "polygon-mumbai",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAllSettingRelayerRequest](../../sdk/models/operations/getallsettingrelayerrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.GetAllSettingRelayerResponse](../../sdk/models/operations/getallsettingrelayerresponse.md)\>**
### Errors

| Error Object                                                     | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.GetAllSettingRelayerResponseBody                          | 400                                                              | application/json                                                 |
| errors.GetAllSettingRelayerTransactionManagerSettingResponseBody | 404                                                              | application/json                                                 |
| errors.SDKError                                                  | 4xx-5xx                                                          | */*                                                              |

## update

Update the Relayer settings for a specific network within the current project.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: process.env.API_KEY,
});

async function run() {
  const result = await starton.transactionManager.setting.update({
    updateSettingRelayerDto: {
      unstuckAutomaticGasPrice: true,
      unstuckCustomGasPrice: true,
      unstuckGasPriceDelay: 300,
      unstuckMaxGasPrice: "150000000000",
      unstuckMissingNonce: true,
      unstuckMissingNonceDelay: 300,
    },
    network: "polygon-mumbai",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateSettingRelayerRequest](../../sdk/models/operations/updatesettingrelayerrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |


### Response

**Promise\<[operations.UpdateSettingRelayerResponse](../../sdk/models/operations/updatesettingrelayerresponse.md)\>**
### Errors

| Error Object                                                     | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.UpdateSettingRelayerResponseBody                          | 400                                                              | application/json                                                 |
| errors.UpdateSettingRelayerTransactionManagerSettingResponseBody | 404                                                              | application/json                                                 |
| errors.SDKError                                                  | 4xx-5xx                                                          | */*                                                              |
