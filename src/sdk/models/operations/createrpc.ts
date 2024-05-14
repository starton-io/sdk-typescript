/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
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
export namespace CreateRpcRequest$ {
    export const inboundSchema: z.ZodType<CreateRpcRequest, z.ZodTypeDef, unknown> = z
        .object({
            CreateRpcDto: shared.CreateRpcDto$.inboundSchema,
            name: z.string(),
        })
        .transform((v) => {
            return {
                createRpcDto: v.CreateRpcDto,
                name: v.name,
            };
        });

    export type Outbound = {
        CreateRpcDto: shared.CreateRpcDto$.Outbound;
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateRpcRequest> = z
        .object({
            createRpcDto: shared.CreateRpcDto$.outboundSchema,
            name: z.string(),
        })
        .transform((v) => {
            return {
                CreateRpcDto: v.createRpcDto,
                name: v.name,
            };
        });
}

/** @internal */
export namespace CreateRpcResponse$ {
    export const inboundSchema: z.ZodType<CreateRpcResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            Rpc: shared.Rpc$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Rpc === undefined ? null : { rpc: v.Rpc }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Rpc?: shared.Rpc$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateRpcResponse> = z
        .object({
            contentType: z.string(),
            rpc: shared.Rpc$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.rpc === undefined ? null : { Rpc: v.rpc }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
