/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as z from "zod";

export type DeleteRpcRequest = {
    id: string;
    name?: any | undefined;
};

export type DeleteRpcResponse = {
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
export namespace DeleteRpcRequest$ {
    export const inboundSchema: z.ZodType<DeleteRpcRequest, z.ZodTypeDef, unknown> = z.object({
        id: z.string(),
        name: z.any().optional(),
    });

    export type Outbound = {
        id: string;
        name?: any | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteRpcRequest> = z.object({
        id: z.string(),
        name: z.any().optional(),
    });
}

/** @internal */
export namespace DeleteRpcResponse$ {
    export const inboundSchema: z.ZodType<DeleteRpcResponse, z.ZodTypeDef, unknown> = z
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

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        number?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteRpcResponse> = z
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
}
