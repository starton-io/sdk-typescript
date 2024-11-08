/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type CreatePinDtoMetadata = {};

export type CreatePinDto = {
  cid: string;
  metadata?: CreatePinDtoMetadata | undefined;
  name?: string | undefined;
};

/** @internal */
export const CreatePinDtoMetadata$inboundSchema: z.ZodType<
  CreatePinDtoMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CreatePinDtoMetadata$Outbound = {};

/** @internal */
export const CreatePinDtoMetadata$outboundSchema: z.ZodType<
  CreatePinDtoMetadata$Outbound,
  z.ZodTypeDef,
  CreatePinDtoMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatePinDtoMetadata$ {
  /** @deprecated use `CreatePinDtoMetadata$inboundSchema` instead. */
  export const inboundSchema = CreatePinDtoMetadata$inboundSchema;
  /** @deprecated use `CreatePinDtoMetadata$outboundSchema` instead. */
  export const outboundSchema = CreatePinDtoMetadata$outboundSchema;
  /** @deprecated use `CreatePinDtoMetadata$Outbound` instead. */
  export type Outbound = CreatePinDtoMetadata$Outbound;
}

/** @internal */
export const CreatePinDto$inboundSchema: z.ZodType<
  CreatePinDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  cid: z.string(),
  metadata: z.lazy(() => CreatePinDtoMetadata$inboundSchema).optional(),
  name: z.string().optional(),
});

/** @internal */
export type CreatePinDto$Outbound = {
  cid: string;
  metadata?: CreatePinDtoMetadata$Outbound | undefined;
  name?: string | undefined;
};

/** @internal */
export const CreatePinDto$outboundSchema: z.ZodType<
  CreatePinDto$Outbound,
  z.ZodTypeDef,
  CreatePinDto
> = z.object({
  cid: z.string(),
  metadata: z.lazy(() => CreatePinDtoMetadata$outboundSchema).optional(),
  name: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatePinDto$ {
  /** @deprecated use `CreatePinDto$inboundSchema` instead. */
  export const inboundSchema = CreatePinDto$inboundSchema;
  /** @deprecated use `CreatePinDto$outboundSchema` instead. */
  export const outboundSchema = CreatePinDto$outboundSchema;
  /** @deprecated use `CreatePinDto$Outbound` instead. */
  export type Outbound = CreatePinDto$Outbound;
}
