/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";

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
        input: operations.GetAllSettingRelayerRequest,
        options?: RequestOptions
    ): Promise<operations.GetAllSettingRelayerResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetAllSettingRelayerRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            network: enc$.encodeSimple("network", payload$.network, {
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
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "getAllSettingRelayer" };
        const doOptions = { context, errorCodes: ["400", "404", "4XX", "5XX"] };
        const request = await this.createRequest$(
            {
                context,
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetAllSettingRelayerResponse$.inboundSchema.parse({
                ...responseFields$,
                SettingRelayer: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.GetAllSettingRelayerResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else if (this.matchResponse(response, 404, "application/json")) {
            const responseBody = await response.json();
            const result =
                errors.GetAllSettingRelayerTransactionManagerSettingResponseBody$.inboundSchema.parse(
                    {
                        ...responseFields$,
                        ...responseBody,
                    }
                );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Update Relayer Settings
     *
     * @remarks
     * Update the Relayer settings for a specific network within the current project.
     */
    async update(
        input: operations.UpdateSettingRelayerRequest,
        options?: RequestOptions
    ): Promise<operations.UpdateSettingRelayerResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.UpdateSettingRelayerRequest$.outboundSchema.parse(input);
        const body$ = enc$.encodeJSON("body", payload$.UpdateSettingRelayerDto, { explode: true });

        const pathParams$ = {
            network: enc$.encodeSimple("network", payload$.network, {
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
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "updateSettingRelayer" };
        const doOptions = { context, errorCodes: ["400", "404", "4XX", "5XX"] };
        const request = await this.createRequest$(
            {
                context,
                security: securitySettings$,
                method: "PATCH",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.UpdateSettingRelayerResponse$.inboundSchema.parse({
                ...responseFields$,
                SettingRelayer: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.UpdateSettingRelayerResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else if (this.matchResponse(response, 404, "application/json")) {
            const responseBody = await response.json();
            const result =
                errors.UpdateSettingRelayerTransactionManagerSettingResponseBody$.inboundSchema.parse(
                    {
                        ...responseFields$,
                        ...responseBody,
                    }
                );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }
}
