# Monitor
(*monitor*)

## Overview

The list of conditions that trigger a watcher event

### Available Operations

* [create](#create) - Create a New Watcher
* [delete](#delete) - Delete a watcher
* [getAll](#getall) - Retrieve List of Watchers
* [getAllEvents](#getallevents) - Fetches the list of events for a watcher 
* [getOne](#getone) - Get a specific watcher
* [getOneEvent](#getoneevent) - Get a watcher event
* [update](#update) - Update a watcher

## create

Adds a new watcher to the current project to start monitoring an address.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";
import { CreateWatcherDtoType } from "@starton/sdk/sdk/models/shared";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.monitor.create({
    address: "0xf96aeba5b2df4ba7b69e5f61fe1d963840ededb1",
    confirmationsBlocks: 0,
    description: "watcher tests",
    metadata: {},
    name: "watcher test",
    network: "polygon-mumbai",
    type: CreateWatcherDtoType.AddressActivity,
    webhookUrl: "https://webhook.site/db756457-9ca1-4975-9a3d-6257c9e0601e",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StartonCore } from "@starton/sdk/core.js";
import { monitorCreate } from "@starton/sdk/funcs/monitorCreate.js";
import { CreateWatcherDtoType } from "@starton/sdk/sdk/models/shared";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await monitorCreate(starton, {
    address: "0xf96aeba5b2df4ba7b69e5f61fe1d963840ededb1",
    confirmationsBlocks: 0,
    description: "watcher tests",
    metadata: {},
    name: "watcher test",
    network: "polygon-mumbai",
    type: CreateWatcherDtoType.AddressActivity,
    webhookUrl: "https://webhook.site/db756457-9ca1-4975-9a3d-6257c9e0601e",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.CreateWatcherDto](../../sdk/models/shared/createwatcherdto.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateWatcherResponse](../../sdk/models/operations/createwatcherresponse.md)\>**

### Errors

| Error Object                                       | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.CreateWatcherResponseBody                   | 400                                                | application/json                                   |
| errors.CreateWatcherMonitorResponseBody            | 409                                                | application/json                                   |
| errors.CreateWatcherMonitorResponseResponseBody    | 412                                                | application/json                                   |
| errors.CreateWatcherMonitorResponse500ResponseBody | 500                                                | application/json                                   |
| errors.SDKError                                    | 4xx-5xx                                            | */*                                                |


## delete

Removes a specific watcher from the current project. This action is irreversible.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.monitor.delete({
    id: "<id>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StartonCore } from "@starton/sdk/core.js";
import { monitorDelete } from "@starton/sdk/funcs/monitorDelete.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await monitorDelete(starton, {
    id: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteWatcherRequest](../../sdk/models/operations/deletewatcherrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteWatcherResponse](../../sdk/models/operations/deletewatcherresponse.md)\>**

### Errors

| Error Object                            | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.DeleteWatcherResponseBody        | 400                                     | application/json                        |
| errors.DeleteWatcherMonitorResponseBody | 404                                     | application/json                        |
| errors.SDKError                         | 4xx-5xx                                 | */*                                     |


## getAll

Fetches list of all watchers associated with the current project.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";
import { Type } from "@starton/sdk/sdk/models/operations";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.monitor.getAll({
    address: "0x298e760768c8481780397eE28A127eAd584df4ee",
    confirmationsBlocks: 0,
    limit: 20,
    name: "watcher",
    network: "polygon-mumbai",
    page: 0,
    paused: false,
    type: Type.AddressActivity,
    webhookUrl: "https://webhook.site/db756457-9ca1-4975-9a3d-6257c9e0601e",
  });

  for await (const page of result) {
    // handle page
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StartonCore } from "@starton/sdk/core.js";
import { monitorGetAll } from "@starton/sdk/funcs/monitorGetAll.js";
import { Type } from "@starton/sdk/sdk/models/operations";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await monitorGetAll(starton, {
    address: "0x298e760768c8481780397eE28A127eAd584df4ee",
    confirmationsBlocks: 0,
    limit: 20,
    name: "watcher",
    network: "polygon-mumbai",
    page: 0,
    paused: false,
    type: Type.AddressActivity,
    webhookUrl: "https://webhook.site/db756457-9ca1-4975-9a3d-6257c9e0601e",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // handle page
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAllWatcherRequest](../../sdk/models/operations/getallwatcherrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAllWatcherResponse](../../sdk/models/operations/getallwatcherresponse.md)\>**

### Errors

| Error Object                     | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.GetAllWatcherResponseBody | 400                              | application/json                 |
| errors.SDKError                  | 4xx-5xx                          | */*                              |


## getAllEvents

Fetches a list of all events linked to a specific watcher, identified by {id}. 

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.monitor.getAllEvents({
    id: "ntif_f94e4a79611947d48254537a8861265d",
    limit: 20,
    page: 0,
  });

  for await (const page of result) {
    // handle page
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StartonCore } from "@starton/sdk/core.js";
import { monitorGetAllEvents } from "@starton/sdk/funcs/monitorGetAllEvents.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await monitorGetAllEvents(starton, {
    id: "ntif_f94e4a79611947d48254537a8861265d",
    limit: 20,
    page: 0,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // handle page
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAllWatcherEventRequest](../../sdk/models/operations/getallwatchereventrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAllWatcherEventResponse](../../sdk/models/operations/getallwatchereventresponse.md)\>**

### Errors

| Error Object                          | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.GetAllWatcherEventResponseBody | 400                                   | application/json                      |
| errors.SDKError                       | 4xx-5xx                               | */*                                   |


## getOne

Retrieves detailed information about a specific watcher identified by its unique {id} within the current project.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.monitor.getOne({
    id: "ntif_f94e4a79611947d48254537a8861265d",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StartonCore } from "@starton/sdk/core.js";
import { monitorGetOne } from "@starton/sdk/funcs/monitorGetOne.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await monitorGetOne(starton, {
    id: "ntif_f94e4a79611947d48254537a8861265d",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOneWatcherRequest](../../sdk/models/operations/getonewatcherrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetOneWatcherResponse](../../sdk/models/operations/getonewatcherresponse.md)\>**

### Errors

| Error Object                            | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.GetOneWatcherResponseBody        | 400                                     | application/json                        |
| errors.GetOneWatcherMonitorResponseBody | 404                                     | application/json                        |
| errors.SDKError                         | 4xx-5xx                                 | */*                                     |


## getOneEvent

Retrieves information about a specific watcher event.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.monitor.getOneEvent({
    eventId: "wevent_437e18e7470944099bd094e1c936e4cd",
    id: "ntif_f94e4a79611947d48254537a8861265d",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StartonCore } from "@starton/sdk/core.js";
import { monitorGetOneEvent } from "@starton/sdk/funcs/monitorGetOneEvent.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await monitorGetOneEvent(starton, {
    eventId: "wevent_437e18e7470944099bd094e1c936e4cd",
    id: "ntif_f94e4a79611947d48254537a8861265d",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOneWatcherEventRequest](../../sdk/models/operations/getonewatchereventrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetOneWatcherEventResponse](../../sdk/models/operations/getonewatchereventresponse.md)\>**

### Errors

| Error Object                                 | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.GetOneWatcherEventResponseBody        | 400                                          | application/json                             |
| errors.GetOneWatcherEventMonitorResponseBody | 404                                          | application/json                             |
| errors.SDKError                              | 4xx-5xx                                      | */*                                          |


## update

Modifies the properties of an existing watcher. Only the fields provided in the request body will be updated.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

const starton = new Starton({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await starton.monitor.update({
    updateWatcherDto: {
      confirmationsBlocks: 0,
      description: "watcher tests",
      metadata: {},
      name: "watcher tests",
      paused: false,
      webhookUrl: "",
    },
    id: "ntif_f94e4a79611947d48254537a8861265d",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { StartonCore } from "@starton/sdk/core.js";
import { monitorUpdate } from "@starton/sdk/funcs/monitorUpdate.js";

// Use `StartonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const starton = new StartonCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await monitorUpdate(starton, {
    updateWatcherDto: {
      confirmationsBlocks: 0,
      description: "watcher tests",
      metadata: {},
      name: "watcher tests",
      paused: false,
      webhookUrl: "",
    },
    id: "ntif_f94e4a79611947d48254537a8861265d",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateWatcherRequest](../../sdk/models/operations/updatewatcherrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateWatcherResponse](../../sdk/models/operations/updatewatcherresponse.md)\>**

### Errors

| Error Object                            | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.UpdateWatcherResponseBody        | 400                                     | application/json                        |
| errors.UpdateWatcherMonitorResponseBody | 404                                     | application/json                        |
| errors.SDKError                         | 4xx-5xx                                 | */*                                     |
