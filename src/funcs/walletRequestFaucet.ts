/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { StartonCore } from "../core.js";
import { encodeJSON, encodeSimple } from "../lib/encodings.js";
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
 * Request tokens from faucet
 *
 * @remarks
 * Request tokens from the faucet, which can be used for testing and development purposes on testnet networks. Each user is limited to one request per day.
 */
export async function walletRequestFaucet(
  client: StartonCore,
  request: operations.ClaimFaucetRequest,
  options?: RequestOptions,
): Promise<
  Result<
    operations.ClaimFaucetResponse,
    | errors.ClaimFaucetResponseBody
    | errors.ClaimFaucetWalletResponseBody
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
    (value) => operations.ClaimFaucetRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.RequireFaucetDto, { explode: true });

  const pathParams = {
    network: encodeSimple("network", payload.network, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/v3/faucet/{network}")(pathParams);

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.apiKey);
  const securityInput = secConfig == null ? {} : { apiKey: secConfig };
  const context = {
    operationID: "claimFaucet",
    oAuth2Scopes: [],
    securitySource: client._options.apiKey,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "4XX", "500", "5XX"],
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
    operations.ClaimFaucetResponse,
    | errors.ClaimFaucetResponseBody
    | errors.ClaimFaucetWalletResponseBody
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(201, operations.ClaimFaucetResponse$inboundSchema, {
      key: "Faucet",
    }),
    M.jsonErr(400, errors.ClaimFaucetResponseBody$inboundSchema),
    M.jsonErr(500, errors.ClaimFaucetWalletResponseBody$inboundSchema),
    M.fail(["4XX", "5XX"]),
    M.json("default", operations.ClaimFaucetResponse$inboundSchema, {
      key: "oneOf",
    }),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
