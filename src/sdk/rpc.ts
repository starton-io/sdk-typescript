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
import { createPageIterator, PageIterator, Paginator } from "../sdk/types";
import jp from "jsonpath";

export class Rpc extends ClientSDK {
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
     * Add a rpc (enterprise)
     *
     * @remarks
     * Add a rpc for a specific network
     */
    async create(
        input: operations.CreateRpcRequest,
        options?: RequestOptions
    ): Promise<operations.CreateRpcResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.CreateRpcRequest$.outboundSchema.parse(input);
        const body$ = enc$.encodeJSON("body", payload$.CreateRpcDto, { explode: true });

        const pathParams$ = {
            name: enc$.encodeSimple("name", payload$.name, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v3/network/{name}/rpc")(pathParams$);

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

        const context = { operationID: "createRpc" };
        const doOptions = { context, errorCodes: ["400", "404", "4XX", "5XX"] };
        const request = await this.createRequest$(
            {
                context,
                security: securitySettings$,
                method: "POST",
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

        if (this.matchResponse(response, 201, "application/json")) {
            const responseBody = await response.json();
            const result = operations.CreateRpcResponse$.inboundSchema.parse({
                ...responseFields$,
                Rpc: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.CreateRpcResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else if (this.matchResponse(response, 404, "application/json")) {
            const responseBody = await response.json();
            const result = errors.CreateRpcNetworkRpcResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Delete a rpc (enterprise)
     *
     * @remarks
     * Delete a rpc for a specific network
     */
    async delete(
        input: operations.DeleteRpcRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteRpcResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.DeleteRpcRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
            name: enc$.encodeSimple("name", payload$.name, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v3/network/{name}/rpc/{id}")(pathParams$);

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

        const context = { operationID: "deleteRpc" };
        const doOptions = { context, errorCodes: ["400", "404", "4XX", "5XX"] };
        const request = await this.createRequest$(
            {
                context,
                security: securitySettings$,
                method: "DELETE",
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
            const result = operations.DeleteRpcResponse$.inboundSchema.parse({
                ...responseFields$,
                number: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.DeleteRpcResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else if (this.matchResponse(response, 404, "application/json")) {
            const responseBody = await response.json();
            const result = errors.DeleteRpcNetworkRpcResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Get all rpc (enterprise)
     *
     * @remarks
     * Return all rpc for a specific network
     */
    async getAll(
        input: operations.GetAllRpcRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.GetAllRpcResponse>> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetAllRpcRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            name: enc$.encodeSimple("name", payload$.name, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v3/network/{name}/rpc")(pathParams$);

        const query$ = [
            enc$.encodeForm("limit", payload$.limit, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("page", payload$.page, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.startonApiKey === "function") {
            security$ = { startonApiKey: await this.options$.startonApiKey() };
        } else if (this.options$.startonApiKey) {
            security$ = { startonApiKey: this.options$.startonApiKey };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "getAllRpc" };
        const doOptions = { context, errorCodes: ["400", "4XX", "5XX"] };
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

        const nextFunc = (responseData: unknown): Paginator<operations.GetAllRpcResponse> => {
            const page = input.page || 0;
            const nextPage = page + 1;
            const numPages = jp.value(responseData, "$.meta.totalPages");
            if (numPages == null || numPages <= page) {
                return () => null;
            }

            if (!responseData) {
                return () => null;
            }
            const results = jp.value(responseData, "$.items");
            if (!results.length) {
                return () => null;
            }
            const limit = input.limit || 0;
            if (results.length < limit) {
                return () => null;
            }

            return () =>
                this.getAll(
                    {
                        ...input,
                        page: nextPage,
                    },
                    options
                );
        };

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const parsed = operations.GetAllRpcResponse$.inboundSchema.parse({
                ...responseFields$,
                RpcPaginated: responseBody,
            });
            const next$ = nextFunc(responseBody);
            const page$ = { ...parsed, next: next$ };
            const result = { ...page$, ...createPageIterator(page$) };
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.GetAllRpcResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Get a rpc (enterprise)
     *
     * @remarks
     * Return a specific rpc for a specific network
     */
    async getOne(
        input: operations.GetOneRpcRequest,
        options?: RequestOptions
    ): Promise<operations.GetOneRpcResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetOneRpcRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
            name: enc$.encodeSimple("name", payload$.name, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v3/network/{name}/rpc/{id}")(pathParams$);

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

        const context = { operationID: "getOneRpc" };
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
            const result = operations.GetOneRpcResponse$.inboundSchema.parse({
                ...responseFields$,
                Rpc: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.GetOneRpcResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else if (this.matchResponse(response, 404, "application/json")) {
            const responseBody = await response.json();
            const result = errors.GetOneRpcNetworkRpcResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Update a rpc (enterprise)
     *
     * @remarks
     * Update a specific rpc for a specific network
     */
    async update(
        input: operations.UpdateRpcRequest,
        options?: RequestOptions
    ): Promise<operations.UpdateRpcResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.UpdateRpcRequest$.outboundSchema.parse(input);
        const body$ = enc$.encodeJSON("body", payload$.UpdateRpcDto, { explode: true });

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
            name: enc$.encodeSimple("name", payload$.name, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v3/network/{name}/rpc/{id}")(pathParams$);

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

        const context = { operationID: "updateRpc" };
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
            const result = operations.UpdateRpcResponse$.inboundSchema.parse({
                ...responseFields$,
                Rpc: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.UpdateRpcResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else if (this.matchResponse(response, 404, "application/json")) {
            const responseBody = await response.json();
            const result = errors.UpdateRpcNetworkRpcResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }
}
