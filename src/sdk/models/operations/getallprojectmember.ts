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
export const GetAllProjectMemberProjectMemberPaginated$inboundSchema: z.ZodType<
    GetAllProjectMemberProjectMemberPaginated,
    z.ZodTypeDef,
    unknown
> = z.object({
    items: z.array(shared.ProjectMember$inboundSchema),
    meta: shared.PaginationData$inboundSchema,
});

/** @internal */
export type GetAllProjectMemberProjectMemberPaginated$Outbound = {
    items: Array<shared.ProjectMember$Outbound>;
    meta: shared.PaginationData$Outbound;
};

/** @internal */
export const GetAllProjectMemberProjectMemberPaginated$outboundSchema: z.ZodType<
    GetAllProjectMemberProjectMemberPaginated$Outbound,
    z.ZodTypeDef,
    GetAllProjectMemberProjectMemberPaginated
> = z.object({
    items: z.array(shared.ProjectMember$outboundSchema),
    meta: shared.PaginationData$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllProjectMemberProjectMemberPaginated$ {
    /** @deprecated use `GetAllProjectMemberProjectMemberPaginated$inboundSchema` instead. */
    export const inboundSchema = GetAllProjectMemberProjectMemberPaginated$inboundSchema;
    /** @deprecated use `GetAllProjectMemberProjectMemberPaginated$outboundSchema` instead. */
    export const outboundSchema = GetAllProjectMemberProjectMemberPaginated$outboundSchema;
    /** @deprecated use `GetAllProjectMemberProjectMemberPaginated$Outbound` instead. */
    export type Outbound = GetAllProjectMemberProjectMemberPaginated$Outbound;
}

/** @internal */
export const GetAllProjectMemberResponse$inboundSchema: z.ZodType<
    GetAllProjectMemberResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        ProjectMemberPaginated: z
            .lazy(() => GetAllProjectMemberProjectMemberPaginated$inboundSchema)
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

/** @internal */
export type GetAllProjectMemberResponse$Outbound = {
    ContentType: string;
    ProjectMemberPaginated?: GetAllProjectMemberProjectMemberPaginated$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const GetAllProjectMemberResponse$outboundSchema: z.ZodType<
    GetAllProjectMemberResponse$Outbound,
    z.ZodTypeDef,
    GetAllProjectMemberResponse
> = z
    .object({
        contentType: z.string(),
        projectMemberPaginated: z
            .lazy(() => GetAllProjectMemberProjectMemberPaginated$outboundSchema)
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

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllProjectMemberResponse$ {
    /** @deprecated use `GetAllProjectMemberResponse$inboundSchema` instead. */
    export const inboundSchema = GetAllProjectMemberResponse$inboundSchema;
    /** @deprecated use `GetAllProjectMemberResponse$outboundSchema` instead. */
    export const outboundSchema = GetAllProjectMemberResponse$outboundSchema;
    /** @deprecated use `GetAllProjectMemberResponse$Outbound` instead. */
    export type Outbound = GetAllProjectMemberResponse$Outbound;
}
