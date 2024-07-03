/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type GetAllSmartContractRequest = {
    address?: string | undefined;
    includeAbi?: boolean | undefined;
    includeCompilationDetails?: boolean | undefined;
    /**
     * Number of entities returned on each page. By default this number is set to 100.
     */
    limit?: number | undefined;
    network?: string | undefined;
    /**
     * Number of returned page. By default the returned page is the first.
     */
    page?: number | undefined;
};

export type GetAllSmartContractSmartContractPaginated = {
    items: Array<shared.SmartContract>;
    meta: shared.PaginationData;
};

export type GetAllSmartContractResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    smartContractPaginated?: GetAllSmartContractSmartContractPaginated | undefined;
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
export namespace GetAllSmartContractRequest$ {
    export const inboundSchema: z.ZodType<GetAllSmartContractRequest, z.ZodTypeDef, unknown> =
        z.object({
            address: z.string().optional(),
            includeAbi: z.boolean().optional(),
            includeCompilationDetails: z.boolean().optional(),
            limit: z.number().int().default(100),
            network: z.string().optional(),
            page: z.number().int().optional(),
        });

    export type Outbound = {
        address?: string | undefined;
        includeAbi?: boolean | undefined;
        includeCompilationDetails?: boolean | undefined;
        limit: number;
        network?: string | undefined;
        page?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllSmartContractRequest> =
        z.object({
            address: z.string().optional(),
            includeAbi: z.boolean().optional(),
            includeCompilationDetails: z.boolean().optional(),
            limit: z.number().int().default(100),
            network: z.string().optional(),
            page: z.number().int().optional(),
        });
}

/** @internal */
export namespace GetAllSmartContractSmartContractPaginated$ {
    export const inboundSchema: z.ZodType<
        GetAllSmartContractSmartContractPaginated,
        z.ZodTypeDef,
        unknown
    > = z.object({
        items: z.array(shared.SmartContract$.inboundSchema),
        meta: shared.PaginationData$.inboundSchema,
    });

    export type Outbound = {
        items: Array<shared.SmartContract$.Outbound>;
        meta: shared.PaginationData$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetAllSmartContractSmartContractPaginated
    > = z.object({
        items: z.array(shared.SmartContract$.outboundSchema),
        meta: shared.PaginationData$.outboundSchema,
    });
}

/** @internal */
export namespace GetAllSmartContractResponse$ {
    export const inboundSchema: z.ZodType<GetAllSmartContractResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            SmartContractPaginated: z
                .lazy(() => GetAllSmartContractSmartContractPaginated$.inboundSchema)
                .optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                SmartContractPaginated: "smartContractPaginated",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        SmartContractPaginated?: GetAllSmartContractSmartContractPaginated$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllSmartContractResponse> = z
        .object({
            contentType: z.string(),
            smartContractPaginated: z
                .lazy(() => GetAllSmartContractSmartContractPaginated$.outboundSchema)
                .optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                smartContractPaginated: "SmartContractPaginated",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
