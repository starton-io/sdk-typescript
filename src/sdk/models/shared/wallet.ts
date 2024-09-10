/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type WalletMetadata = {};

export type Wallet = {
  address: string;
  createdAt?: Date | undefined;
  description?: string | null | undefined;
  kmsId: string;
  metadata?: WalletMetadata | null | undefined;
  name?: string | null | undefined;
  projectId: string;
  providerKeyId: string;
  updatedAt?: Date | undefined;
};

/** @internal */
export const WalletMetadata$inboundSchema: z.ZodType<
  WalletMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type WalletMetadata$Outbound = {};

/** @internal */
export const WalletMetadata$outboundSchema: z.ZodType<
  WalletMetadata$Outbound,
  z.ZodTypeDef,
  WalletMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WalletMetadata$ {
  /** @deprecated use `WalletMetadata$inboundSchema` instead. */
  export const inboundSchema = WalletMetadata$inboundSchema;
  /** @deprecated use `WalletMetadata$outboundSchema` instead. */
  export const outboundSchema = WalletMetadata$outboundSchema;
  /** @deprecated use `WalletMetadata$Outbound` instead. */
  export type Outbound = WalletMetadata$Outbound;
}

/** @internal */
export const Wallet$inboundSchema: z.ZodType<Wallet, z.ZodTypeDef, unknown> = z
  .object({
    address: z.string(),
    createdAt: z.string().datetime({ offset: true }).default(
      "2024-05-02T09:34:19.272Z",
    ).transform(v => new Date(v)),
    description: z.nullable(z.string()).optional(),
    kmsId: z.string(),
    metadata: z.nullable(z.lazy(() => WalletMetadata$inboundSchema)).optional(),
    name: z.nullable(z.string()).optional(),
    projectId: z.string(),
    providerKeyId: z.string(),
    updatedAt: z.string().datetime({ offset: true }).default(
      "2024-05-02T09:34:19.272Z",
    ).transform(v => new Date(v)),
  });

/** @internal */
export type Wallet$Outbound = {
  address: string;
  createdAt: string;
  description?: string | null | undefined;
  kmsId: string;
  metadata?: WalletMetadata$Outbound | null | undefined;
  name?: string | null | undefined;
  projectId: string;
  providerKeyId: string;
  updatedAt: string;
};

/** @internal */
export const Wallet$outboundSchema: z.ZodType<
  Wallet$Outbound,
  z.ZodTypeDef,
  Wallet
> = z.object({
  address: z.string(),
  createdAt: z.date().default(() => new Date("2024-05-02T09:34:19.272Z"))
    .transform(v => v.toISOString()),
  description: z.nullable(z.string()).optional(),
  kmsId: z.string(),
  metadata: z.nullable(z.lazy(() => WalletMetadata$outboundSchema)).optional(),
  name: z.nullable(z.string()).optional(),
  projectId: z.string(),
  providerKeyId: z.string(),
  updatedAt: z.date().default(() => new Date("2024-05-02T09:34:19.272Z"))
    .transform(v => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Wallet$ {
  /** @deprecated use `Wallet$inboundSchema` instead. */
  export const inboundSchema = Wallet$inboundSchema;
  /** @deprecated use `Wallet$outboundSchema` instead. */
  export const outboundSchema = Wallet$outboundSchema;
  /** @deprecated use `Wallet$Outbound` instead. */
  export type Outbound = Wallet$Outbound;
}
