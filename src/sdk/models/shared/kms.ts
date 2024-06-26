/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
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
export namespace KmsCredentials$ {
    export const inboundSchema: z.ZodType<KmsCredentials, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, KmsCredentials> = z.object({});
}

/** @internal */
export namespace KmsMetadata$ {
    export const inboundSchema: z.ZodType<KmsMetadata, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, KmsMetadata> = z.object({});
}

/** @internal */
export namespace KmsProvider$ {
    export const inboundSchema: z.ZodNativeEnum<typeof KmsProvider> = z.nativeEnum(KmsProvider);
    export const outboundSchema: z.ZodNativeEnum<typeof KmsProvider> = inboundSchema;
}

/** @internal */
export namespace Wallets$ {
    export const inboundSchema: z.ZodType<Wallets, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Wallets> = z.object({});
}

/** @internal */
export namespace Kms$ {
    export const inboundSchema: z.ZodType<Kms, z.ZodTypeDef, unknown> = z.object({
        createdAt: z
            .string()
            .datetime({ offset: true })
            .default("2024-01-31T13:57:38.167Z")
            .transform((v) => new Date(v)),
        credentials: z.lazy(() => KmsCredentials$.inboundSchema),
        id: z.string(),
        metadata: z.lazy(() => KmsMetadata$.inboundSchema).optional(),
        name: z.string(),
        projectId: z.string(),
        provider: KmsProvider$.inboundSchema,
        updatedAt: z
            .string()
            .datetime({ offset: true })
            .default("2024-01-31T13:57:38.167Z")
            .transform((v) => new Date(v)),
        wallets: z.lazy(() => Wallets$.inboundSchema).optional(),
    });

    export type Outbound = {
        createdAt: string;
        credentials: KmsCredentials$.Outbound;
        id: string;
        metadata?: KmsMetadata$.Outbound | undefined;
        name: string;
        projectId: string;
        provider: string;
        updatedAt: string;
        wallets?: Wallets$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Kms> = z.object({
        createdAt: z
            .date()
            .default(() => new Date("2024-01-31T13:57:38.167Z"))
            .transform((v) => v.toISOString()),
        credentials: z.lazy(() => KmsCredentials$.outboundSchema),
        id: z.string(),
        metadata: z.lazy(() => KmsMetadata$.outboundSchema).optional(),
        name: z.string(),
        projectId: z.string(),
        provider: KmsProvider$.outboundSchema,
        updatedAt: z
            .date()
            .default(() => new Date("2024-01-31T13:57:38.167Z"))
            .transform((v) => v.toISOString()),
        wallets: z.lazy(() => Wallets$.outboundSchema).optional(),
    });
}
