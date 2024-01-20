/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";
import * as shared from "../sdk/models/shared";
import { createPageIterator, PageIterator, Paginator } from "../sdk/types";
import jp from "jsonpath";

export class Wallet extends ClientSDK {
    private readonly options$: SDKOptions;

    constructor(options: SDKOptions = {}) {
        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
        });

        this.options$ = options;
        void this.options$;
    }
    /**
     * Create a new wallet
     *
     * @remarks
     * Create a new wallet for the project.
     */
    async create(
        input: shared.CreateWalletDto,
        options?: RequestOptions
    ): Promise<operations.CreateWalletResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = shared.CreateWalletDto$.outboundSchema.parse(input);
        const body$ = enc$.encodeJSON("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/v3/kms/wallet")();

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
                method: "POST",
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
            const result = operations.CreateWalletResponse$.inboundSchema.parse({
                ...responseFields$,
                Wallet: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.CreateWalletResponseBody$.inboundSchema.parse({
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
     * Delete a wallet
     *
     * @remarks
     * Removes a wallet from the Key Management System.
     */
    async delete(
        input: operations.DeleteWalletRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteWalletResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.DeleteWalletRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            address: enc$.encodeSimple("address", payload$.address, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/v3/kms/wallet/{address}")(pathParams$);

        const query$ = [
            enc$.encodeForm("deleteKeyOnKms", payload$.deleteKeyOnKms, {
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
                method: "DELETE",
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

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.DeleteWalletResponse$.inboundSchema.parse({
                ...responseFields$,
                number: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.DeleteWalletResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else if (this.matchResponse(response, 404, "application/json")) {
            const responseBody = await response.json();
            const result = errors.DeleteWalletWalletResponseBody$.inboundSchema.parse({
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
     * Retrieve the list of Wallets
     *
     * @remarks
     * Fetches the list of wallets of the project
     */
    async getAll(
        input: operations.GetAllWalletRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.GetAllWalletResponse>> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetAllWalletRequest$.outboundSchema.parse(input);
        const body$ = null;

        const path$ = this.templateURLComponent("/v3/kms/wallet")();

        const query$ = [
            enc$.encodeForm("limit", payload$.limit, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("name", payload$.name, { explode: true, charEncoding: "percent" }),
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

        const response = await this.fetch$(
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

        const nextFunc = (responseData: unknown): Paginator<operations.GetAllWalletResponse> => {
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
            const parsed = operations.GetAllWalletResponse$.inboundSchema.parse({
                ...responseFields$,
                WalletPaginated: responseBody,
            });
            const next$ = nextFunc(responseBody);
            const page$ = { ...parsed, next: next$ };
            const result = { ...page$, ...createPageIterator(page$) };
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.GetAllWalletResponseBody$.inboundSchema.parse({
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
     * Fetch Wallet Details
     *
     * @remarks
     * Retrieves information about a specific wallet.
     */
    async getOne(
        input: operations.GetOneWalletRequest,
        options?: RequestOptions
    ): Promise<operations.GetOneWalletResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetOneWalletRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            address: enc$.encodeSimple("address", payload$.address, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/v3/kms/wallet/{address}")(pathParams$);

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
                method: "GET",
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
            const result = operations.GetOneWalletResponse$.inboundSchema.parse({
                ...responseFields$,
                Wallet: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.GetOneWalletResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else if (this.matchResponse(response, 404, "application/json")) {
            const responseBody = await response.json();
            const result = errors.GetOneWalletWalletResponseBody$.inboundSchema.parse({
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
     * Import Wallet from Provider Key
     *
     * @remarks
     * Imports a wallet using a Key Management System.
     */
    async import(
        input: shared.ImportProviderKeyDto,
        options?: RequestOptions
    ): Promise<operations.ImportProviderKeyWalletResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = shared.ImportProviderKeyDto$.outboundSchema.parse(input);
        const body$ = enc$.encodeJSON("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/v3/kms/wallet/import-provider-key")();

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
                method: "POST",
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
            const result = operations.ImportProviderKeyWalletResponse$.inboundSchema.parse({
                ...responseFields$,
                Wallet: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.ImportProviderKeyWalletResponseBody$.inboundSchema.parse({
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
     * Request tokens from faucet
     *
     * @remarks
     * Request tokens from the faucet, which can be used for testing and development purposes on testnet networks. Each user is limited to one request per day.
     */
    async requestFaucet(
        input: operations.ClaimFaucetRequest,
        options?: RequestOptions
    ): Promise<operations.ClaimFaucetResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.ClaimFaucetRequest$.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.RequireFaucetDto, { explode: true });

        const pathParams$ = {
            network: enc$.encodeSimple("network", payload$.network, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/v3/faucet/{network}")(pathParams$);

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
                method: "POST",
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
            const result = operations.ClaimFaucetResponse$.inboundSchema.parse({
                ...responseFields$,
                Faucet: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.ClaimFaucetResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else if (this.matchResponse(response, 500, "application/json")) {
            const responseBody = await response.json();
            const result = errors.ClaimFaucetWalletResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else if (this.matchResponse(response, "default", "application/json")) {
            const responseBody = await response.json();
            const result = operations.ClaimFaucetResponse$.inboundSchema.parse({
                ...responseFields$,
                oneOf: responseBody,
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
                method: "POST",
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
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.ResyncNoncesWalletResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else if (this.matchResponse(response, 404, "application/json")) {
            const responseBody = await response.json();
            const result = errors.ResyncNoncesWalletWalletResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else if (this.matchResponse(response, 422, "application/json")) {
            const responseBody = await response.json();
            const result =
                errors.ResyncNoncesWalletWalletTransactionManagerResponseBody$.inboundSchema.parse({
                    ...responseFields$,
                    ...responseBody,
                });
            throw result;
        } else if (this.matchResponse(response, 500, "application/json")) {
            const responseBody = await response.json();
            const result =
                errors.ResyncNoncesWalletWalletTransactionManagerResponseResponseBody$.inboundSchema.parse(
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
     * Sign a message
     *
     * @remarks
     * Generates a cryptographic signature for a given message using a specified wallet.
     */
    async sign(
        input: operations.SignMessageWalletRequest,
        options?: RequestOptions
    ): Promise<operations.SignMessageWalletResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.SignMessageWalletRequest$.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.SignMessageDto, { explode: true });

        const pathParams$ = {
            address: enc$.encodeSimple("address", payload$.address, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/v3/kms/wallet/{address}/sign-message")(
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
                method: "POST",
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
            const result = operations.SignMessageWalletResponse$.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.SignMessageWalletResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else if (this.matchResponse(response, 404, "application/json")) {
            const responseBody = await response.json();
            const result = errors.SignMessageWalletWalletResponseBody$.inboundSchema.parse({
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
     * Update Wallet Information
     *
     * @remarks
     * Modifies details of an existing wallet using its address.
     */
    async update(
        input: operations.UpdateWalletRequest,
        options?: RequestOptions
    ): Promise<operations.UpdateWalletResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.UpdateWalletRequest$.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.UpdateWalletDto, { explode: true });

        const pathParams$ = {
            address: enc$.encodeSimple("address", payload$.address, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/v3/kms/wallet/{address}")(pathParams$);

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
                method: "PATCH",
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
            const result = operations.UpdateWalletResponse$.inboundSchema.parse({
                ...responseFields$,
                Wallet: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.UpdateWalletResponseBody$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else if (this.matchResponse(response, 404, "application/json")) {
            const responseBody = await response.json();
            const result = errors.UpdateWalletWalletResponseBody$.inboundSchema.parse({
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
