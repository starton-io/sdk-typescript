/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { StartonCore } from "../core.js";
import { dlv } from "../lib/dlv.js";
import { encodeFormQuery } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
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
 * Retrieve List of Watchers
 *
 * @remarks
 * Fetches list of all watchers associated with the current project.
 */
export async function monitorGetAll(
  client: StartonCore,
  request: operations.GetAllWatcherRequest,
  options?: RequestOptions,
): Promise<
  PageIterator<
    Result<
      operations.GetAllWatcherResponse,
      | errors.GetAllWatcherResponseBody
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
    (value) => operations.GetAllWatcherRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return haltIterator(parsed);
  }
  const payload = parsed.value;
  const body = null;

  const path = pathToFunc("/v3/watcher")();

  const query = encodeFormQuery({
    "address": payload.address,
    "confirmationsBlocks": payload.confirmationsBlocks,
    "limit": payload.limit,
    "name": payload.name,
    "network": payload.network,
    "page": payload.page,
    "paused": payload.paused,
    "type": payload.type,
    "webhookUrl": payload.webhookUrl,
  });

  const headers = new Headers({
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.apiKey);
  const securityInput = secConfig == null ? {} : { apiKey: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "getAllWatcher",
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
    operations.GetAllWatcherResponse,
    | errors.GetAllWatcherResponseBody
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.GetAllWatcherResponse$inboundSchema, {
      key: "WatcherPaginated",
    }),
    M.jsonErr(400, errors.GetAllWatcherResponseBody$inboundSchema),
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
        operations.GetAllWatcherResponse,
        | errors.GetAllWatcherResponseBody
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
      monitorGetAll(
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
