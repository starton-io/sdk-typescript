/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type KmsCredentials = {};

export type KmsMetadata = {};

export enum KmsProvider {
  Aws = "AWS",
  Vault = "Vault",
}

export type Wallets = {};

export type Kms = {
  createdAt?: Date | undefined;
  credentials: KmsCredentials;
  id: string;
  metadata?: KmsMetadata | undefined;
  name: string;
  projectId: string;
  provider: KmsProvider;
  updatedAt?: Date | undefined;
  wallets?: Wallets | undefined;
};

/** @internal */
export const KmsCredentials$inboundSchema: z.ZodType<
  KmsCredentials,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type KmsCredentials$Outbound = {};

/** @internal */
export const KmsCredentials$outboundSchema: z.ZodType<
  KmsCredentials$Outbound,
  z.ZodTypeDef,
  KmsCredentials
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace KmsCredentials$ {
  /** @deprecated use `KmsCredentials$inboundSchema` instead. */
  export const inboundSchema = KmsCredentials$inboundSchema;
  /** @deprecated use `KmsCredentials$outboundSchema` instead. */
  export const outboundSchema = KmsCredentials$outboundSchema;
  /** @deprecated use `KmsCredentials$Outbound` instead. */
  export type Outbound = KmsCredentials$Outbound;
}

/** @internal */
export const KmsMetadata$inboundSchema: z.ZodType<
  KmsMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type KmsMetadata$Outbound = {};

/** @internal */
export const KmsMetadata$outboundSchema: z.ZodType<
  KmsMetadata$Outbound,
  z.ZodTypeDef,
  KmsMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace KmsMetadata$ {
  /** @deprecated use `KmsMetadata$inboundSchema` instead. */
  export const inboundSchema = KmsMetadata$inboundSchema;
  /** @deprecated use `KmsMetadata$outboundSchema` instead. */
  export const outboundSchema = KmsMetadata$outboundSchema;
  /** @deprecated use `KmsMetadata$Outbound` instead. */
  export type Outbound = KmsMetadata$Outbound;
}

/** @internal */
export const KmsProvider$inboundSchema: z.ZodNativeEnum<typeof KmsProvider> = z
  .nativeEnum(KmsProvider);

/** @internal */
export const KmsProvider$outboundSchema: z.ZodNativeEnum<typeof KmsProvider> =
  KmsProvider$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace KmsProvider$ {
  /** @deprecated use `KmsProvider$inboundSchema` instead. */
  export const inboundSchema = KmsProvider$inboundSchema;
  /** @deprecated use `KmsProvider$outboundSchema` instead. */
  export const outboundSchema = KmsProvider$outboundSchema;
}

/** @internal */
export const Wallets$inboundSchema: z.ZodType<Wallets, z.ZodTypeDef, unknown> =
  z.object({});

/** @internal */
export type Wallets$Outbound = {};

/** @internal */
export const Wallets$outboundSchema: z.ZodType<
  Wallets$Outbound,
  z.ZodTypeDef,
  Wallets
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Wallets$ {
  /** @deprecated use `Wallets$inboundSchema` instead. */
  export const inboundSchema = Wallets$inboundSchema;
  /** @deprecated use `Wallets$outboundSchema` instead. */
  export const outboundSchema = Wallets$outboundSchema;
  /** @deprecated use `Wallets$Outbound` instead. */
  export type Outbound = Wallets$Outbound;
}

/** @internal */
export const Kms$inboundSchema: z.ZodType<Kms, z.ZodTypeDef, unknown> = z
  .object({
    createdAt: z.string().datetime({ offset: true }).default(
      "2024-10-07T18:00:44.886Z",
    ).transform(v => new Date(v)),
    credentials: z.lazy(() => KmsCredentials$inboundSchema),
    id: z.string(),
    metadata: z.lazy(() => KmsMetadata$inboundSchema).optional(),
    name: z.string(),
    projectId: z.string(),
    provider: KmsProvider$inboundSchema,
    updatedAt: z.string().datetime({ offset: true }).default(
      "2024-10-07T18:00:44.886Z",
    ).transform(v => new Date(v)),
    wallets: z.lazy(() => Wallets$inboundSchema).optional(),
  });

/** @internal */
export type Kms$Outbound = {
  createdAt: string;
  credentials: KmsCredentials$Outbound;
  id: string;
  metadata?: KmsMetadata$Outbound | undefined;
  name: string;
  projectId: string;
  provider: string;
  updatedAt: string;
  wallets?: Wallets$Outbound | undefined;
};

/** @internal */
export const Kms$outboundSchema: z.ZodType<Kms$Outbound, z.ZodTypeDef, Kms> = z
  .object({
    createdAt: z.date().default(() => new Date("2024-10-07T18:00:44.886Z"))
      .transform(v => v.toISOString()),
    credentials: z.lazy(() => KmsCredentials$outboundSchema),
    id: z.string(),
    metadata: z.lazy(() => KmsMetadata$outboundSchema).optional(),
    name: z.string(),
    projectId: z.string(),
    provider: KmsProvider$outboundSchema,
    updatedAt: z.date().default(() => new Date("2024-10-07T18:00:44.886Z"))
      .transform(v => v.toISOString()),
    wallets: z.lazy(() => Wallets$outboundSchema).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Kms$ {
  /** @deprecated use `Kms$inboundSchema` instead. */
  export const inboundSchema = Kms$inboundSchema;
  /** @deprecated use `Kms$outboundSchema` instead. */
  export const outboundSchema = Kms$outboundSchema;
  /** @deprecated use `Kms$Outbound` instead. */
  export type Outbound = Kms$Outbound;
}
