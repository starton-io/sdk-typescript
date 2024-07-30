/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type CreateRpcRequest = {
    createRpcDto: shared.CreateRpcDto;
    name: string;
};

export type CreateRpcResponse = {
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
export const CreateRpcRequest$inboundSchema: z.ZodType<CreateRpcRequest, z.ZodTypeDef, unknown> = z
    .object({
        CreateRpcDto: shared.CreateRpcDto$inboundSchema,
        name: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            CreateRpcDto: "createRpcDto",
        });
    });

/** @internal */
export type CreateRpcRequest$Outbound = {
    CreateRpcDto: shared.CreateRpcDto$Outbound;
    name: string;
};

/** @internal */
export const CreateRpcRequest$outboundSchema: z.ZodType<
    CreateRpcRequest$Outbound,
    z.ZodTypeDef,
    CreateRpcRequest
> = z
    .object({
        createRpcDto: shared.CreateRpcDto$outboundSchema,
        name: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            createRpcDto: "CreateRpcDto",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateRpcRequest$ {
    /** @deprecated use `CreateRpcRequest$inboundSchema` instead. */
    export const inboundSchema = CreateRpcRequest$inboundSchema;
    /** @deprecated use `CreateRpcRequest$outboundSchema` instead. */
    export const outboundSchema = CreateRpcRequest$outboundSchema;
    /** @deprecated use `CreateRpcRequest$Outbound` instead. */
    export type Outbound = CreateRpcRequest$Outbound;
}

/** @internal */
export const CreateRpcResponse$inboundSchema: z.ZodType<CreateRpcResponse, z.ZodTypeDef, unknown> =
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
export type CreateRpcResponse$Outbound = {
    ContentType: string;
    Rpc?: shared.Rpc$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const CreateRpcResponse$outboundSchema: z.ZodType<
    CreateRpcResponse$Outbound,
    z.ZodTypeDef,
    CreateRpcResponse
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
export namespace CreateRpcResponse$ {
    /** @deprecated use `CreateRpcResponse$inboundSchema` instead. */
    export const inboundSchema = CreateRpcResponse$inboundSchema;
    /** @deprecated use `CreateRpcResponse$outboundSchema` instead. */
    export const outboundSchema = CreateRpcResponse$outboundSchema;
    /** @deprecated use `CreateRpcResponse$Outbound` instead. */
    export type Outbound = CreateRpcResponse$Outbound;
}
