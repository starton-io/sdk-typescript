/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
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
    export const inboundSchema: z.ZodType<DeleteProjectMemberRequest, z.ZodTypeDef, unknown> =
        z.object({
            userId: z.string(),
        });

    export type Outbound = {
        userId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteProjectMemberRequest> =
        z.object({
            userId: z.string(),
        });
}

/** @internal */
export namespace DeleteProjectMemberResponse$ {
    export const inboundSchema: z.ZodType<DeleteProjectMemberResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            boolean: z.boolean().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
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
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
