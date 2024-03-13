/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteProjectMemberRequest = {
    userId: string;
};

export type DeleteProjectMemberResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    boolean?: boolean | undefined;
};

/** @internal */
export namespace DeleteProjectMemberRequest$ {
    export type Inbound = {
        userId: string;
    };

    export const inboundSchema: z.ZodType<DeleteProjectMemberRequest, z.ZodTypeDef, Inbound> = z
        .object({
            userId: z.string(),
        })
        .transform((v) => {
            return {
                userId: v.userId,
            };
        });

    export type Outbound = {
        userId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteProjectMemberRequest> = z
        .object({
            userId: z.string(),
        })
        .transform((v) => {
            return {
                userId: v.userId,
            };
        });
}

/** @internal */
export namespace DeleteProjectMemberResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        boolean?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteProjectMemberResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            boolean: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.boolean === undefined ? null : { boolean: v.boolean }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        boolean?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteProjectMemberResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            boolean: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.boolean === undefined ? null : { boolean: v.boolean }),
            };
        });
}
