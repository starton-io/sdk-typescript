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
 * Cancel a webhook
 *
 * @remarks
 * Terminates the designated webhook, identified by its {id}, preventing any further processing.
 */
export async function webhookCancel(
    client$: StartonCore,
    request: operations.CancelWebhookRequest,
    options?: RequestOptions
): Promise<
    Result<
        operations.CancelWebhookResponse,
        | errors.CancelWebhookResponseBody
        | errors.CancelWebhookWebhookResponseBody
        | errors.CancelWebhookWebhookResponseResponseBody
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
        (value$) => operations.CancelWebhookRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const pathParams$ = {
        id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
    };

    const path$ = pathToFunc("/v3/webhook/{id}/cancel")(pathParams$);

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const apiKey$ = await extractSecurity(client$.options$.apiKey);
    const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
    const context = {
        operationID: "cancelWebhook",
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
        errorCodes: ["400", "404", "412", "4XX", "5XX"],
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
        operations.CancelWebhookResponse,
        | errors.CancelWebhookResponseBody
        | errors.CancelWebhookWebhookResponseBody
        | errors.CancelWebhookWebhookResponseResponseBody
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(201, operations.CancelWebhookResponse$inboundSchema, { key: "Webhook" }),
        m$.jsonErr(400, errors.CancelWebhookResponseBody$inboundSchema),
        m$.jsonErr(404, errors.CancelWebhookWebhookResponseBody$inboundSchema),
        m$.jsonErr(412, errors.CancelWebhookWebhookResponseResponseBody$inboundSchema),
        m$.fail(["4XX", "5XX"])
    )(response, { extraFields: responseFields$ });
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
