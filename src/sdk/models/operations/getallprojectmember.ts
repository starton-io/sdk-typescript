/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
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
    export type Inbound = {
        items: Array<shared.ProjectMember$.Inbound>;
        meta: shared.PaginationData$.Inbound;
    };

    export const inboundSchema: z.ZodType<
        GetAllProjectMemberProjectMemberPaginated,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            items: z.array(shared.ProjectMember$.inboundSchema),
            meta: shared.PaginationData$.inboundSchema,
        })
        .transform((v) => {
            return {
                items: v.items,
                meta: v.meta,
            };
        });

    export type Outbound = {
        items: Array<shared.ProjectMember$.Outbound>;
        meta: shared.PaginationData$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetAllProjectMemberProjectMemberPaginated
    > = z
        .object({
            items: z.array(shared.ProjectMember$.outboundSchema),
            meta: shared.PaginationData$.outboundSchema,
        })
        .transform((v) => {
            return {
                items: v.items,
                meta: v.meta,
            };
        });
}

/** @internal */
export namespace GetAllProjectMemberResponse$ {
    export type Inbound = {
        ContentType: string;
        ProjectMemberPaginated?: GetAllProjectMemberProjectMemberPaginated$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetAllProjectMemberResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            ProjectMemberPaginated: z
                .lazy(() => GetAllProjectMemberProjectMemberPaginated$.inboundSchema)
                .optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.ProjectMemberPaginated === undefined
                    ? null
                    : { projectMemberPaginated: v.ProjectMemberPaginated }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
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
            return {
                ContentType: v.contentType,
                ...(v.projectMemberPaginated === undefined
                    ? null
                    : { ProjectMemberPaginated: v.projectMemberPaginated }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
