/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { StartonCore } from "../core.js";
import { dlv } from "../lib/dlv.js";
import { encodeFormQuery, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../sdk/models/errors/httpclienterrors.js";
import * as errors from "../sdk/models/errors/index.js";
import { SDKError } from "../sdk/models/errors/sdkerror.js";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import * as operations from "../sdk/models/operations/index.js";
import { Result } from "../sdk/types/fp.js";
import {
  createPageIterator,
  haltIterator,
  PageIterator,
  Paginator,
} from "../sdk/types/operations.js";

/**
 * Fetches the list of events for a watcher
 *
 * @remarks
 * Fetches a list of all events linked to a specific watcher, identified by {id}.
 */
export async function monitorGetAllEvents(
  client: StartonCore,
  request: operations.GetAllWatcherEventRequest,
  options?: RequestOptions,
): Promise<
  PageIterator<
    Result<
      operations.GetAllWatcherEventResponse,
      | errors.GetAllWatcherEventResponseBody
      | SDKError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >,
    { page: number }
  >
> {
  const parsed = safeParse(
    request,
    (value) => operations.GetAllWatcherEventRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return haltIterator(parsed);
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    id: encodeSimple("id", payload.id, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/v3/watcher/{id}/event")(pathParams);

  const query = encodeFormQuery({
    "limit": payload.limit,
    "page": payload.page,
  });

  const headers = new Headers(compactMap({
    Accept: "application/json",
  }));

  const secConfig = await extractSecurity(client._options.apiKey);
  const securityInput = secConfig == null ? {} : { apiKey: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "getAllWatcherEvent",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.apiKey,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return haltIterator(requestRes);
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return haltIterator(doResult);
  }
  const response = doResult.value;

  const responseFields = {
    ContentType: response.headers.get("content-type")
      ?? "application/octet-stream",
    StatusCode: response.status,
    RawResponse: response,
    Headers: {},
  };

  const [result, raw] = await M.match<
    operations.GetAllWatcherEventResponse,
    | errors.GetAllWatcherEventResponseBody
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.GetAllWatcherEventResponse$inboundSchema, {
      key: "WatcherEventPaginated",
    }),
    M.jsonErr(400, errors.GetAllWatcherEventResponseBody$inboundSchema),
    M.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return haltIterator(result);
  }

  const nextFunc = (
    responseData: unknown,
  ): {
    next: Paginator<
      Result<
        operations.GetAllWatcherEventResponse,
        | errors.GetAllWatcherEventResponseBody
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
      >
    >;
    "~next"?: { page: number };
  } => {
    const page = request?.page ?? 1;
    const nextPage = page + 1;
    const numPages = dlv(responseData, "meta.totalPages");
    if (numPages == null || numPages <= page) {
      return { next: () => null };
    }

    if (!responseData) {
      return { next: () => null };
    }
    const results = dlv(responseData, "items");
    if (!Array.isArray(results) || !results.length) {
      return { next: () => null };
    }
    const limit = request?.limit ?? 100;
    if (results.length < limit) {
      return { next: () => null };
    }

    const nextVal = () =>
      monitorGetAllEvents(
        client,
        {
          ...request,
          page: nextPage,
        },
        options,
      );

    return { next: nextVal, "~next": { page: nextPage } };
  };

  const page = { ...result, ...nextFunc(raw) };
  return { ...page, ...createPageIterator(page, (v) => !v.ok) };
}
