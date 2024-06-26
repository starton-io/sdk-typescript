/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as errors from "./models/errors/index.js";
import * as operations from "./models/operations/index.js";

export class Setting extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

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
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetAllSettingRelayerRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            network: encodeSimple$("network", payload$.network, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v3/setting/relayer/{network}")(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.startonApiKey === "function") {
            security$ = { startonApiKey: await this.options$.startonApiKey() };
        } else if (this.options$.startonApiKey) {
            security$ = { startonApiKey: this.options$.startonApiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "getAllSettingRelayer",
            oAuth2Scopes: [],
            securitySource: this.options$.startonApiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "404", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.GetAllSettingRelayerResponse>()
            .json(200, operations.GetAllSettingRelayerResponse$, { key: "SettingRelayer" })
            .json(400, errors.GetAllSettingRelayerResponseBody$, { err: true })
            .json(404, errors.GetAllSettingRelayerTransactionManagerSettingResponseBody$, {
                err: true,
            })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
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
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.UpdateSettingRelayerRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.UpdateSettingRelayerDto, { explode: true });

        const pathParams$ = {
            network: encodeSimple$("network", payload$.network, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v3/setting/relayer/{network}")(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.startonApiKey === "function") {
            security$ = { startonApiKey: await this.options$.startonApiKey() };
        } else if (this.options$.startonApiKey) {
            security$ = { startonApiKey: this.options$.startonApiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "updateSettingRelayer",
            oAuth2Scopes: [],
            securitySource: this.options$.startonApiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "404", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PATCH",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.UpdateSettingRelayerResponse>()
            .json(200, operations.UpdateSettingRelayerResponse$, { key: "SettingRelayer" })
            .json(400, errors.UpdateSettingRelayerResponseBody$, { err: true })
            .json(404, errors.UpdateSettingRelayerTransactionManagerSettingResponseBody$, {
                err: true,
            })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
