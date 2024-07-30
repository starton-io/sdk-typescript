/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GasPriceInfo = {
    /**
     * Pre eip-1159 gas format.
     */
    gasPrice: string | null;
    /**
     * Post eip-1159 gas format.
     */
    maxFeePerGas: string | null;
    /**
     * Post eip-1159 gas format.
     */
    maxPriorityFeePerGas: string | null;
};

/** @internal */
export const GasPriceInfo$inboundSchema: z.ZodType<GasPriceInfo, z.ZodTypeDef, unknown> = z.object({
    gasPrice: z.nullable(z.string()),
    maxFeePerGas: z.nullable(z.string()),
    maxPriorityFeePerGas: z.nullable(z.string()),
});

/** @internal */
export type GasPriceInfo$Outbound = {
    gasPrice: string | null;
    maxFeePerGas: string | null;
    maxPriorityFeePerGas: string | null;
};

/** @internal */
export const GasPriceInfo$outboundSchema: z.ZodType<
    GasPriceInfo$Outbound,
    z.ZodTypeDef,
    GasPriceInfo
> = z.object({
    gasPrice: z.nullable(z.string()),
    maxFeePerGas: z.nullable(z.string()),
    maxPriorityFeePerGas: z.nullable(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GasPriceInfo$ {
    /** @deprecated use `GasPriceInfo$inboundSchema` instead. */
    export const inboundSchema = GasPriceInfo$inboundSchema;
    /** @deprecated use `GasPriceInfo$outboundSchema` instead. */
    export const outboundSchema = GasPriceInfo$outboundSchema;
    /** @deprecated use `GasPriceInfo$Outbound` instead. */
    export type Outbound = GasPriceInfo$Outbound;
}
