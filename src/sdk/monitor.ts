/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as errors from "./models/errors/index.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { createPageIterator, PageIterator, Paginator } from "./types/operations.js";
import jp from "jsonpath";

export class Monitor extends ClientSDK {
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
     * Create a New Watcher
     *
     * @remarks
     * Adds a new watcher to the current project to start monitoring an address.
     */
    async create(
        request: shared.CreateWatcherDto,
        options?: RequestOptions
    ): Promise<operations.CreateWatcherResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => shared.CreateWatcherDto$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/v3/watcher")();

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
            operationID: "createWatcher",
            oAuth2Scopes: [],
            securitySource: this.options$.startonApiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "409", "412", "4XX", "500", "5XX"] };
        const request$ = this.createRequest$(
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

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.CreateWatcherResponse>()
            .json(201, operations.CreateWatcherResponse$, { key: "Watcher" })
            .json(400, errors.CreateWatcherResponseBody$, { err: true })
            .json(409, errors.CreateWatcherMonitorResponseBody$, { err: true })
            .json(412, errors.CreateWatcherMonitorResponseResponseBody$, { err: true })
            .json(500, errors.CreateWatcherMonitorResponse500ResponseBody$, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Delete a watcher
     *
     * @remarks
     * Removes a specific watcher from the current project. This action is irreversible.
     */
    async delete(
        request: operations.DeleteWatcherRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteWatcherResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.DeleteWatcherRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/v3/watcher/{id}")(pathParams$);

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
            operationID: "deleteWatcher",
            oAuth2Scopes: [],
            securitySource: this.options$.startonApiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "404", "4XX", "5XX"] };
        const request$ = this.createRequest$(
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

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.DeleteWatcherResponse>()
            .json(200, operations.DeleteWatcherResponse$, { key: "number" })
            .json(400, errors.DeleteWatcherResponseBody$, { err: true })
            .json(404, errors.DeleteWatcherMonitorResponseBody$, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Retrieve List of Watchers
     *
     * @remarks
     * Fetches list of all watchers associated with the current project.
     */
    async getAll(
        request: operations.GetAllWatcherRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.GetAllWatcherResponse>> {
        const input$ = typeof request === "undefined" ? {} : request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetAllWatcherRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/v3/watcher")();

        const query$ = encodeFormQuery$({
            address: payload$.address,
            confirmationsBlocks: payload$.confirmationsBlocks,
            limit: payload$.limit,
            name: payload$.name,
            network: payload$.network,
            page: payload$.page,
            paused: payload$.paused,
            type: payload$.type,
            webhookUrl: payload$.webhookUrl,
        });

        let security$;
        if (typeof this.options$.startonApiKey === "function") {
            security$ = { startonApiKey: await this.options$.startonApiKey() };
        } else if (this.options$.startonApiKey) {
            security$ = { startonApiKey: this.options$.startonApiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "getAllWatcher",
            oAuth2Scopes: [],
            securitySource: this.options$.startonApiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "4XX", "5XX"] };
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

        const [result$, raw$] = await this.matcher<operations.GetAllWatcherResponse>()
            .json(200, operations.GetAllWatcherResponse$, { key: "WatcherPaginated" })
            .json(400, errors.GetAllWatcherResponseBody$, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        const nextFunc = (responseData: unknown): Paginator<operations.GetAllWatcherResponse> => {
            const page = input$.page || 0;
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
            const limit = input$.limit || 0;
            if (results.length < limit) {
                return () => null;
            }

            return () =>
                this.getAll(
                    {
                        ...input$,
                        page: nextPage,
                    },
                    options
                );
        };

        const page$ = { ...result$, next: nextFunc(raw$) };
        return { ...page$, ...createPageIterator(page$) };
    }

    /**
     * Fetches the list of events for a watcher
     *
     * @remarks
     * Fetches a list of all events linked to a specific watcher, identified by {id}.
     */
    async getAllEvents(
        request: operations.GetAllWatcherEventRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.GetAllWatcherEventResponse>> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetAllWatcherEventRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/v3/watcher/{id}/event")(pathParams$);

        const query$ = encodeFormQuery$({
            limit: payload$.limit,
            page: payload$.page,
        });

        let security$;
        if (typeof this.options$.startonApiKey === "function") {
            security$ = { startonApiKey: await this.options$.startonApiKey() };
        } else if (this.options$.startonApiKey) {
            security$ = { startonApiKey: this.options$.startonApiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "getAllWatcherEvent",
            oAuth2Scopes: [],
            securitySource: this.options$.startonApiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "4XX", "5XX"] };
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

        const [result$, raw$] = await this.matcher<operations.GetAllWatcherEventResponse>()
            .json(200, operations.GetAllWatcherEventResponse$, { key: "WatcherEventPaginated" })
            .json(400, errors.GetAllWatcherEventResponseBody$, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        const nextFunc = (
            responseData: unknown
        ): Paginator<operations.GetAllWatcherEventResponse> => {
            const page = input$.page || 0;
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
            const limit = input$.limit || 0;
            if (results.length < limit) {
                return () => null;
            }

            return () =>
                this.getAllEvents(
                    {
                        ...input$,
                        page: nextPage,
                    },
                    options
                );
        };

        const page$ = { ...result$, next: nextFunc(raw$) };
        return { ...page$, ...createPageIterator(page$) };
    }

    /**
     * Get a specific watcher
     *
     * @remarks
     * Retrieves detailed information about a specific watcher identified by its unique {id} within the current project.
     */
    async getOne(
        request: operations.GetOneWatcherRequest,
        options?: RequestOptions
    ): Promise<operations.GetOneWatcherResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetOneWatcherRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/v3/watcher/{id}")(pathParams$);

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
            operationID: "getOneWatcher",
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

        const [result$] = await this.matcher<operations.GetOneWatcherResponse>()
            .json(200, operations.GetOneWatcherResponse$, { key: "Watcher" })
            .json(400, errors.GetOneWatcherResponseBody$, { err: true })
            .json(404, errors.GetOneWatcherMonitorResponseBody$, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get a watcher event
     *
     * @remarks
     * Retrieves information about a specific watcher event.
     */
    async getOneEvent(
        request: operations.GetOneWatcherEventRequest,
        options?: RequestOptions
    ): Promise<operations.GetOneWatcherEventResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetOneWatcherEventRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            eventId: encodeSimple$("eventId", payload$.eventId, {
                explode: false,
                charEncoding: "percent",
            }),
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/v3/watcher/{id}/event/{eventId}")(pathParams$);

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
            operationID: "getOneWatcherEvent",
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

        const [result$] = await this.matcher<operations.GetOneWatcherEventResponse>()
            .json(200, operations.GetOneWatcherEventResponse$, { key: "WatcherEvent" })
            .json(400, errors.GetOneWatcherEventResponseBody$, { err: true })
            .json(404, errors.GetOneWatcherEventMonitorResponseBody$, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Update a watcher
     *
     * @remarks
     * Modifies the properties of an existing watcher. Only the fields provided in the request body will be updated.
     */
    async update(
        request: operations.UpdateWatcherRequest,
        options?: RequestOptions
    ): Promise<operations.UpdateWatcherResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.UpdateWatcherRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.UpdateWatcherDto, { explode: true });

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/v3/watcher/{id}")(pathParams$);

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
            operationID: "updateWatcher",
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

        const [result$] = await this.matcher<operations.UpdateWatcherResponse>()
            .json(200, operations.UpdateWatcherResponse$, { key: "Watcher" })
            .json(400, errors.UpdateWatcherResponseBody$, { err: true })
            .json(404, errors.UpdateWatcherMonitorResponseBody$, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
