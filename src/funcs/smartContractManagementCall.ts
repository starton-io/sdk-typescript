/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { StartonCore } from "../core.js";
import { encodeFormQuery, encodeJSON, encodeSimple } from "../lib/encodings.js";
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

/**
 * Execute Smart Contract Function
 *
 * @remarks
 * Calls a specific function within a deployed smart contract, enabling interactions such as executing transactions or querying state. The method parameters, including the smart contract address and network, need to be specified.
 */
export async function smartContractManagementCall(
  client: StartonCore,
  request: operations.CallSmartContractRequest,
  options?: RequestOptions,
): Promise<
  Result<
    operations.CallSmartContractResponse,
    | errors.CallSmartContractResponseBody
    | errors.CallSmartContractSmartContractManagementResponseBody
    | errors.CallSmartContractSmartContractManagementResponseResponseBody
    | errors.CallSmartContractSmartContractManagementResponse500ResponseBody
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const parsed = safeParse(
    request,
    (value) => operations.CallSmartContractRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.CallDto, { explode: true });

  const pathParams = {
    address: encodeSimple("address", payload.address, {
      explode: false,
      charEncoding: "percent",
    }),
    network: encodeSimple("network", payload.network, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/v3/smart-contract/{network}/{address}/call")(
    pathParams,
  );

  const query = encodeFormQuery({
    "simulate": payload.simulate,
  });

  const headers = new Headers(compactMap({
    "Content-Type": "application/json",
    Accept: "application/json",
  }));

  const secConfig = await extractSecurity(client._options.apiKey);
  const securityInput = secConfig == null ? {} : { apiKey: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "callSmartContract",
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
    method: "POST",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "404", "422", "4XX", "500", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    ContentType: response.headers.get("content-type")
      ?? "application/octet-stream",
    StatusCode: response.status,
    RawResponse: response,
    Headers: {},
  };

  const [result] = await M.match<
    operations.CallSmartContractResponse,
    | errors.CallSmartContractResponseBody
    | errors.CallSmartContractSmartContractManagementResponseBody
    | errors.CallSmartContractSmartContractManagementResponseResponseBody
    | errors.CallSmartContractSmartContractManagementResponse500ResponseBody
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(201, operations.CallSmartContractResponse$inboundSchema, {
      key: "Transaction",
    }),
    M.jsonErr(400, errors.CallSmartContractResponseBody$inboundSchema),
    M.jsonErr(
      404,
      errors.CallSmartContractSmartContractManagementResponseBody$inboundSchema,
    ),
    M.jsonErr(
      422,
      errors
        .CallSmartContractSmartContractManagementResponseResponseBody$inboundSchema,
    ),
    M.jsonErr(
      500,
      errors
        .CallSmartContractSmartContractManagementResponse500ResponseBody$inboundSchema,
    ),
    M.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
