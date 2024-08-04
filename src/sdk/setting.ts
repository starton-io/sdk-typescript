/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as errors from "./models/errors/index.js";
import { SDKError } from "./models/errors/sdkerror.js";
import { SDKValidationError } from "./models/errors/sdkvalidationerror.js";
import * as operations from "./models/operations/index.js";
import { unwrap as unwrap$ } from "./types/fp.js";

export class Setting extends ClientSDK {
    /**
     * Get Relayer settings
     *
     * @remarks
     * Retrieve the Relayer settings for a specific network within the current project.
     */
    async get(
        request: operations.GetAllSettingRelayerRequest,
        options?: RequestOptions
    ): Promise<operations.GetAllSettingRelayerResponse> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.GetAllSettingRelayerRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const pathParams$ = {
            network: encodeSimple$("network", payload$.network, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = pathToFunc("/v3/setting/relayer/{network}")(pathParams$);

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const apiKey$ = await extractSecurity(this.options$.apiKey);
        const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
        const context = {
            operationID: "getAllSettingRelayer",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: ["400", "404", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });
        const response = unwrap$(doResult);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await m$.match<
            operations.GetAllSettingRelayerResponse,
            | errors.GetAllSettingRelayerResponseBody
            | errors.GetAllSettingRelayerTransactionManagerSettingResponseBody
            | SDKError
            | SDKValidationError
        >(
            m$.json(200, operations.GetAllSettingRelayerResponse$inboundSchema, {
                key: "SettingRelayer",
            }),
            m$.jsonErr(400, errors.GetAllSettingRelayerResponseBody$inboundSchema),
            m$.jsonErr(
                404,
                errors.GetAllSettingRelayerTransactionManagerSettingResponseBody$inboundSchema
            ),
            m$.fail(["4XX", "5XX"])
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    /**
     * Update Relayer Settings
     *
     * @remarks
     * Update the Relayer settings for a specific network within the current project.
     */
    async update(
        request: operations.UpdateSettingRelayerRequest,
        options?: RequestOptions
    ): Promise<operations.UpdateSettingRelayerResponse> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.UpdateSettingRelayerRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = encodeJSON$("body", payload$.UpdateSettingRelayerDto, { explode: true });

        const pathParams$ = {
            network: encodeSimple$("network", payload$.network, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = pathToFunc("/v3/setting/relayer/{network}")(pathParams$);

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const apiKey$ = await extractSecurity(this.options$.apiKey);
        const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
        const context = {
            operationID: "updateSettingRelayer",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PATCH",
                path: path$,
                headers: headers$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: ["400", "404", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });
        const response = unwrap$(doResult);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await m$.match<
            operations.UpdateSettingRelayerResponse,
            | errors.UpdateSettingRelayerResponseBody
            | errors.UpdateSettingRelayerTransactionManagerSettingResponseBody
            | SDKError
            | SDKValidationError
        >(
            m$.json(200, operations.UpdateSettingRelayerResponse$inboundSchema, {
                key: "SettingRelayer",
            }),
            m$.jsonErr(400, errors.UpdateSettingRelayerResponseBody$inboundSchema),
            m$.jsonErr(
                404,
                errors.UpdateSettingRelayerTransactionManagerSettingResponseBody$inboundSchema
            ),
            m$.fail(["4XX", "5XX"])
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }
}
