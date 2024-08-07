/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { StartonCore } from "../core.js";
import { encodeSimple as encodeSimple$ } from "../lib/encodings.js";
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

/**
 * Retrieves Smart Contract Functions and Events
 *
 * @remarks
 * Provides a list of the available read and write functions, as well as events, of a specified smart contract. This can be used to understand how to interact with the contract.
 */
export async function smartContractManagementGetFunctions(
    client$: StartonCore,
    request: operations.GetAvailableFunctionsSmartContractRequest,
    options?: RequestOptions
): Promise<
    Result<
        operations.GetAvailableFunctionsSmartContractResponse,
        | errors.GetAvailableFunctionsSmartContractResponseBody
        | errors.GetAvailableFunctionsSmartContractSmartContractManagementResponseBody
        | errors.GetAvailableFunctionsSmartContractSmartContractManagementResponseResponseBody
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$ = request;

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) =>
            operations.GetAvailableFunctionsSmartContractRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const pathParams$ = {
        address: encodeSimple$("address", payload$.address, {
            explode: false,
            charEncoding: "percent",
        }),
        network: encodeSimple$("network", payload$.network, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc("/v3/smart-contract/{network}/{address}/available-functions")(
        pathParams$
    );

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const apiKey$ = await extractSecurity(client$.options$.apiKey);
    const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
    const context = {
        operationID: "getAvailableFunctionsSmartContract",
        oAuth2Scopes: [],
        securitySource: client$.options$.apiKey,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "GET",
            path: path$,
            headers: headers$,
            body: body$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return requestRes;
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: ["400", "404", "4XX", "500", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const responseFields$ = {
        ContentType: response.headers.get("content-type") ?? "application/octet-stream",
        StatusCode: response.status,
        RawResponse: response,
        Headers: {},
    };

    const [result$] = await m$.match<
        operations.GetAvailableFunctionsSmartContractResponse,
        | errors.GetAvailableFunctionsSmartContractResponseBody
        | errors.GetAvailableFunctionsSmartContractSmartContractManagementResponseBody
        | errors.GetAvailableFunctionsSmartContractSmartContractManagementResponseResponseBody
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, operations.GetAvailableFunctionsSmartContractResponse$inboundSchema, {
            key: "AvailableFunctions",
        }),
        m$.jsonErr(400, errors.GetAvailableFunctionsSmartContractResponseBody$inboundSchema),
        m$.jsonErr(
            404,
            errors.GetAvailableFunctionsSmartContractSmartContractManagementResponseBody$inboundSchema
        ),
        m$.jsonErr(
            500,
            errors.GetAvailableFunctionsSmartContractSmartContractManagementResponseResponseBody$inboundSchema
        ),
        m$.fail(["4XX", "5XX"])
    )(response, { extraFields: responseFields$ });
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
