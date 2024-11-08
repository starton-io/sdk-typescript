/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ImportProviderKeyDtoMetadata = {};

export enum ImportProviderKeyDtoProvider {
  Aws = "AWS",
  Vault = "Vault",
}

export type ImportProviderKeyDto = {
  description?: string | undefined;
  metadata?: ImportProviderKeyDtoMetadata | undefined;
  name?: string | undefined;
  provider: ImportProviderKeyDtoProvider;
  providerKeyId?: string | undefined;
};

/** @internal */
export const ImportProviderKeyDtoMetadata$inboundSchema: z.ZodType<
  ImportProviderKeyDtoMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ImportProviderKeyDtoMetadata$Outbound = {};

/** @internal */
export const ImportProviderKeyDtoMetadata$outboundSchema: z.ZodType<
  ImportProviderKeyDtoMetadata$Outbound,
  z.ZodTypeDef,
  ImportProviderKeyDtoMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ImportProviderKeyDtoMetadata$ {
  /** @deprecated use `ImportProviderKeyDtoMetadata$inboundSchema` instead. */
  export const inboundSchema = ImportProviderKeyDtoMetadata$inboundSchema;
  /** @deprecated use `ImportProviderKeyDtoMetadata$outboundSchema` instead. */
  export const outboundSchema = ImportProviderKeyDtoMetadata$outboundSchema;
  /** @deprecated use `ImportProviderKeyDtoMetadata$Outbound` instead. */
  export type Outbound = ImportProviderKeyDtoMetadata$Outbound;
}

/** @internal */
export const ImportProviderKeyDtoProvider$inboundSchema: z.ZodNativeEnum<
  typeof ImportProviderKeyDtoProvider
> = z.nativeEnum(ImportProviderKeyDtoProvider);

/** @internal */
export const ImportProviderKeyDtoProvider$outboundSchema: z.ZodNativeEnum<
  typeof ImportProviderKeyDtoProvider
> = ImportProviderKeyDtoProvider$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ImportProviderKeyDtoProvider$ {
  /** @deprecated use `ImportProviderKeyDtoProvider$inboundSchema` instead. */
  export const inboundSchema = ImportProviderKeyDtoProvider$inboundSchema;
  /** @deprecated use `ImportProviderKeyDtoProvider$outboundSchema` instead. */
  export const outboundSchema = ImportProviderKeyDtoProvider$outboundSchema;
}

/** @internal */
export const ImportProviderKeyDto$inboundSchema: z.ZodType<
  ImportProviderKeyDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.string().optional(),
  metadata: z.lazy(() => ImportProviderKeyDtoMetadata$inboundSchema).optional(),
  name: z.string().optional(),
  provider: ImportProviderKeyDtoProvider$inboundSchema,
  providerKeyId: z.string().optional(),
});

/** @internal */
export type ImportProviderKeyDto$Outbound = {
  description?: string | undefined;
  metadata?: ImportProviderKeyDtoMetadata$Outbound | undefined;
  name?: string | undefined;
  provider: string;
  providerKeyId?: string | undefined;
};

/** @internal */
export const ImportProviderKeyDto$outboundSchema: z.ZodType<
  ImportProviderKeyDto$Outbound,
  z.ZodTypeDef,
  ImportProviderKeyDto
> = z.object({
  description: z.string().optional(),
  metadata: z.lazy(() => ImportProviderKeyDtoMetadata$outboundSchema)
    .optional(),
  name: z.string().optional(),
  provider: ImportProviderKeyDtoProvider$outboundSchema,
  providerKeyId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ImportProviderKeyDto$ {
  /** @deprecated use `ImportProviderKeyDto$inboundSchema` instead. */
  export const inboundSchema = ImportProviderKeyDto$inboundSchema;
  /** @deprecated use `ImportProviderKeyDto$outboundSchema` instead. */
  export const outboundSchema = ImportProviderKeyDto$outboundSchema;
  /** @deprecated use `ImportProviderKeyDto$Outbound` instead. */
  export type Outbound = ImportProviderKeyDto$Outbound;
}
