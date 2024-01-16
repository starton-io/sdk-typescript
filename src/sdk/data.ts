/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";

export class Data extends ClientSDK {
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
     * Retrieve the native token balance of a specific blockchain address
     *
     * @remarks
     * Checks the native balance of a given address on a specified blockchain network.
     */
    async getBalance(
        input: operations.GetBalanceAddressRequest,
        options?: RequestOptions
    ): Promise<operations.GetBalanceAddressResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetBalanceAddressRequest$.outboundSchema.parse(input);
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
            "/v3/data/{network}/address/{address}/balance/native"
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
            const result = operations.GetBalanceAddressResponse$.inboundSchema.parse({
                ...responseFields$,
                AddressNativeBalanceResponse: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.GetBalanceAddressResponseBody$.inboundSchema.parse({
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
     * Retrieve the ERC20 token balance for a specific address
     *
     * @remarks
     * Fetches the balance of ERC20 tokens held by a specific address. You must specify the blockchain network, the contract address of the ERC20 token, and the address of the token holder.
     */
    async getErc20Balance(
        input: operations.GetBalanceErc20Request,
        options?: RequestOptions
    ): Promise<operations.GetBalanceErc20Response> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetBalanceErc20Request$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            contractAddress: enc$.encodeSimple("contractAddress", payload$.contractAddress, {
                explode: false,
                charEncoding: "percent",
            }),
            network: enc$.encodeSimple("network", payload$.network, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent(
            "/v3/data/{network}/erc20/{contractAddress}/balance"
        )(pathParams$);

        const query$ = [
            enc$.encodeForm("address", payload$.address, {
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
                method: "GET",
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
            const result = operations.GetBalanceErc20Response$.inboundSchema.parse({
                ...responseFields$,
                ERC20BalanceResponse: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.GetBalanceErc20ResponseBody$.inboundSchema.parse({
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
     *  Retrieve the current gas prices
     *
     * @remarks
     * Provides the current gas prices for the specified blockchain network, offering crucial information to estimate transaction costs.
     */
    async getGasPrice(
        input: operations.GetAllGasPriceRequest,
        options?: RequestOptions
    ): Promise<operations.GetAllGasPriceResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetAllGasPriceRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            network: enc$.encodeSimple("network", payload$.network, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/v3/data/{network}/gas-price")(pathParams$);

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
            const result = operations.GetAllGasPriceResponse$.inboundSchema.parse({
                ...responseFields$,
                GasPrices: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.GetAllGasPriceResponseBody$.inboundSchema.parse({
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
