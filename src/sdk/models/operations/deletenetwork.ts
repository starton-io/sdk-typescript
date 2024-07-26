/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type DeleteNetworkRequest = {
    /**
     * The name of the network to delete
     */
    name: string;
};

export type DeleteNetworkResponse = {
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
export const DeleteNetworkRequest$inboundSchema: z.ZodType<
    DeleteNetworkRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
});

/** @internal */
export type DeleteNetworkRequest$Outbound = {
    name: string;
};

/** @internal */
export const DeleteNetworkRequest$outboundSchema: z.ZodType<
    DeleteNetworkRequest$Outbound,
    z.ZodTypeDef,
    DeleteNetworkRequest
> = z.object({
    name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteNetworkRequest$ {
    /** @deprecated use `DeleteNetworkRequest$inboundSchema` instead. */
    export const inboundSchema = DeleteNetworkRequest$inboundSchema;
    /** @deprecated use `DeleteNetworkRequest$outboundSchema` instead. */
    export const outboundSchema = DeleteNetworkRequest$outboundSchema;
    /** @deprecated use `DeleteNetworkRequest$Outbound` instead. */
    export type Outbound = DeleteNetworkRequest$Outbound;
}

/** @internal */
export const DeleteNetworkResponse$inboundSchema: z.ZodType<
    DeleteNetworkResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        number: z.number().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type DeleteNetworkResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    number?: number | undefined;
};

/** @internal */
export const DeleteNetworkResponse$outboundSchema: z.ZodType<
    DeleteNetworkResponse$Outbound,
    z.ZodTypeDef,
    DeleteNetworkResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        number: z.number().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteNetworkResponse$ {
    /** @deprecated use `DeleteNetworkResponse$inboundSchema` instead. */
    export const inboundSchema = DeleteNetworkResponse$inboundSchema;
    /** @deprecated use `DeleteNetworkResponse$outboundSchema` instead. */
    export const outboundSchema = DeleteNetworkResponse$outboundSchema;
    /** @deprecated use `DeleteNetworkResponse$Outbound` instead. */
    export type Outbound = DeleteNetworkResponse$Outbound;
}
