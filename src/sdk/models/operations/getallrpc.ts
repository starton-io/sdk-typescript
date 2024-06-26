/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type GetAllRpcRequest = {
    /**
     * Number of entities returned on each page. By default this number is set to 100.
     */
    limit?: number | undefined;
    name: string;
    /**
     * Number of returned page. By default the returned page is the first.
     */
    page?: number | undefined;
};

export type GetAllRpcRpcPaginated = {
    items: Array<shared.Rpc>;
    meta: shared.PaginationData;
};

export type GetAllRpcResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    rpcPaginated?: GetAllRpcRpcPaginated | undefined;
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
export namespace GetAllRpcRequest$ {
    export const inboundSchema: z.ZodType<GetAllRpcRequest, z.ZodTypeDef, unknown> = z.object({
        limit: z.number().int().optional(),
        name: z.string(),
        page: z.number().int().optional(),
    });

    export type Outbound = {
        limit?: number | undefined;
        name: string;
        page?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllRpcRequest> = z.object({
        limit: z.number().int().optional(),
        name: z.string(),
        page: z.number().int().optional(),
    });
}

/** @internal */
export namespace GetAllRpcRpcPaginated$ {
    export const inboundSchema: z.ZodType<GetAllRpcRpcPaginated, z.ZodTypeDef, unknown> = z.object({
        items: z.array(shared.Rpc$.inboundSchema),
        meta: shared.PaginationData$.inboundSchema,
    });

    export type Outbound = {
        items: Array<shared.Rpc$.Outbound>;
        meta: shared.PaginationData$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllRpcRpcPaginated> =
        z.object({
            items: z.array(shared.Rpc$.outboundSchema),
            meta: shared.PaginationData$.outboundSchema,
        });
}

/** @internal */
export namespace GetAllRpcResponse$ {
    export const inboundSchema: z.ZodType<GetAllRpcResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            RpcPaginated: z.lazy(() => GetAllRpcRpcPaginated$.inboundSchema).optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                RpcPaginated: "rpcPaginated",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        RpcPaginated?: GetAllRpcRpcPaginated$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllRpcResponse> = z
        .object({
            contentType: z.string(),
            rpcPaginated: z.lazy(() => GetAllRpcRpcPaginated$.outboundSchema).optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                rpcPaginated: "RpcPaginated",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
