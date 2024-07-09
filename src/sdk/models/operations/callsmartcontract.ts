/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type CallSmartContractRequest = {
    /**
     * Body to interact with a smart contract.
     */
    callDto: shared.CallDto;
    /**
     * Smart contract address.
     */
    address: string;
    /**
     * EVM starton supported network.
     */
    network: string;
    /**
     * Boolean for transaction simulation. Will estimate gas price.
     */
    simulate?: boolean | undefined;
};

export type CallSmartContractResponse = {
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
export const CallSmartContractRequest$inboundSchema: z.ZodType<
    CallSmartContractRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        CallDto: shared.CallDto$inboundSchema,
        address: z.string(),
        network: z.string(),
        simulate: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            CallDto: "callDto",
        });
    });

/** @internal */
export type CallSmartContractRequest$Outbound = {
    CallDto: shared.CallDto$Outbound;
    address: string;
    network: string;
    simulate?: boolean | undefined;
};

/** @internal */
export const CallSmartContractRequest$outboundSchema: z.ZodType<
    CallSmartContractRequest$Outbound,
    z.ZodTypeDef,
    CallSmartContractRequest
> = z
    .object({
        callDto: shared.CallDto$outboundSchema,
        address: z.string(),
        network: z.string(),
        simulate: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            callDto: "CallDto",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CallSmartContractRequest$ {
    /** @deprecated use `CallSmartContractRequest$inboundSchema` instead. */
    export const inboundSchema = CallSmartContractRequest$inboundSchema;
    /** @deprecated use `CallSmartContractRequest$outboundSchema` instead. */
    export const outboundSchema = CallSmartContractRequest$outboundSchema;
    /** @deprecated use `CallSmartContractRequest$Outbound` instead. */
    export type Outbound = CallSmartContractRequest$Outbound;
}

/** @internal */
export const CallSmartContractResponse$inboundSchema: z.ZodType<
    CallSmartContractResponse,
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
export type CallSmartContractResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Transaction?: shared.Transaction$Outbound | undefined;
};

/** @internal */
export const CallSmartContractResponse$outboundSchema: z.ZodType<
    CallSmartContractResponse$Outbound,
    z.ZodTypeDef,
    CallSmartContractResponse
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
export namespace CallSmartContractResponse$ {
    /** @deprecated use `CallSmartContractResponse$inboundSchema` instead. */
    export const inboundSchema = CallSmartContractResponse$inboundSchema;
    /** @deprecated use `CallSmartContractResponse$outboundSchema` instead. */
    export const outboundSchema = CallSmartContractResponse$outboundSchema;
    /** @deprecated use `CallSmartContractResponse$Outbound` instead. */
    export type Outbound = CallSmartContractResponse$Outbound;
}
