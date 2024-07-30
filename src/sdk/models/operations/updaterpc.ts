/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type UpdateRpcRequest = {
    updateRpcDto: shared.UpdateRpcDto;
    id: string;
    name: string;
};

export type UpdateRpcResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    rpc?: shared.Rpc | undefined;
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
export const UpdateRpcRequest$inboundSchema: z.ZodType<UpdateRpcRequest, z.ZodTypeDef, unknown> = z
    .object({
        UpdateRpcDto: shared.UpdateRpcDto$inboundSchema,
        id: z.string(),
        name: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            UpdateRpcDto: "updateRpcDto",
        });
    });

/** @internal */
export type UpdateRpcRequest$Outbound = {
    UpdateRpcDto: shared.UpdateRpcDto$Outbound;
    id: string;
    name: string;
};

/** @internal */
export const UpdateRpcRequest$outboundSchema: z.ZodType<
    UpdateRpcRequest$Outbound,
    z.ZodTypeDef,
    UpdateRpcRequest
> = z
    .object({
        updateRpcDto: shared.UpdateRpcDto$outboundSchema,
        id: z.string(),
        name: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            updateRpcDto: "UpdateRpcDto",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateRpcRequest$ {
    /** @deprecated use `UpdateRpcRequest$inboundSchema` instead. */
    export const inboundSchema = UpdateRpcRequest$inboundSchema;
    /** @deprecated use `UpdateRpcRequest$outboundSchema` instead. */
    export const outboundSchema = UpdateRpcRequest$outboundSchema;
    /** @deprecated use `UpdateRpcRequest$Outbound` instead. */
    export type Outbound = UpdateRpcRequest$Outbound;
}

/** @internal */
export const UpdateRpcResponse$inboundSchema: z.ZodType<UpdateRpcResponse, z.ZodTypeDef, unknown> =
    z
        .object({
            ContentType: z.string(),
            Rpc: shared.Rpc$inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                Rpc: "rpc",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

/** @internal */
export type UpdateRpcResponse$Outbound = {
    ContentType: string;
    Rpc?: shared.Rpc$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const UpdateRpcResponse$outboundSchema: z.ZodType<
    UpdateRpcResponse$Outbound,
    z.ZodTypeDef,
    UpdateRpcResponse
> = z
    .object({
        contentType: z.string(),
        rpc: shared.Rpc$outboundSchema.optional(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            rpc: "Rpc",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateRpcResponse$ {
    /** @deprecated use `UpdateRpcResponse$inboundSchema` instead. */
    export const inboundSchema = UpdateRpcResponse$inboundSchema;
    /** @deprecated use `UpdateRpcResponse$outboundSchema` instead. */
    export const outboundSchema = UpdateRpcResponse$outboundSchema;
    /** @deprecated use `UpdateRpcResponse$Outbound` instead. */
    export type Outbound = UpdateRpcResponse$Outbound;
}
