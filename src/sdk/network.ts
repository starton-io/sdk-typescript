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
import { Paginated, Paginator } from "../sdk/types";
import { Rpc } from "./rpc";
import jp from "jsonpath";

export class Network extends ClientSDK {
    private readonly options$: SDKOptions;

    constructor(options: SDKOptions = {}) {
        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
        });

        this.options$ = options;
        void this.options$;
    }

    private _rpc?: Rpc;
    get rpc() {
        return (this._rpc ??= new Rpc(this.options$));
    }
    /**
     * Create a new network (Enterprise)
     *
     * @remarks
     * Adds a new network to the project, available only for Enterprise plans.
     */
    async create(
        input: shared.CreateNetworkDto,
        options?: RequestOptions
    ): Promise<operations.CreateNetworkResponse> {
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Content-Type", "application/json");
        headers.set("Accept", "application/json");

        const payload = shared.CreateNetworkDto$.outboundSchema.parse(input);
        const body = enc$.encodeJSON("body", payload, { explode: true });

        const path = this.templateURLComponent("/v3/network")();

        const security = this.options$.startonApiKey
            ? { startonApiKey: this.options$.startonApiKey }
            : {};
        const securitySettings = this.resolveGlobalSecurity(security);

        const response = await this.fetch$(
            { security: securitySettings, method: "post", path, headers, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 201, "application/json")) {
            const responseBody = await response.json();
            const result = operations.CreateNetworkResponse$.inboundSchema.parse({
                ...responseFields,
                Network: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Delete a network (Enterprise)
     *
     * @remarks
     * Removes a network from the project, available only for Enterprise plans.
     */
    async delete(
        input: operations.DeleteNetworkRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteNetworkResponse> {
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Accept", "application/json");

        const payload = operations.DeleteNetworkRequest$.outboundSchema.parse(input);
        const body = null;

        const pathParams = {
            name: enc$.encodeSimple("name", payload.name, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path = this.templateURLComponent("/v3/network/{name}")(pathParams);

        const security = this.options$.startonApiKey
            ? { startonApiKey: this.options$.startonApiKey }
            : {};
        const securitySettings = this.resolveGlobalSecurity(security);

        const response = await this.fetch$(
            { security: securitySettings, method: "delete", path, headers, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.DeleteNetworkResponse$.inboundSchema.parse({
                ...responseFields,
                number: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Retrieve the list of supported networks
     *
     * @remarks
     * Fetches a paginated list of networks available in the current project.
     */
    async getAll(
        input: operations.GetAllNetworkRequest,
        options?: RequestOptions
    ): Promise<Paginated<operations.GetAllNetworkResponse>> {
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Accept", "application/json");

        const payload = operations.GetAllNetworkRequest$.outboundSchema.parse(input);
        const body = null;

        const path = this.templateURLComponent("/v3/network")();

        const query = [
            enc$.encodeForm("id", payload.id, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("limit", payload.limit, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("page", payload.page, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("testnet", payload.testnet, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        const security = this.options$.startonApiKey
            ? { startonApiKey: this.options$.startonApiKey }
            : {};
        const securitySettings = this.resolveGlobalSecurity(security);

        const response = await this.fetch$(
            { security: securitySettings, method: "get", path, headers, query, body },
            options
        );

        const nextFunc = (responseData: unknown): Paginator<operations.GetAllNetworkResponse> => {
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

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const parsed = operations.GetAllNetworkResponse$.inboundSchema.parse({
                ...responseFields,
                NetworkPaginated: responseBody,
            });
            const result = { ...parsed, next: nextFunc(responseBody) };
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Fetch a specific network
     *
     * @remarks
     * Retrieves detailed information about a specific network based on its name.
     */
    async getOne(
        input: operations.GetOneNetworkRequest,
        options?: RequestOptions
    ): Promise<operations.GetOneNetworkResponse> {
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Accept", "application/json");

        const payload = operations.GetOneNetworkRequest$.outboundSchema.parse(input);
        const body = null;

        const pathParams = {
            name: enc$.encodeSimple("name", payload.name, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path = this.templateURLComponent("/v3/network/{name}")(pathParams);

        const security = this.options$.startonApiKey
            ? { startonApiKey: this.options$.startonApiKey }
            : {};
        const securitySettings = this.resolveGlobalSecurity(security);

        const response = await this.fetch$(
            { security: securitySettings, method: "get", path, headers, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetOneNetworkResponse$.inboundSchema.parse({
                ...responseFields,
                Network: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Update specific network details (Enterprise)
     *
     * @remarks
     * Modifies the details of a specific network based on its unique name. This feature is only available to Entreprise plans.
     */
    async update(
        input: operations.UpdateNetworkRequest,
        options?: RequestOptions
    ): Promise<operations.UpdateNetworkResponse> {
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Content-Type", "application/json");
        headers.set("Accept", "application/json");

        const payload = operations.UpdateNetworkRequest$.outboundSchema.parse(input);

        const body = enc$.encodeJSON("body", payload.UpdateNetworkDto, { explode: true });

        const pathParams = {
            name: enc$.encodeSimple("name", payload.name, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path = this.templateURLComponent("/v3/network/{name}")(pathParams);

        const security = this.options$.startonApiKey
            ? { startonApiKey: this.options$.startonApiKey }
            : {};
        const securitySettings = this.resolveGlobalSecurity(security);

        const response = await this.fetch$(
            { security: securitySettings, method: "patch", path, headers, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.UpdateNetworkResponse$.inboundSchema.parse({
                ...responseFields,
                Network: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }
}
