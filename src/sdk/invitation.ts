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
import jp from "jsonpath";

export class Invitation extends ClientSDK {
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
     * Send an invitation to the project
     *
     * @remarks
     * Invites a new member to the project. The user needs to have the necessary permissions to send invitations. The invitation details, including the recipient's email and role, must be provided in the request body.
     */
    async create(
        input: shared.CreateInvitationDto,
        options?: RequestOptions
    ): Promise<operations.CreateInvitationResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = shared.CreateInvitationDto$.outboundSchema.parse(input);
        const body$ = enc$.encodeJSON("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/v3/project-member/invitation")();

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
            const result = operations.CreateInvitationResponse$.inboundSchema.parse({
                ...responseFields$,
                Invitation: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Revoke a previously sent invitation.
     *
     * @remarks
     * Deletes an invitation that was previously sent. The user needs to have the necessary permissions to delete invitations. The id of the invitation to be revoked must be provided in the request URL
     */
    async delete(
        input: operations.DeleteInvitationRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteInvitationResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.DeleteInvitationRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent("/v3/project-member/invitation/{id}")(pathParams$);

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
                method: "delete",
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
            const result = operations.DeleteInvitationResponse$.inboundSchema.parse({
                ...responseFields$,
                number: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Retrieve a list of all member invitations for a specific project
     *
     * @remarks
     * Fetch all member invitations for a project. The user needs to have the appropriate permissions to access this data.
     */
    async getAll(
        input: operations.GetAllInvitationRequest,
        options?: RequestOptions
    ): Promise<Paginated<operations.GetAllInvitationResponse>> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetAllInvitationRequest$.outboundSchema.parse(input);
        const body$ = null;

        const path$ = this.templateURLComponent("/v3/project-member/invitation")();

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
        ): Paginator<operations.GetAllInvitationResponse> => {
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
            const parsed = operations.GetAllInvitationResponse$.inboundSchema.parse({
                ...responseFields$,
                InvitationPaginated: responseBody,
            });
            const result = { ...parsed, next: nextFunc(responseBody) };
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }
}
