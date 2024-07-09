/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type GetOneTransactionRequest = {
    /**
     * Id of the transaction
     */
    id: string;
};

export type GetOneTransactionResponse = {
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
    transaction?: shared.Transaction | undefined;
};

/** @internal */
export const GetOneTransactionRequest$inboundSchema: z.ZodType<
    GetOneTransactionRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
});

/** @internal */
export type GetOneTransactionRequest$Outbound = {
    id: string;
};

/** @internal */
export const GetOneTransactionRequest$outboundSchema: z.ZodType<
    GetOneTransactionRequest$Outbound,
    z.ZodTypeDef,
    GetOneTransactionRequest
> = z.object({
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOneTransactionRequest$ {
    /** @deprecated use `GetOneTransactionRequest$inboundSchema` instead. */
    export const inboundSchema = GetOneTransactionRequest$inboundSchema;
    /** @deprecated use `GetOneTransactionRequest$outboundSchema` instead. */
    export const outboundSchema = GetOneTransactionRequest$outboundSchema;
    /** @deprecated use `GetOneTransactionRequest$Outbound` instead. */
    export type Outbound = GetOneTransactionRequest$Outbound;
}

/** @internal */
export const GetOneTransactionResponse$inboundSchema: z.ZodType<
    GetOneTransactionResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        Transaction: shared.Transaction$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            Transaction: "transaction",
        });
    });

/** @internal */
export type GetOneTransactionResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Transaction?: shared.Transaction$Outbound | undefined;
};

/** @internal */
export const GetOneTransactionResponse$outboundSchema: z.ZodType<
    GetOneTransactionResponse$Outbound,
    z.ZodTypeDef,
    GetOneTransactionResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        transaction: shared.Transaction$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            transaction: "Transaction",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOneTransactionResponse$ {
    /** @deprecated use `GetOneTransactionResponse$inboundSchema` instead. */
    export const inboundSchema = GetOneTransactionResponse$inboundSchema;
    /** @deprecated use `GetOneTransactionResponse$outboundSchema` instead. */
    export const outboundSchema = GetOneTransactionResponse$outboundSchema;
    /** @deprecated use `GetOneTransactionResponse$Outbound` instead. */
    export type Outbound = GetOneTransactionResponse$Outbound;
}
