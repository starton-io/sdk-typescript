/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type DeleteInvitationRequest = {
    id: string;
};

export type DeleteInvitationResponse = {
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
    number?: number | undefined;
};

/** @internal */
export namespace DeleteInvitationRequest$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<DeleteInvitationRequest, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteInvitationRequest> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}

/** @internal */
export namespace DeleteInvitationResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        number?: number | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteInvitationResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            number: z.number().optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.number === undefined ? null : { number: v.number }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        number?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteInvitationResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            number: z.number().optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.number === undefined ? null : { number: v.number }),
            };
        });
}
