/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";
import { Paginated, Paginator } from "../sdk/types";
import { Setting } from "./setting";
import jp from "jsonpath";

export class TransactionManager extends ClientSDK {
    private readonly options$: SDKOptions;

    constructor(options: SDKOptions = {}) {
        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
        });

        this.options$ = options;
        void this.options$;
    }

    private _setting?: Setting;
    get setting() {
        return (this._setting ??= new Setting(this.options$));
    }
    /**
     * Create a new transaction
     *
     * @remarks
     * Create a new blockchain transaction
     */
    async create(
        input: operations.CreateTransactionRequest,
        options?: RequestOptions
    ): Promise<operations.CreateTransactionResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.CreateTransactionRequest$.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.CreateTransactionDto, { explode: true });

        const path$ = this.templateURLComponent("/v3/transaction")();

        const query$ = [
            enc$.encodeForm("simulate", payload$.simulate, {
                explode: true,
                charEncoding: "percent",
            }),
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

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "post",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 201, "application/json")) {
            const responseBody = await response.json();
            const result = operations.CreateTransactionResponse$.inboundSchema.parse({
                ...responseFields$,
                Transaction: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Retrieve a List of Transactions
     *
     * @remarks
     * Retrieves a list of transactions.
     */
    async getAll(
        input: operations.GetAllTransactionRequest,
        options?: RequestOptions
    ): Promise<Paginated<operations.GetAllTransactionResponse>> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetAllTransactionRequest$.outboundSchema.parse(input);
        const body$ = null;

        const path$ = this.templateURLComponent("/v3/transaction")();

        const query$ = [
            enc$.encodeForm("from", payload$.from, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("fromDate", payload$.fromDate, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("limit", payload$.limit, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("network", payload$.network, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("page", payload$.page, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("to", payload$.to, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("transactionHash", payload$.transactionHash, {
                explode: true,
                charEncoding: "percent",
            }),
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

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "get",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const nextFunc = (
            responseData: unknown
        ): Paginator<operations.GetAllTransactionResponse> => {
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
            const parsed = operations.GetAllTransactionResponse$.inboundSchema.parse({
                ...responseFields$,
                TransactionPaginated: responseBody,
            });
            const result = { ...parsed, next: nextFunc(responseBody) };
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Retrieve Available Nonces for a wallet
     *
     * @remarks
     * Gets all available nonces for a wallet, ensuring transaction integrity on the blockchain.
     */
    async getAvailableNonces(
        input: operations.GetAvailableNoncesWalletRequest,
        options?: RequestOptions
    ): Promise<operations.GetAvailableNoncesWalletResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetAvailableNoncesWalletRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            address: enc$.encodeSimple("address", payload$.address, {
                explode: false,
                charEncoding: "percent",
            }),
            network: enc$.encodeSimple("network", payload$.network, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent(
            "/v3/kms/wallet/{address}/{network}/nonce/available"
        )(pathParams$);

        let security$;
        if (typeof this.options$.startonApiKey === "function") {
            security$ = { startonApiKey: await this.options$.startonApiKey() };
        } else if (this.options$.startonApiKey) {
            security$ = { startonApiKey: this.options$.startonApiKey };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "get",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetAvailableNoncesWalletResponse$.inboundSchema.parse({
                ...responseFields$,
                NoncesAvailable: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Get a Specific Transaction
     *
     * @remarks
     * Retrieves the details of a specific transaction using its unique identifier.
     */
    async getOne(
        input: operations.GetOneTransactionRequest,
        options?: RequestOptions
    ): Promise<operations.GetOneTransactionResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetOneTransactionRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent("/v3/transaction/{id}")(pathParams$);

        let security$;
        if (typeof this.options$.startonApiKey === "function") {
            security$ = { startonApiKey: await this.options$.startonApiKey() };
        } else if (this.options$.startonApiKey) {
            security$ = { startonApiKey: this.options$.startonApiKey };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "get",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetOneTransactionResponse$.inboundSchema.parse({
                ...responseFields$,
                Transaction: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Synchronize Nonces for a wallet
     *
     * @remarks
     * Updates the stored nonce values for a wallet, synchronizing them with the current blockchain state.
     */
    async resyncNonce(
        input: operations.ResyncNoncesWalletRequest,
        options?: RequestOptions
    ): Promise<operations.ResyncNoncesWalletResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.ResyncNoncesWalletRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            address: enc$.encodeSimple("address", payload$.address, {
                explode: false,
                charEncoding: "percent",
            }),
            network: enc$.encodeSimple("network", payload$.network, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/v3/kms/wallet/{address}/{network}/nonce/resync")(
            pathParams$
        );

        let security$;
        if (typeof this.options$.startonApiKey === "function") {
            security$ = { startonApiKey: await this.options$.startonApiKey() };
        } else if (this.options$.startonApiKey) {
            security$ = { startonApiKey: this.options$.startonApiKey };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "post",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 201, "application/json")) {
            const responseBody = await response.json();
            const result = operations.ResyncNoncesWalletResponse$.inboundSchema.parse({
                ...responseFields$,
                resyncNonce: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }
}
