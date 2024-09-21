/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { StartonCore } from "../core.js";
import { encodeFormQuery, encodeSimple } from "../lib/encodings.js";
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

/**
 * Get a single smart contract
 *
 * @remarks
 * Fetches details of a specific smart contract based on network and address.
 */
export async function smartContractManagementGetOne(
  client: StartonCore,
  request: operations.GetOneSmartContractRequest,
  options?: RequestOptions,
): Promise<
  Result<
    operations.GetOneSmartContractResponse,
    | errors.GetOneSmartContractResponseBody
    | errors.GetOneSmartContractSmartContractManagementResponseBody
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input = request;

  const parsed = safeParse(
    input,
    (value) =>
      operations.GetOneSmartContractRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

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

  const path = pathToFunc("/v3/smart-contract/{network}/{address}")(pathParams);

  const query = encodeFormQuery({
    "includeAbi": payload.includeAbi,
    "includeCompilationDetails": payload.includeCompilationDetails,
  });

  const headers = new Headers({
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.apiKey);
  const securityInput = secConfig == null ? {} : { apiKey: secConfig };
  const context = {
    operationID: "getOneSmartContract",
    oAuth2Scopes: [],
    securitySource: client._options.apiKey,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
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
    errorCodes: ["400", "404", "4XX", "5XX"],
    retryConfig: options?.retries
      || client._options.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
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
    operations.GetOneSmartContractResponse,
    | errors.GetOneSmartContractResponseBody
    | errors.GetOneSmartContractSmartContractManagementResponseBody
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.GetOneSmartContractResponse$inboundSchema, {
      key: "SmartContract",
    }),
    M.jsonErr(400, errors.GetOneSmartContractResponseBody$inboundSchema),
    M.jsonErr(
      404,
      errors
        .GetOneSmartContractSmartContractManagementResponseBody$inboundSchema,
    ),
    M.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
