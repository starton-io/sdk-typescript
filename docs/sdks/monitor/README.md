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
import { CreateWatcherDtoType } from "@starton/sdk/dist/sdk/models/shared";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.monitor.create({
    address: "0x298e760768c8481780397eE28A127eAd584df4ee",
    confirmationsBlocks: 0,
    customEventAbi: {},
    customFilters: {},
    description: "watcher tests",
    metadata: {},
    name: "watcher tests",
    network: "polygon-mumbai",
    type: CreateWatcherDtoType.AddressActivity,
    webhookUrl: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `request`                                                          | [shared.CreateWatcherDto](../../models/shared/createwatcherdto.md) | :heavy_check_mark:                                                 | The request object to use for the request.                         |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.CreateWatcherResponse](../../models/operations/createwatcherresponse.md)>**


## delete

Removes a specific watcher from the current project. This action is irreversible.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.monitor.delete({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DeleteWatcherRequest](../../models/operations/deletewatcherrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DeleteWatcherResponse](../../models/operations/deletewatcherresponse.md)>**


## getAll

Fetches list of all watchers associated with the current project.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";
import { GetAllWatcherType } from "@starton/sdk/dist/sdk/models/operations";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.monitor.getAll({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetAllWatcherRequest](../../models/operations/getallwatcherrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetAllWatcherResponse](../../models/operations/getallwatcherresponse.md)>**


## getAllEvents

Fetches a list of all events linked to a specific watcher, identified by {id}. 

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.monitor.getAllEvents({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetAllWatcherEventRequest](../../models/operations/getallwatchereventrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetAllWatcherEventResponse](../../models/operations/getallwatchereventresponse.md)>**


## getOne

Retrieves detailed information about a specific watcher identified by its unique {id} within the current project.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.monitor.getOne({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetOneWatcherRequest](../../models/operations/getonewatcherrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetOneWatcherResponse](../../models/operations/getonewatcherresponse.md)>**


## getOneEvent

Retrieves information about a specific watcher event.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.monitor.getOneEvent({
    eventId: "string",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetOneWatcherEventRequest](../../models/operations/getonewatchereventrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetOneWatcherEventResponse](../../models/operations/getonewatchereventresponse.md)>**


## update

Modifies the properties of an existing watcher. Only the fields provided in the request body will be updated.

### Example Usage

```typescript
import { Starton } from "@starton/sdk";

(async() => {
  const sdk = new Starton({
    startonApiKey: "",
  });

  const res = await sdk.monitor.update({
    updateWatcherDto: {
      confirmationsBlocks: 0,
      description: "watcher tests",
      metadata: {},
      name: "watcher tests",
      paused: true,
      webhookUrl: "string",
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.UpdateWatcherRequest](../../models/operations/updatewatcherrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdateWatcherResponse](../../models/operations/updatewatcherresponse.md)>**

