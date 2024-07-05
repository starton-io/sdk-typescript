/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
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
import { Setting } from "./setting.js";
import { createPageIterator, PageIterator, Paginator } from "./types/operations.js";
import jp from "jsonpath";

export class TransactionManager extends ClientSDK {
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

    private _setting?: Setting;
    get setting(): Setting {
        return (this._setting ??= new Setting(this.options$));
    }

    /**
     * Create a new transaction
     *
     * @remarks
     * Create a new blockchain transaction
     */
    async create(
        request: operations.CreateTransactionRequest,
        options?: RequestOptions
    ): Promise<operations.CreateTransactionResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.CreateTransactionRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.CreateTransactionDto, { explode: true });

        const path$ = this.templateURLComponent("/v3/transaction")();

        const query$ = encodeFormQuery$({
            simulate: payload$.simulate,
        });

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "createTransaction",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

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

        const response = await this.do$(request$, {
            context,
            errorCodes: ["400", "404", "422", "4XX", "500", "5XX"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.CreateTransactionResponse>()
            .json(201, operations.CreateTransactionResponse$, { key: "Transaction" })
            .json(400, errors.CreateTransactionResponseBody$, { err: true })
            .json(404, errors.CreateTransactionTransactionManagerResponseBody$, { err: true })
            .json(422, errors.CreateTransactionTransactionManagerResponseResponseBody$, {
                err: true,
            })
            .json(500, errors.CreateTransactionTransactionManagerResponse500ResponseBody$, {
                err: true,
            })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Retrieve a List of Transactions
     *
     * @remarks
     * Retrieves a list of transactions.
     */
    async getAll(
        request: operations.GetAllTransactionRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.GetAllTransactionResponse>> {
        const input$ = typeof request === "undefined" ? {} : request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetAllTransactionRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/v3/transaction")();

        const query$ = encodeFormQuery$({
            from: payload$.from,
            fromDate: payload$.fromDate,
            limit: payload$.limit,
            network: payload$.network,
            page: payload$.page,
            to: payload$.to,
            transactionHash: payload$.transactionHash,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "getAllTransaction",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

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

        const response = await this.do$(request$, { context, errorCodes: ["400", "4XX", "5XX"] });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$, raw$] = await this.matcher<operations.GetAllTransactionResponse>()
            .json(200, operations.GetAllTransactionResponse$, { key: "TransactionPaginated" })
            .json(400, errors.GetAllTransactionResponseBody$, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        const nextFunc = (
            responseData: unknown
        ): Paginator<operations.GetAllTransactionResponse> => {
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
     * Retrieve Available Nonces for a wallet
     *
     * @remarks
     * Gets all available nonces for a wallet, ensuring transaction integrity on the blockchain.
     */
    async getAvailableNonces(
        request: operations.GetAvailableNoncesWalletRequest,
        options?: RequestOptions
    ): Promise<operations.GetAvailableNoncesWalletResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetAvailableNoncesWalletRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
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
        const path$ = this.templateURLComponent(
            "/v3/kms/wallet/{address}/{network}/nonce/available"
        )(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "getAvailableNoncesWallet",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

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

        const response = await this.do$(request$, {
            context,
            errorCodes: ["400", "404", "422", "4XX", "500", "5XX"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.GetAvailableNoncesWalletResponse>()
            .json(200, operations.GetAvailableNoncesWalletResponse$, { key: "NoncesAvailable" })
            .json(400, errors.GetAvailableNoncesWalletResponseBody$, { err: true })
            .json(404, errors.GetAvailableNoncesWalletTransactionManagerResponseBody$, {
                err: true,
            })
            .json(422, errors.GetAvailableNoncesWalletTransactionManagerResponseResponseBody$, {
                err: true,
            })
            .json(500, errors.GetAvailableNoncesWalletTransactionManagerResponse500ResponseBody$, {
                err: true,
            })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get a Specific Transaction
     *
     * @remarks
     * Retrieves the details of a specific transaction using its unique identifier.
     */
    async getOne(
        request: operations.GetOneTransactionRequest,
        options?: RequestOptions
    ): Promise<operations.GetOneTransactionResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetOneTransactionRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/v3/transaction/{id}")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "getOneTransaction",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

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

        const response = await this.do$(request$, {
            context,
            errorCodes: ["400", "404", "4XX", "5XX"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.GetOneTransactionResponse>()
            .json(200, operations.GetOneTransactionResponse$, { key: "Transaction" })
            .json(400, errors.GetOneTransactionResponseBody$, { err: true })
            .json(404, errors.GetOneTransactionTransactionManagerResponseBody$, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Synchronize Nonces for a wallet
     *
     * @remarks
     * Updates the stored nonce values for a wallet, synchronizing them with the current blockchain state.
     */
    async resyncNonce(
        request: operations.ResyncNoncesWalletRequest,
        options?: RequestOptions
    ): Promise<operations.ResyncNoncesWalletResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ResyncNoncesWalletRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
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
        const path$ = this.templateURLComponent("/v3/kms/wallet/{address}/{network}/nonce/resync")(
            pathParams$
        );

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "resyncNoncesWallet",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

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

        const response = await this.do$(request$, {
            context,
            errorCodes: ["400", "404", "422", "4XX", "500", "5XX"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.ResyncNoncesWalletResponse>()
            .json(201, operations.ResyncNoncesWalletResponse$, { key: "resyncNonce" })
            .json(400, errors.ResyncNoncesWalletResponseBody$, { err: true })
            .json(404, errors.ResyncNoncesWalletWalletResponseBody$, { err: true })
            .json(422, errors.ResyncNoncesWalletWalletTransactionManagerResponseBody$, {
                err: true,
            })
            .json(500, errors.ResyncNoncesWalletWalletTransactionManagerResponseResponseBody$, {
                err: true,
            })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
