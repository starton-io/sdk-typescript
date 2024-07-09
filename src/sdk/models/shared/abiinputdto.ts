/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Components = {};

export type AbiInputDto = {
    components?: Components | undefined;
    indexed?: boolean | undefined;
    internalType?: string | undefined;
    name: string;
    type: string;
};

/** @internal */
export const Components$inboundSchema: z.ZodType<Components, z.ZodTypeDef, unknown> = z.object({});

/** @internal */
export type Components$Outbound = {};

/** @internal */
export const Components$outboundSchema: z.ZodType<Components$Outbound, z.ZodTypeDef, Components> =
    z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Components$ {
    /** @deprecated use `Components$inboundSchema` instead. */
    export const inboundSchema = Components$inboundSchema;
    /** @deprecated use `Components$outboundSchema` instead. */
    export const outboundSchema = Components$outboundSchema;
    /** @deprecated use `Components$Outbound` instead. */
    export type Outbound = Components$Outbound;
}

/** @internal */
export const AbiInputDto$inboundSchema: z.ZodType<AbiInputDto, z.ZodTypeDef, unknown> = z.object({
    components: z.lazy(() => Components$inboundSchema).optional(),
    indexed: z.boolean().optional(),
    internalType: z.string().optional(),
    name: z.string(),
    type: z.string(),
});

/** @internal */
export type AbiInputDto$Outbound = {
    components?: Components$Outbound | undefined;
    indexed?: boolean | undefined;
    internalType?: string | undefined;
    name: string;
    type: string;
};

/** @internal */
export const AbiInputDto$outboundSchema: z.ZodType<
    AbiInputDto$Outbound,
    z.ZodTypeDef,
    AbiInputDto
> = z.object({
    components: z.lazy(() => Components$outboundSchema).optional(),
    indexed: z.boolean().optional(),
    internalType: z.string().optional(),
    name: z.string(),
    type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AbiInputDto$ {
    /** @deprecated use `AbiInputDto$inboundSchema` instead. */
    export const inboundSchema = AbiInputDto$inboundSchema;
    /** @deprecated use `AbiInputDto$outboundSchema` instead. */
    export const outboundSchema = AbiInputDto$outboundSchema;
    /** @deprecated use `AbiInputDto$Outbound` instead. */
    export type Outbound = AbiInputDto$Outbound;
}
