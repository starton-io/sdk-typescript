/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type ReadSmartContractRequest = {
    /**
     * Call read function of smart contracts.
     */
    readDto: shared.ReadDto;
    /**
     * Smart contract address.
     */
    address: string;
    /**
     * EVM starton supported network.
     */
    network: string;
};

export type ReadSmartContractResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    readSmartContractResponse?: shared.ReadSmartContractResponse | undefined;
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
export const ReadSmartContractRequest$inboundSchema: z.ZodType<
    ReadSmartContractRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ReadDto: shared.ReadDto$inboundSchema,
        address: z.string(),
        network: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            ReadDto: "readDto",
        });
    });

/** @internal */
export type ReadSmartContractRequest$Outbound = {
    ReadDto: shared.ReadDto$Outbound;
    address: string;
    network: string;
};

/** @internal */
export const ReadSmartContractRequest$outboundSchema: z.ZodType<
    ReadSmartContractRequest$Outbound,
    z.ZodTypeDef,
    ReadSmartContractRequest
> = z
    .object({
        readDto: shared.ReadDto$outboundSchema,
        address: z.string(),
        network: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            readDto: "ReadDto",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReadSmartContractRequest$ {
    /** @deprecated use `ReadSmartContractRequest$inboundSchema` instead. */
    export const inboundSchema = ReadSmartContractRequest$inboundSchema;
    /** @deprecated use `ReadSmartContractRequest$outboundSchema` instead. */
    export const outboundSchema = ReadSmartContractRequest$outboundSchema;
    /** @deprecated use `ReadSmartContractRequest$Outbound` instead. */
    export type Outbound = ReadSmartContractRequest$Outbound;
}

/** @internal */
export const ReadSmartContractResponse$inboundSchema: z.ZodType<
    ReadSmartContractResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        ReadSmartContractResponse: shared.ReadSmartContractResponse$inboundSchema.optional(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            ReadSmartContractResponse: "readSmartContractResponse",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type ReadSmartContractResponse$Outbound = {
    ContentType: string;
    ReadSmartContractResponse?: shared.ReadSmartContractResponse$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const ReadSmartContractResponse$outboundSchema: z.ZodType<
    ReadSmartContractResponse$Outbound,
    z.ZodTypeDef,
    ReadSmartContractResponse
> = z
    .object({
        contentType: z.string(),
        readSmartContractResponse: shared.ReadSmartContractResponse$outboundSchema.optional(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            readSmartContractResponse: "ReadSmartContractResponse",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReadSmartContractResponse$ {
    /** @deprecated use `ReadSmartContractResponse$inboundSchema` instead. */
    export const inboundSchema = ReadSmartContractResponse$inboundSchema;
    /** @deprecated use `ReadSmartContractResponse$outboundSchema` instead. */
    export const outboundSchema = ReadSmartContractResponse$outboundSchema;
    /** @deprecated use `ReadSmartContractResponse$Outbound` instead. */
    export type Outbound = ReadSmartContractResponse$Outbound;
}
