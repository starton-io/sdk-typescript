/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type AbiOutputDtoComponents = {};

export type AbiOutputDto = {
    components?: AbiOutputDtoComponents | undefined;
    internalType?: string | undefined;
    name: string;
    type: string;
};

/** @internal */
export const AbiOutputDtoComponents$inboundSchema: z.ZodType<
    AbiOutputDtoComponents,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type AbiOutputDtoComponents$Outbound = {};

/** @internal */
export const AbiOutputDtoComponents$outboundSchema: z.ZodType<
    AbiOutputDtoComponents$Outbound,
    z.ZodTypeDef,
    AbiOutputDtoComponents
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AbiOutputDtoComponents$ {
    /** @deprecated use `AbiOutputDtoComponents$inboundSchema` instead. */
    export const inboundSchema = AbiOutputDtoComponents$inboundSchema;
    /** @deprecated use `AbiOutputDtoComponents$outboundSchema` instead. */
    export const outboundSchema = AbiOutputDtoComponents$outboundSchema;
    /** @deprecated use `AbiOutputDtoComponents$Outbound` instead. */
    export type Outbound = AbiOutputDtoComponents$Outbound;
}

/** @internal */
export const AbiOutputDto$inboundSchema: z.ZodType<AbiOutputDto, z.ZodTypeDef, unknown> = z.object({
    components: z.lazy(() => AbiOutputDtoComponents$inboundSchema).optional(),
    internalType: z.string().optional(),
    name: z.string(),
    type: z.string(),
});

/** @internal */
export type AbiOutputDto$Outbound = {
    components?: AbiOutputDtoComponents$Outbound | undefined;
    internalType?: string | undefined;
    name: string;
    type: string;
};

/** @internal */
export const AbiOutputDto$outboundSchema: z.ZodType<
    AbiOutputDto$Outbound,
    z.ZodTypeDef,
    AbiOutputDto
> = z.object({
    components: z.lazy(() => AbiOutputDtoComponents$outboundSchema).optional(),
    internalType: z.string().optional(),
    name: z.string(),
    type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AbiOutputDto$ {
    /** @deprecated use `AbiOutputDto$inboundSchema` instead. */
    export const inboundSchema = AbiOutputDto$inboundSchema;
    /** @deprecated use `AbiOutputDto$outboundSchema` instead. */
    export const outboundSchema = AbiOutputDto$outboundSchema;
    /** @deprecated use `AbiOutputDto$Outbound` instead. */
    export type Outbound = AbiOutputDto$Outbound;
}
