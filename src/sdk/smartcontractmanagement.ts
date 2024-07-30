/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { dlv } from "../lib/dlv.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { extractSecurity } from "../lib/security.js";
import * as errors from "./models/errors/index.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { createPageIterator, PageIterator, Paginator } from "./types/operations.js";

export class SmartContractManagement extends ClientSDK {
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
     * Execute Smart Contract Function
     *
     * @remarks
     * Calls a specific function within a deployed smart contract, enabling interactions such as executing transactions or querying state. The method parameters, including the smart contract address and network, need to be specified.
     */
    async call(
        request: operations.CallSmartContractRequest,
        options?: RequestOptions
    ): Promise<operations.CallSmartContractResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.CallSmartContractRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.CallDto, { explode: true });

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
        const path$ = this.templateURLComponent("/v3/smart-contract/{network}/{address}/call")(
            pathParams$
        );

        const query$ = encodeFormQuery$({
            simulate: payload$.simulate,
        });

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const apiKey$ = await extractSecurity(this.options$.apiKey);
        const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
        const context = {
            operationID: "callSmartContract",
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
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["400", "404", "422", "4XX", "500", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.CallSmartContractResponse>()
            .json(201, operations.CallSmartContractResponse$inboundSchema, { key: "Transaction" })
            .json(400, errors.CallSmartContractResponseBody$inboundSchema, { err: true })
            .json(404, errors.CallSmartContractSmartContractManagementResponseBody$inboundSchema, {
                err: true,
            })
            .json(
                422,
                errors.CallSmartContractSmartContractManagementResponseResponseBody$inboundSchema,
                { err: true }
            )
            .json(
                500,
                errors.CallSmartContractSmartContractManagementResponse500ResponseBody$inboundSchema,
                { err: true }
            )
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Delete a smart contract
     *
     * @remarks
     * Deletes a specific smart contract based on network and address.
     */
    async delete(
        request: operations.DeleteSmartContractRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteSmartContractResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.DeleteSmartContractRequest$outboundSchema.parse(value$),
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
        const path$ = this.templateURLComponent("/v3/smart-contract/{network}/{address}")(
            pathParams$
        );

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const apiKey$ = await extractSecurity(this.options$.apiKey);
        const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
        const context = {
            operationID: "deleteSmartContract",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["400", "404", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.DeleteSmartContractResponse>()
            .json(200, operations.DeleteSmartContractResponse$inboundSchema, { key: "number" })
            .json(400, errors.DeleteSmartContractResponseBody$inboundSchema, { err: true })
            .json(
                404,
                errors.DeleteSmartContractSmartContractManagementResponseBody$inboundSchema,
                { err: true }
            )
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Deploy from bytecode (your own contract)
     *
     * @remarks
     * Deploys a smart contract from bytecode and returns transaction details.
     */
    async deployFromBytecode(
        request: operations.DeployFromBytecodeSmartContractRequest,
        options?: RequestOptions
    ): Promise<operations.DeployFromBytecodeSmartContractResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.DeployFromBytecodeSmartContractRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.DeployFromBytecodeDto, { explode: true });

        const path$ = this.templateURLComponent("/v3/smart-contract/from-bytecode")();

        const query$ = encodeFormQuery$({
            simulate: payload$.simulate,
        });

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const apiKey$ = await extractSecurity(this.options$.apiKey);
        const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
        const context = {
            operationID: "deployFromBytecodeSmartContract",
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
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["400", "404", "422", "4XX", "500", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.DeployFromBytecodeSmartContractResponse>()
            .json(201, operations.DeployFromBytecodeSmartContractResponse$inboundSchema, {
                key: "DeploySmartContractResponse",
            })
            .json(400, errors.DeployFromBytecodeSmartContractResponseBody$inboundSchema, {
                err: true,
            })
            .json(
                404,
                errors.DeployFromBytecodeSmartContractSmartContractManagementResponseBody$inboundSchema,
                { err: true }
            )
            .json(
                422,
                errors.DeployFromBytecodeSmartContractSmartContractManagementResponseResponseBody$inboundSchema,
                { err: true }
            )
            .json(
                500,
                errors.DeployFromBytecodeSmartContractSmartContractManagementResponse500ResponseBody$inboundSchema,
                { err: true }
            )
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Deploy Smart Contract from Template
     *
     * @remarks
     * Deploy from Starton audited smart contract template.
     */
    async deployFromTemplate(
        request: operations.DeployFromTemplateSmartContractRequest,
        options?: RequestOptions
    ): Promise<operations.DeployFromTemplateSmartContractResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.DeployFromTemplateSmartContractRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.DeployFromTemplateDto, { explode: true });

        const path$ = this.templateURLComponent("/v3/smart-contract/from-template")();

        const query$ = encodeFormQuery$({
            simulate: payload$.simulate,
        });

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const apiKey$ = await extractSecurity(this.options$.apiKey);
        const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
        const context = {
            operationID: "deployFromTemplateSmartContract",
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
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["400", "404", "4XX", "500", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.DeployFromTemplateSmartContractResponse>()
            .json(201, operations.DeployFromTemplateSmartContractResponse$inboundSchema, {
                key: "DeploySmartContractResponse",
            })
            .json(400, errors.DeployFromTemplateSmartContractResponseBody$inboundSchema, {
                err: true,
            })
            .json(
                404,
                errors.DeployFromTemplateSmartContractSmartContractManagementResponseBody$inboundSchema,
                { err: true }
            )
            .json(
                500,
                errors.DeployFromTemplateSmartContractSmartContractManagementResponseResponseBody$inboundSchema,
                { err: true }
            )
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Encode data for a Smart Contract call
     *
     * @remarks
     * Display the encoded data that is sent to a smart contract
     */
    async encode(
        request: operations.EncodeSmartContractRequest,
        options?: RequestOptions
    ): Promise<operations.EncodeSmartContractResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.EncodeSmartContractRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.EncodeDto, { explode: true });

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
        const path$ = this.templateURLComponent("/v3/smart-contract/{network}/{address}/encode")(
            pathParams$
        );

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const apiKey$ = await extractSecurity(this.options$.apiKey);
        const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
        const context = {
            operationID: "encodeSmartContract",
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
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["400", "404", "4XX", "500", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.EncodeSmartContractResponse>()
            .json(201, operations.EncodeSmartContractResponse$inboundSchema, {
                key: "EncodeSmartContractResponse",
            })
            .json(400, errors.EncodeSmartContractResponseBody$inboundSchema, { err: true })
            .json(
                404,
                errors.EncodeSmartContractSmartContractManagementResponseBody$inboundSchema,
                { err: true }
            )
            .json(
                500,
                errors.EncodeSmartContractSmartContractManagementResponseResponseBody$inboundSchema,
                { err: true }
            )
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get all smart contracts
     *
     * @remarks
     * Fetches and returns the list of smart contracts.
     */
    async getAll(
        request: operations.GetAllSmartContractRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.GetAllSmartContractResponse>> {
        const input$ = typeof request === "undefined" ? {} : request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetAllSmartContractRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/v3/smart-contract")();

        const query$ = encodeFormQuery$({
            address: payload$.address,
            includeAbi: payload$.includeAbi,
            includeCompilationDetails: payload$.includeCompilationDetails,
            limit: payload$.limit,
            network: payload$.network,
            page: payload$.page,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const apiKey$ = await extractSecurity(this.options$.apiKey);
        const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
        const context = {
            operationID: "getAllSmartContract",
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
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["400", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$, raw$] = await this.matcher<operations.GetAllSmartContractResponse>()
            .json(200, operations.GetAllSmartContractResponse$inboundSchema, {
                key: "SmartContractPaginated",
            })
            .json(400, errors.GetAllSmartContractResponseBody$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        const nextFunc = (
            responseData: unknown
        ): Paginator<operations.GetAllSmartContractResponse> => {
            const page = input$.page || 0;
            const nextPage = page + 1;
            const numPages = dlv(responseData, "meta.totalPages");
            if (numPages == null || numPages <= page) {
                return () => null;
            }

            if (!responseData) {
                return () => null;
            }
            const results = dlv(responseData, "items");
            if (!Array.isArray(results) || !results.length) {
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
     * Retrieves Smart Contract Functions and Events
     *
     * @remarks
     * Provides a list of the available read and write functions, as well as events, of a specified smart contract. This can be used to understand how to interact with the contract.
     */
    async getFunctions(
        request: operations.GetAvailableFunctionsSmartContractRequest,
        options?: RequestOptions
    ): Promise<operations.GetAvailableFunctionsSmartContractResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.GetAvailableFunctionsSmartContractRequest$outboundSchema.parse(value$),
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
            "/v3/smart-contract/{network}/{address}/available-functions"
        )(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const apiKey$ = await extractSecurity(this.options$.apiKey);
        const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
        const context = {
            operationID: "getAvailableFunctionsSmartContract",
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
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["400", "404", "4XX", "500", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] =
            await this.matcher<operations.GetAvailableFunctionsSmartContractResponse>()
                .json(200, operations.GetAvailableFunctionsSmartContractResponse$inboundSchema, {
                    key: "AvailableFunctions",
                })
                .json(400, errors.GetAvailableFunctionsSmartContractResponseBody$inboundSchema, {
                    err: true,
                })
                .json(
                    404,
                    errors.GetAvailableFunctionsSmartContractSmartContractManagementResponseBody$inboundSchema,
                    { err: true }
                )
                .json(
                    500,
                    errors.GetAvailableFunctionsSmartContractSmartContractManagementResponseResponseBody$inboundSchema,
                    { err: true }
                )
                .fail(["4XX", "5XX"])
                .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get a single smart contract
     *
     * @remarks
     * Fetches details of a specific smart contract based on network and address.
     */
    async getOne(
        request: operations.GetOneSmartContractRequest,
        options?: RequestOptions
    ): Promise<operations.GetOneSmartContractResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetOneSmartContractRequest$outboundSchema.parse(value$),
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
        const path$ = this.templateURLComponent("/v3/smart-contract/{network}/{address}")(
            pathParams$
        );

        const query$ = encodeFormQuery$({
            includeAbi: payload$.includeAbi,
            includeCompilationDetails: payload$.includeCompilationDetails,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const apiKey$ = await extractSecurity(this.options$.apiKey);
        const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
        const context = {
            operationID: "getOneSmartContract",
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
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["400", "404", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.GetOneSmartContractResponse>()
            .json(200, operations.GetOneSmartContractResponse$inboundSchema, {
                key: "SmartContract",
            })
            .json(400, errors.GetOneSmartContractResponseBody$inboundSchema, { err: true })
            .json(
                404,
                errors.GetOneSmartContractSmartContractManagementResponseBody$inboundSchema,
                { err: true }
            )
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Import Existing Smart Contract
     *
     * @remarks
     * Import an already deployed smart contract into the project. This requires providing the smart contract’s address, ABI, and the network it’s deployed on.
     */
    async importExisting(
        request: shared.ImportSmartContractDto,
        options?: RequestOptions
    ): Promise<operations.ImportExistingSmartContractResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => shared.ImportSmartContractDto$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/v3/smart-contract/import-existing")();

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const apiKey$ = await extractSecurity(this.options$.apiKey);
        const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
        const context = {
            operationID: "importExistingSmartContract",
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
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["400", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.ImportExistingSmartContractResponse>()
            .json(201, operations.ImportExistingSmartContractResponse$inboundSchema, {
                key: "SmartContract",
            })
            .json(400, errors.ImportExistingSmartContractResponseBody$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Query Smart Contract Function
     *
     * @remarks
     * Reads data from a smart contract by calling one of its functions without making any state changes on the blockchain. This is typically used for retrieving information from the contract.
     */
    async read(
        request: operations.ReadSmartContractRequest,
        options?: RequestOptions
    ): Promise<operations.ReadSmartContractResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ReadSmartContractRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.ReadDto, { explode: true });

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
        const path$ = this.templateURLComponent("/v3/smart-contract/{network}/{address}/read")(
            pathParams$
        );

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const apiKey$ = await extractSecurity(this.options$.apiKey);
        const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
        const context = {
            operationID: "readSmartContract",
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
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["400", "404", "4XX", "500", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.ReadSmartContractResponse>()
            .json(201, operations.ReadSmartContractResponse$inboundSchema, {
                key: "ReadSmartContractResponse",
            })
            .json(400, errors.ReadSmartContractResponseBody$inboundSchema, { err: true })
            .json(404, errors.ReadSmartContractSmartContractManagementResponseBody$inboundSchema, {
                err: true,
            })
            .json(
                500,
                errors.ReadSmartContractSmartContractManagementResponseResponseBody$inboundSchema,
                { err: true }
            )
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Update a smart contract
     *
     * @remarks
     * Updates and returns details of a specific smart contract based on network and address.
     */
    async update(
        request: operations.UpdateSmartContractRequest,
        options?: RequestOptions
    ): Promise<operations.UpdateSmartContractResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.UpdateSmartContractRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.UpdateSmartContractDto, { explode: true });

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
        const path$ = this.templateURLComponent("/v3/smart-contract/{network}/{address}")(
            pathParams$
        );

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const apiKey$ = await extractSecurity(this.options$.apiKey);
        const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
        const context = {
            operationID: "updateSmartContract",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PATCH",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["400", "404", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.UpdateSmartContractResponse>()
            .json(200, operations.UpdateSmartContractResponse$inboundSchema, {
                key: "SmartContract",
            })
            .json(400, errors.UpdateSmartContractResponseBody$inboundSchema, { err: true })
            .json(
                404,
                errors.UpdateSmartContractSmartContractManagementResponseBody$inboundSchema,
                { err: true }
            )
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
