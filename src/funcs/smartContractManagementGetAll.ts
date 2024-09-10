/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { StartonCore } from "../core.js";
import { dlv } from "../lib/dlv.js";
import { encodeFormQuery as encodeFormQuery$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
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
 * Get all smart contracts
 *
 * @remarks
 * Fetches and returns the list of smart contracts.
 */
export async function smartContractManagementGetAll(
  client$: StartonCore,
  request: operations.GetAllSmartContractRequest,
  options?: RequestOptions,
): Promise<
  PageIterator<
    Result<
      operations.GetAllSmartContractResponse,
      | errors.GetAllSmartContractResponseBody
      | SDKError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >
  >
> {
  const input$ = typeof request === "undefined" ? {} : request;

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) =>
      operations.GetAllSmartContractRequest$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return haltIterator(parsed$);
  }
  const payload$ = parsed$.value;
  const body$ = null;

  const path$ = pathToFunc("/v3/smart-contract")();

  const query$ = encodeFormQuery$({
    "address": payload$.address,
    "includeAbi": payload$.includeAbi,
    "includeCompilationDetails": payload$.includeCompilationDetails,
    "limit": payload$.limit,
    "network": payload$.network,
    "page": payload$.page,
  });

  const headers$ = new Headers({
    Accept: "application/json",
  });

  const apiKey$ = await extractSecurity(client$.options$.apiKey);
  const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
  const context = {
    operationID: "getAllSmartContract",
    oAuth2Scopes: [],
    securitySource: client$.options$.apiKey,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "GET",
    path: path$,
    headers: headers$,
    query: query$,
    body: body$,
    timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return haltIterator(requestRes);
  }
  const request$ = requestRes.value;

  const doResult = await client$.do$(request$, {
    context,
    errorCodes: ["400", "4XX", "5XX"],
    retryConfig: options?.retries
      || client$.options$.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return haltIterator(doResult);
  }
  const response = doResult.value;

  const responseFields$ = {
    ContentType: response.headers.get("content-type")
      ?? "application/octet-stream",
    StatusCode: response.status,
    RawResponse: response,
    Headers: {},
  };

  const [result$, raw$] = await m$.match<
    operations.GetAllSmartContractResponse,
    | errors.GetAllSmartContractResponseBody
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, operations.GetAllSmartContractResponse$inboundSchema, {
      key: "SmartContractPaginated",
    }),
    m$.jsonErr(400, errors.GetAllSmartContractResponseBody$inboundSchema),
    m$.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields$ });
  if (!result$.ok) {
    return haltIterator(result$);
  }

  const nextFunc = (
    responseData: unknown,
  ): Paginator<
    Result<
      operations.GetAllSmartContractResponse,
      | errors.GetAllSmartContractResponseBody
      | SDKError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >
  > => {
    const page = input$.page || 0;
    const nextPage = page + 1;
    const numPages = dlv(responseData, "meta.totalPages");
    if (numPages == null || numPages <= page) {
      return () => null;
    }

    if (!responseData) {
      return () => null;
    }
    const results = dlv(responseData, "items");
    if (!Array.isArray(results) || !results.length) {
      return () => null;
    }
    const limit = input$.limit || 0;
    if (results.length < limit) {
      return () => null;
    }

    return () =>
      smartContractManagementGetAll(
        client$,
        {
          ...input$,
          page: nextPage,
        },
        options,
      );
  };

  const page$ = { ...result$, next: nextFunc(raw$) };
  return { ...page$, ...createPageIterator(page$, (v) => !v.ok) };
}
