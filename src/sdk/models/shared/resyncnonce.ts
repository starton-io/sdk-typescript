/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ResyncNonce = {
    nextNonce: number;
};

/** @internal */
export const ResyncNonce$inboundSchema: z.ZodType<ResyncNonce, z.ZodTypeDef, unknown> = z.object({
    nextNonce: z.number(),
});

/** @internal */
export type ResyncNonce$Outbound = {
    nextNonce: number;
};

/** @internal */
export const ResyncNonce$outboundSchema: z.ZodType<
    ResyncNonce$Outbound,
    z.ZodTypeDef,
    ResyncNonce
> = z.object({
    nextNonce: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResyncNonce$ {
    /** @deprecated use `ResyncNonce$inboundSchema` instead. */
    export const inboundSchema = ResyncNonce$inboundSchema;
    /** @deprecated use `ResyncNonce$outboundSchema` instead. */
    export const outboundSchema = ResyncNonce$outboundSchema;
    /** @deprecated use `ResyncNonce$Outbound` instead. */
    export type Outbound = ResyncNonce$Outbound;
}
