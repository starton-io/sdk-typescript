# Starton SDK


## Overview

Starton API: Documentation: # Introduction

Starton is the all-in-one WEB3 api to integrate blockchain feature inside your project.

# Authentication

To access API endpoints, you must provide a valid API key. You can create new
API keys in your [account settings](https://app.starton.com/projects/default/developer). Be
careful when handling your keys as they give access to all your project,
you should treat them like passwords and they should never be committed to
source control.

To authenticate with API, you can supply the API key as a header
(`x-api-key: YOUR_API_KEY`).

Some API endpoints allow unauthenticated requests for public resources and
they can be called without an API key.

# Errors

All successful API requests will be returned with a 200 or 201 status code.
 If there’s an error while making the
request, the appropriate status code is returned with the error message:

```
{
	"statusCode": 401,
	"errorCode": "NOT_AUTHENTICATED",
	"message": "Not authenticated",
	"timestamp": "2023-10-14T00:12:22.470Z",
	"path": "/v3/project",
	"context": {},
}
```

# Pagination

Most top-level API resources have support for `getAll` API methods. For instance,
you can list smart contracts, webhooks, templates etc. These list methods share
common parameters, taking both `limit` and `page`.

Responses will be in the root `meta` and `items` key. For example:

```
{
	data: […],
	meta: {
		itemCount: 10,
		totalItems: 50,
		itemsPerPage: 10,
		totalPages: 5
		currentPage: 1
	}
}
```


# Rate limits

Depending on your plan, you will benefit from a specific rate limit.

| Plan      | Rate limit               |
|-----------|--------------------------|
| Free      | 50 requests/min          |
| Developer | 100 requests/min         |
| Business  | up to 10000 requests/min |


### Available Operations

