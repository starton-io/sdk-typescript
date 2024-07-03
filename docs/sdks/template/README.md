# Template
(*smartContract.template*)

### Available Operations

* [getAll](#getall) - Fetch the list of Smart Contract Templates
* [getOne](#getone) - Retrieve a Specific Smart Contract Template

## getAll

Retrieves a paginated list of smart contract templates, you can use filters and pagination options to tailor the results to your specific needs.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";
import { Category } from "@starton/sdk/sdk/models/operations";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.smartContract.template.getAll({
    blockchain: "polygon",
    category: Category.Nft,
    includeCompilationDetails: true,
    includeForm: true,
    isActivated: true,
    isAudited: true,
    limit: 20,
    name: "ERC",
    page: 0,
  });

  for await (const page of result) {
    // handle page
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAllSmartContractTemplateRequest](../../sdk/models/operations/getallsmartcontracttemplaterequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.GetAllSmartContractTemplateResponse](../../sdk/models/operations/getallsmartcontracttemplateresponse.md)\>**
### Errors

| Error Object                                   | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.GetAllSmartContractTemplateResponseBody | 400                                            | application/json                               |
| errors.SDKError                                | 4xx-5xx                                        | */*                                            |

## getOne

Fetches the details of a particular smart contract template using its unique identifier.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.smartContract.template.getOne({
    id: "ERC721_META_TRANSACTION",
    includeForm: true,
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOneSmartContractTemplateRequest](../../sdk/models/operations/getonesmartcontracttemplaterequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.GetOneSmartContractTemplateResponse](../../sdk/models/operations/getonesmartcontracttemplateresponse.md)\>**
### Errors

| Error Object                                                        | Status Code                                                         | Content Type                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| errors.GetOneSmartContractTemplateResponseBody                      | 400                                                                 | application/json                                                    |
| errors.GetOneSmartContractTemplateSmartContractTemplateResponseBody | 404                                                                 | application/json                                                    |
| errors.SDKError                                                     | 4xx-5xx                                                             | */*                                                                 |
