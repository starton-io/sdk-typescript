/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type UpdateSmartContractDtoMetadata = {};

export type UpdateSmartContractDto = {
    description?: string | undefined;
    metadata?: UpdateSmartContractDtoMetadata | undefined;
    name?: string | undefined;
};

/** @internal */
export const UpdateSmartContractDtoMetadata$inboundSchema: z.ZodType<
    UpdateSmartContractDtoMetadata,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UpdateSmartContractDtoMetadata$Outbound = {};

/** @internal */
export const UpdateSmartContractDtoMetadata$outboundSchema: z.ZodType<
    UpdateSmartContractDtoMetadata$Outbound,
    z.ZodTypeDef,
    UpdateSmartContractDtoMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateSmartContractDtoMetadata$ {
    /** @deprecated use `UpdateSmartContractDtoMetadata$inboundSchema` instead. */
    export const inboundSchema = UpdateSmartContractDtoMetadata$inboundSchema;
    /** @deprecated use `UpdateSmartContractDtoMetadata$outboundSchema` instead. */
    export const outboundSchema = UpdateSmartContractDtoMetadata$outboundSchema;
    /** @deprecated use `UpdateSmartContractDtoMetadata$Outbound` instead. */
    export type Outbound = UpdateSmartContractDtoMetadata$Outbound;
}

/** @internal */
export const UpdateSmartContractDto$inboundSchema: z.ZodType<
    UpdateSmartContractDto,
    z.ZodTypeDef,
    unknown
> = z.object({
    description: z.string().optional(),
    metadata: z.lazy(() => UpdateSmartContractDtoMetadata$inboundSchema).optional(),
    name: z.string().optional(),
});

/** @internal */
export type UpdateSmartContractDto$Outbound = {
    description?: string | undefined;
    metadata?: UpdateSmartContractDtoMetadata$Outbound | undefined;
    name?: string | undefined;
};

/** @internal */
export const UpdateSmartContractDto$outboundSchema: z.ZodType<
    UpdateSmartContractDto$Outbound,
    z.ZodTypeDef,
    UpdateSmartContractDto
> = z.object({
    description: z.string().optional(),
    metadata: z.lazy(() => UpdateSmartContractDtoMetadata$outboundSchema).optional(),
    name: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateSmartContractDto$ {
    /** @deprecated use `UpdateSmartContractDto$inboundSchema` instead. */
    export const inboundSchema = UpdateSmartContractDto$inboundSchema;
    /** @deprecated use `UpdateSmartContractDto$outboundSchema` instead. */
    export const outboundSchema = UpdateSmartContractDto$outboundSchema;
    /** @deprecated use `UpdateSmartContractDto$Outbound` instead. */
    export type Outbound = UpdateSmartContractDto$Outbound;
}
