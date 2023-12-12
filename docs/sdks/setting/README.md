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

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.transactionManager.setting.get({
    network: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetAllSettingRelayerRequest](../../sdk/models/operations/getallsettingrelayerrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetAllSettingRelayerResponse](../../sdk/models/operations/getallsettingrelayerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## update

Update the Relayer settings for a specific network within the current project.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

async function run() {
  const sdk = new Starton({
    startonApiKey: "<YOUR_API_KEY_HERE>",
  });

  const res = await sdk.transactionManager.setting.update({
    updateSettingRelayerDto: {
      unstuckAutomaticGasPrice: true,
      unstuckCustomGasPrice: true,
      unstuckGasPriceDelay: 300,
      unstuckMaxGasPrice: "150000000000",
      unstuckMissingNonce: true,
      unstuckMissingNonceDelay: 300,
    },
    network: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.UpdateSettingRelayerRequest](../../sdk/models/operations/updatesettingrelayerrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpdateSettingRelayerResponse](../../sdk/models/operations/updatesettingrelayerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
