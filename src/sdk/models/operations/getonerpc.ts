/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type GetOneRpcRequest = {
    id: string;
    name: string;
};

export type GetOneRpcResponse = {
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
export namespace GetOneRpcRequest$ {
    export type Inbound = {
        id: string;
        name: string;
    };

    export const inboundSchema: z.ZodType<GetOneRpcRequest, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
                name: v.name,
            };
        });

    export type Outbound = {
        id: string;
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOneRpcRequest> = z
        .object({
            id: z.string(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
                name: v.name,
            };
        });
}

/** @internal */
export namespace GetOneRpcResponse$ {
    export type Inbound = {
        ContentType: string;
        Rpc?: shared.Rpc$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetOneRpcResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOneRpcResponse> = z
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
