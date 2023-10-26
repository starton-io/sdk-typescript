# SmartContractTemplate
(*smartContract.template*)

### Available Operations

* [getAll](#getall) - Fetch the list of Smart Contract Templates
* [getOne](#getone) - Retrieve a Specific Smart Contract Template

## getAll

Retrieves a paginated list of smart contract templates, you can use filters and pagination options to tailor the results to your specific needs.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";
import { GetAllSmartContractTemplateCategory } from "@starton/sdk/dist/sdk/models/operations";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.smartContract.template.getAll({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetAllSmartContractTemplateRequest](../../models/operations/getallsmartcontracttemplaterequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetAllSmartContractTemplateResponse](../../models/operations/getallsmartcontracttemplateresponse.md)>**


## getOne

Fetches the details of a particular smart contract template using its unique identifier.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.smartContract.template.getOne({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetOneSmartContractTemplateRequest](../../models/operations/getonesmartcontracttemplaterequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetOneSmartContractTemplateResponse](../../models/operations/getonesmartcontracttemplateresponse.md)>**

