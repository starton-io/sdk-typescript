/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type UpdatePinDtoMetadata = {};

export type UpdatePinDto = {
    metadata?: UpdatePinDtoMetadata | undefined;
    name?: string | undefined;
};

/** @internal */
export const UpdatePinDtoMetadata$inboundSchema: z.ZodType<
    UpdatePinDtoMetadata,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UpdatePinDtoMetadata$Outbound = {};

/** @internal */
export const UpdatePinDtoMetadata$outboundSchema: z.ZodType<
    UpdatePinDtoMetadata$Outbound,
    z.ZodTypeDef,
    UpdatePinDtoMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatePinDtoMetadata$ {
    /** @deprecated use `UpdatePinDtoMetadata$inboundSchema` instead. */
    export const inboundSchema = UpdatePinDtoMetadata$inboundSchema;
    /** @deprecated use `UpdatePinDtoMetadata$outboundSchema` instead. */
    export const outboundSchema = UpdatePinDtoMetadata$outboundSchema;
    /** @deprecated use `UpdatePinDtoMetadata$Outbound` instead. */
    export type Outbound = UpdatePinDtoMetadata$Outbound;
}

/** @internal */
export const UpdatePinDto$inboundSchema: z.ZodType<UpdatePinDto, z.ZodTypeDef, unknown> = z.object({
    metadata: z.lazy(() => UpdatePinDtoMetadata$inboundSchema).optional(),
    name: z.string().optional(),
});

/** @internal */
export type UpdatePinDto$Outbound = {
    metadata?: UpdatePinDtoMetadata$Outbound | undefined;
    name?: string | undefined;
};

/** @internal */
export const UpdatePinDto$outboundSchema: z.ZodType<
    UpdatePinDto$Outbound,
    z.ZodTypeDef,
    UpdatePinDto
> = z.object({
    metadata: z.lazy(() => UpdatePinDtoMetadata$outboundSchema).optional(),
    name: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatePinDto$ {
    /** @deprecated use `UpdatePinDto$inboundSchema` instead. */
    export const inboundSchema = UpdatePinDto$inboundSchema;
    /** @deprecated use `UpdatePinDto$outboundSchema` instead. */
    export const outboundSchema = UpdatePinDto$outboundSchema;
    /** @deprecated use `UpdatePinDto$Outbound` instead. */
    export type Outbound = UpdatePinDto$Outbound;
}
