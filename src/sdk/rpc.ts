/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import { createPageIterator, PageIterator, Paginator } from "./types";
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

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.CreateRpcRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
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
        const context = {
            operationID: "createRpc",
            oAuth2Scopes: [],
            securitySource: this.options$.startonApiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "404", "4XX", "5XX"] };
        const request = this.createRequest$(
            context,
            {
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
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.CreateRpcResponse$.inboundSchema.parse({
                        ...responseFields$,
                        Rpc: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.CreateRpcResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else if (this.matchResponse(response, 404, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.CreateRpcNetworkRpcResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError(
                "Unexpected API response status or content-type",
                response,
                responseBody
            );
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

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.DeleteRpcRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
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
        const context = {
            operationID: "deleteRpc",
            oAuth2Scopes: [],
            securitySource: this.options$.startonApiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "404", "4XX", "5XX"] };
        const request = this.createRequest$(
            context,
            {
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
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.DeleteRpcResponse$.inboundSchema.parse({
                        ...responseFields$,
                        number: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.DeleteRpcResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else if (this.matchResponse(response, 404, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.DeleteRpcNetworkRpcResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError(
                "Unexpected API response status or content-type",
                response,
                responseBody
            );
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

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.GetAllRpcRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
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
        const context = {
            operationID: "getAllRpc",
            oAuth2Scopes: [],
            securitySource: this.options$.startonApiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "4XX", "5XX"] };
        const request = this.createRequest$(
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
            const parsed = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.GetAllRpcResponse$.inboundSchema.parse({
                        ...responseFields$,
                        RpcPaginated: val$,
                    });
                },
                "Response validation failed"
            );
            const next$ = nextFunc(responseBody);
            const page$ = { ...parsed, next: next$ };
            const result = { ...page$, ...createPageIterator(page$) };
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.GetAllRpcResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError(
                "Unexpected API response status or content-type",
                response,
                responseBody
            );
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

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.GetOneRpcRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
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
        const context = {
            operationID: "getOneRpc",
            oAuth2Scopes: [],
            securitySource: this.options$.startonApiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "404", "4XX", "5XX"] };
        const request = this.createRequest$(
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

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.GetOneRpcResponse$.inboundSchema.parse({
                        ...responseFields$,
                        Rpc: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.GetOneRpcResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else if (this.matchResponse(response, 404, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.GetOneRpcNetworkRpcResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError(
                "Unexpected API response status or content-type",
                response,
                responseBody
            );
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

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.UpdateRpcRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
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
        const context = {
            operationID: "updateRpc",
            oAuth2Scopes: [],
            securitySource: this.options$.startonApiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "404", "4XX", "5XX"] };
        const request = this.createRequest$(
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

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.UpdateRpcResponse$.inboundSchema.parse({
                        ...responseFields$,
                        Rpc: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.UpdateRpcResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else if (this.matchResponse(response, 404, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return errors.UpdateRpcNetworkRpcResponseBody$.inboundSchema.parse({
                        ...responseFields$,
                        ...val$,
                    });
                },
                "Response validation failed"
            );
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError(
                "Unexpected API response status or content-type",
                response,
                responseBody
            );
        }
    }
}
