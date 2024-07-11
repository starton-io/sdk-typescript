/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
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
import * as errors from "./models/errors/index.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { isBlobLike } from "./types/blobs.js";
import { createPageIterator, PageIterator, Paginator } from "./types/operations.js";

export class Ipfs extends ClientSDK {
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
     * Deletes pinned file referenced by {id}
     *
     * @remarks
     * Unpin a previously pinned file by providing the specific {id} associated with the file.
     */
    async delete(
        request: operations.DeletePinRequest,
        options?: RequestOptions
    ): Promise<operations.DeletePinResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.DeletePinRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/v3/ipfs/pin/{id}")(pathParams$);

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
            operationID: "deletePin",
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

        const [result$] = await this.matcher<operations.DeletePinResponse>()
            .json(200, operations.DeletePinResponse$inboundSchema, { key: "boolean" })
            .json(400, errors.DeletePinResponseBody$inboundSchema, { err: true })
            .json(404, errors.DeletePinIpfsResponseBody$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Retrieve all files
     *
     * @remarks
     * Retrieve a list of files that have been pinned on IPFS.
     */
    async getAll(
        request: operations.GetAllPinRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.GetAllPinResponse>> {
        const input$ = typeof request === "undefined" ? {} : request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetAllPinRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/v3/ipfs/pin")();

        const query$ = encodeFormQuery$({
            cid: payload$.cid,
            includeDirectoryContent: payload$.includeDirectoryContent,
            limit: payload$.limit,
            name: payload$.name,
            page: payload$.page,
            status: payload$.status,
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
            operationID: "getAllPin",
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

        const [result$, raw$] = await this.matcher<operations.GetAllPinResponse>()
            .json(200, operations.GetAllPinResponse$inboundSchema, { key: "PinPaginated" })
            .json(400, errors.GetAllPinResponseBody$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        const nextFunc = (responseData: unknown): Paginator<operations.GetAllPinResponse> => {
            const page = input$.page || 0;
            const nextPage = page + 1;
            const numPages = dlv(responseData, "metatotalPages");
            if (numPages == null || numPages <= page) {
                return () => null;
            }

            if (!responseData) {
                return () => null;
            }

            const results = dlv(responseData, "items");
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
     * Retrieve a Specific File
     *
     * @remarks
     * Fetches the details of a specific file that has been previously uploaded to IPFS, using its unique identifier.
     */
    async getOne(
        request: operations.GetOnePinRequest,
        options?: RequestOptions
    ): Promise<operations.GetOnePinResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetOnePinRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/v3/ipfs/pin/{id}")(pathParams$);

        const query$ = encodeFormQuery$({
            includeDirectoryContent: payload$.includeDirectoryContent,
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
            operationID: "getOnePin",
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

        const [result$] = await this.matcher<operations.GetOnePinResponse>()
            .json(200, operations.GetOnePinResponse$inboundSchema, { key: "Pin" })
            .json(400, errors.GetOnePinResponseBody$inboundSchema, { err: true })
            .json(404, errors.GetOnePinIpfsResponseBody$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Retrieve Current Storage Usage
     *
     * @remarks
     * Fetches the current storage utilization details for the project, providing insights into the used space, total allowance, and remaining free space.
     */
    async getStorageUsed(options?: RequestOptions): Promise<operations.GetStorageUsedPinResponse> {
        const path$ = this.templateURLComponent("/v3/ipfs/storage-used")();

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
            operationID: "getStorageUsedPin",
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

        const [result$] = await this.matcher<operations.GetStorageUsedPinResponse>()
            .json(200, operations.GetStorageUsedPinResponse$inboundSchema, { key: "StorageUsed" })
            .json(400, errors.GetStorageUsedPinResponseBody$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Pin Existing IPFS File
     *
     * @remarks
     * Requests Starton to retain a copy of a file that has already been uploaded to IPFS, ensuring its availability.
     */
    async pinExistingFile(
        request: shared.CreatePinDto,
        options?: RequestOptions
    ): Promise<operations.CreatePinResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => shared.CreatePinDto$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/v3/ipfs/pin")();

        const query$ = "";

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
            operationID: "createPin",
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
            errorCodes: ["400", "413", "4XX", "5XX"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.CreatePinResponse>()
            .json(201, operations.CreatePinResponse$inboundSchema, { key: "Pin" })
            .json(400, errors.CreatePinResponseBody$inboundSchema, { err: true })
            .json(413, errors.CreatePinIpfsResponseBody$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Update File Details
     *
     * @remarks
     * Modifies the name or metadata of an existing file stored in IPFS. Note that direct edits to the file content are not possible; any changes to the content require re-uploading and will result in a new unique hash for the file.
     */
    async update(
        request: operations.UpdatePinRequest,
        options?: RequestOptions
    ): Promise<operations.UpdatePinResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.UpdatePinRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.UpdatePinDto, { explode: true });

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/v3/ipfs/pin/{id}")(pathParams$);

        const query$ = "";

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
            operationID: "updatePin",
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

        const [result$] = await this.matcher<operations.UpdatePinResponse>()
            .json(200, operations.UpdatePinResponse$inboundSchema, { key: "Pin" })
            .json(400, errors.UpdatePinResponseBody$inboundSchema, { err: true })
            .json(404, errors.UpdatePinIpfsResponseBody$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Upload a file
     *
     * @remarks
     * Safely upload a file to IPFS, ensuring it gets securely pinned for reliable retrieval, and receive a unique CID as a reference to the uploaded content. THE BODY PARAMETERS ARE FORM PARAMETERS FOR THIS ENDPOINT.
     */
    async uploadFile(
        request: operations.UploadFromFilePinRequestBody,
        options?: RequestOptions
    ): Promise<operations.UploadFromFilePinResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.UploadFromFilePinRequestBody$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = new FormData();

        if (payload$.file !== undefined) {
            if (isBlobLike(payload$.file)) {
                body$.append("file", payload$.file);
            } else {
                body$.append(
                    "file",
                    new Blob([payload$.file.content], { type: "application/octet-stream" }),
                    payload$.file.fileName
                );
            }
        }
        if (payload$.metadata !== undefined) {
            body$.append("metadata", encodeJSON$("metadata", payload$.metadata, { explode: true }));
        }

        const path$ = this.templateURLComponent("/v3/ipfs/file")();

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
            operationID: "uploadFromFilePin",
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
            errorCodes: ["400", "413", "4XX", "5XX"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.UploadFromFilePinResponse>()
            .json(201, operations.UploadFromFilePinResponse$inboundSchema, { key: "Pin" })
            .json(400, errors.UploadFromFilePinResponseBody$inboundSchema, { err: true })
            .json(413, errors.UploadFromFilePinIpfsResponseBody$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Upload a folder
     *
     * @remarks
     * Upload an entire folder to IPFS, ensuring secure pinning of its contents for reliable retrieval. This endpoint expects a multipart/form-data payload, consisting of an optional metadata object and an array of files. The successful upload of the folder will result in a unique Content Identifier (CID) reference, which can be used to fetch the folder and its contents from IPFS at any time.
     */
    async uploadFolder(
        request: operations.UploadFromFolderPinRequestBody,
        options?: RequestOptions
    ): Promise<operations.UploadFromFolderPinResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.UploadFromFolderPinRequestBody$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = new FormData();

        if (payload$.files !== undefined) {
            body$.append("files", String(payload$.files));
        }
        if (payload$.metadata !== undefined) {
            body$.append("metadata", encodeJSON$("metadata", payload$.metadata, { explode: true }));
        }

        const path$ = this.templateURLComponent("/v3/ipfs/folder")();

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
            operationID: "uploadFromFolderPin",
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
            errorCodes: ["400", "413", "4XX", "5XX"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.UploadFromFolderPinResponse>()
            .json(201, operations.UploadFromFolderPinResponse$inboundSchema, { key: "Pin" })
            .json(400, errors.UploadFromFolderPinResponseBody$inboundSchema, { err: true })
            .json(413, errors.UploadFromFolderPinIpfsResponseBody$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Upload a JSON file
     *
     * @remarks
     * Upload a JSON file to IPFS with pinning for reliable access, associating it with a unique CID.
     */
    async uploadJson(
        request: shared.UploadJsonDto,
        options?: RequestOptions
    ): Promise<operations.UploadFromJsonPinResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => shared.UploadJsonDto$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/v3/ipfs/json")();

        const query$ = "";

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
            operationID: "uploadFromJsonPin",
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
            errorCodes: ["400", "413", "4XX", "5XX"],
        });

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.UploadFromJsonPinResponse>()
            .json(201, operations.UploadFromJsonPinResponse$inboundSchema, { key: "Pin" })
            .json(400, errors.UploadFromJsonPinResponseBody$inboundSchema, { err: true })
            .json(413, errors.UploadFromJsonPinIpfsResponseBody$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
