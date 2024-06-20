/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type GetAllProjectMemberProjectMemberPaginated = {
    items: Array<shared.ProjectMember>;
    meta: shared.PaginationData;
};

export type GetAllProjectMemberResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    projectMemberPaginated?: GetAllProjectMemberProjectMemberPaginated | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace GetAllProjectMemberProjectMemberPaginated$ {
    export const inboundSchema: z.ZodType<
        GetAllProjectMemberProjectMemberPaginated,
        z.ZodTypeDef,
        unknown
    > = z.object({
        items: z.array(shared.ProjectMember$.inboundSchema),
        meta: shared.PaginationData$.inboundSchema,
    });

    export type Outbound = {
        items: Array<shared.ProjectMember$.Outbound>;
        meta: shared.PaginationData$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetAllProjectMemberProjectMemberPaginated
    > = z.object({
        items: z.array(shared.ProjectMember$.outboundSchema),
        meta: shared.PaginationData$.outboundSchema,
    });
}

/** @internal */
export namespace GetAllProjectMemberResponse$ {
    export const inboundSchema: z.ZodType<GetAllProjectMemberResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            ProjectMemberPaginated: z
                .lazy(() => GetAllProjectMemberProjectMemberPaginated$.inboundSchema)
                .optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                ProjectMemberPaginated: "projectMemberPaginated",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        ProjectMemberPaginated?: GetAllProjectMemberProjectMemberPaginated$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllProjectMemberResponse> = z
        .object({
            contentType: z.string(),
            projectMemberPaginated: z
                .lazy(() => GetAllProjectMemberProjectMemberPaginated$.outboundSchema)
                .optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                projectMemberPaginated: "ProjectMemberPaginated",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
