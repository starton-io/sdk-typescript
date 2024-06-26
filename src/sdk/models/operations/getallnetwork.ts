/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type GetAllNetworkRequest = {
    id?: string | undefined;
    /**
     * Number of entities returned on each page. By default this number is set to 100.
     */
    limit?: number | undefined;
    origin: string;
    /**
     * Number of returned page. By default the returned page is the first.
     */
    page?: number | undefined;
    testnet?: boolean | undefined;
};

export type GetAllNetworkNetworkPaginated = {
    items: Array<shared.Network>;
    meta: shared.PaginationData;
};

export type GetAllNetworkResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    networkPaginated?: GetAllNetworkNetworkPaginated | undefined;
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
export namespace GetAllNetworkRequest$ {
    export const inboundSchema: z.ZodType<GetAllNetworkRequest, z.ZodTypeDef, unknown> = z.object({
        id: z.string().optional(),
        limit: z.number().int().optional(),
        origin: z.string(),
        page: z.number().int().optional(),
        testnet: z.boolean().optional(),
    });

    export type Outbound = {
        id?: string | undefined;
        limit?: number | undefined;
        origin: string;
        page?: number | undefined;
        testnet?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllNetworkRequest> = z.object(
        {
            id: z.string().optional(),
            limit: z.number().int().optional(),
            origin: z.string(),
            page: z.number().int().optional(),
            testnet: z.boolean().optional(),
        }
    );
}

/** @internal */
export namespace GetAllNetworkNetworkPaginated$ {
    export const inboundSchema: z.ZodType<GetAllNetworkNetworkPaginated, z.ZodTypeDef, unknown> =
        z.object({
            items: z.array(shared.Network$.inboundSchema),
            meta: shared.PaginationData$.inboundSchema,
        });

    export type Outbound = {
        items: Array<shared.Network$.Outbound>;
        meta: shared.PaginationData$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllNetworkNetworkPaginated> =
        z.object({
            items: z.array(shared.Network$.outboundSchema),
            meta: shared.PaginationData$.outboundSchema,
        });
}

/** @internal */
export namespace GetAllNetworkResponse$ {
    export const inboundSchema: z.ZodType<GetAllNetworkResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            NetworkPaginated: z.lazy(() => GetAllNetworkNetworkPaginated$.inboundSchema).optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                NetworkPaginated: "networkPaginated",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        NetworkPaginated?: GetAllNetworkNetworkPaginated$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllNetworkResponse> = z
        .object({
            contentType: z.string(),
            networkPaginated: z
                .lazy(() => GetAllNetworkNetworkPaginated$.outboundSchema)
                .optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                networkPaginated: "NetworkPaginated",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
