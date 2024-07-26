/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as z from "zod";

export type NoncesAvailable = {
    availableNonces: Array<number>;
    nextNonce: number;
};

/** @internal */
export const NoncesAvailable$inboundSchema: z.ZodType<NoncesAvailable, z.ZodTypeDef, unknown> =
    z.object({
        availableNonces: z.array(z.number()),
        nextNonce: z.number(),
    });

/** @internal */
export type NoncesAvailable$Outbound = {
    availableNonces: Array<number>;
    nextNonce: number;
};

/** @internal */
export const NoncesAvailable$outboundSchema: z.ZodType<
    NoncesAvailable$Outbound,
    z.ZodTypeDef,
    NoncesAvailable
> = z.object({
    availableNonces: z.array(z.number()),
    nextNonce: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NoncesAvailable$ {
    /** @deprecated use `NoncesAvailable$inboundSchema` instead. */
    export const inboundSchema = NoncesAvailable$inboundSchema;
    /** @deprecated use `NoncesAvailable$outboundSchema` instead. */
    export const outboundSchema = NoncesAvailable$outboundSchema;
    /** @deprecated use `NoncesAvailable$Outbound` instead. */
    export type Outbound = NoncesAvailable$Outbound;
}
