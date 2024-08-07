/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { StartonCore } from "../core.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
} from "../lib/encodings.js";
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
 * Deploy Smart Contract from Template
 *
 * @remarks
 * Deploy from Starton audited smart contract template.
 */
export async function smartContractManagementDeployFromTemplate(
    client$: StartonCore,
    request: operations.DeployFromTemplateSmartContractRequest,
    options?: RequestOptions
): Promise<
    Result<
        operations.DeployFromTemplateSmartContractResponse,
        | errors.DeployFromTemplateSmartContractResponseBody
        | errors.DeployFromTemplateSmartContractSmartContractManagementResponseBody
        | errors.DeployFromTemplateSmartContractSmartContractManagementResponseResponseBody
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
        (value$) => operations.DeployFromTemplateSmartContractRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = encodeJSON$("body", payload$.DeployFromTemplateDto, { explode: true });

    const path$ = pathToFunc("/v3/smart-contract/from-template")();

    const query$ = encodeFormQuery$({
        simulate: payload$.simulate,
    });

    const headers$ = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
    });

    const apiKey$ = await extractSecurity(client$.options$.apiKey);
    const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
    const context = {
        operationID: "deployFromTemplateSmartContract",
        oAuth2Scopes: [],
        securitySource: client$.options$.apiKey,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "POST",
            path: path$,
            headers: headers$,
            query: query$,
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
        operations.DeployFromTemplateSmartContractResponse,
        | errors.DeployFromTemplateSmartContractResponseBody
        | errors.DeployFromTemplateSmartContractSmartContractManagementResponseBody
        | errors.DeployFromTemplateSmartContractSmartContractManagementResponseResponseBody
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(201, operations.DeployFromTemplateSmartContractResponse$inboundSchema, {
            key: "DeploySmartContractResponse",
        }),
        m$.jsonErr(400, errors.DeployFromTemplateSmartContractResponseBody$inboundSchema),
        m$.jsonErr(
            404,
            errors.DeployFromTemplateSmartContractSmartContractManagementResponseBody$inboundSchema
        ),
        m$.jsonErr(
            500,
            errors.DeployFromTemplateSmartContractSmartContractManagementResponseResponseBody$inboundSchema
        ),
        m$.fail(["4XX", "5XX"])
    )(response, { extraFields: responseFields$ });
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
