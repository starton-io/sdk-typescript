/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

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
    export type Inbound = {};

    export const inboundSchema: z.ZodType<KmsCredentials, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, KmsCredentials> = z.object({});
}

/** @internal */
export namespace KmsMetadata$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<KmsMetadata, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, KmsMetadata> = z.object({});
}

/** @internal */
export const KmsProvider$ = z.nativeEnum(KmsProvider);

/** @internal */
export namespace Wallets$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<Wallets, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Wallets> = z.object({});
}

/** @internal */
export namespace Kms$ {
    export type Inbound = {
        createdAt?: string | undefined;
        credentials: KmsCredentials$.Inbound;
        id: string;
        metadata?: KmsMetadata$.Inbound | undefined;
        name: string;
        projectId: string;
        provider: KmsProvider;
        updatedAt?: string | undefined;
        wallets?: Wallets$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<Kms, z.ZodTypeDef, Inbound> = z
        .object({
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
            provider: KmsProvider$,
            updatedAt: z
                .string()
                .datetime({ offset: true })
                .default("2024-01-31T13:57:38.167Z")
                .transform((v) => new Date(v)),
            wallets: z.lazy(() => Wallets$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                credentials: v.credentials,
                id: v.id,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                name: v.name,
                projectId: v.projectId,
                provider: v.provider,
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.wallets === undefined ? null : { wallets: v.wallets }),
            };
        });

    export type Outbound = {
        createdAt: string;
        credentials: KmsCredentials$.Outbound;
        id: string;
        metadata?: KmsMetadata$.Outbound | undefined;
        name: string;
        projectId: string;
        provider: KmsProvider;
        updatedAt: string;
        wallets?: Wallets$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Kms> = z
        .object({
            createdAt: z
                .date()
                .default(() => new Date("2024-01-31T13:57:38.167Z"))
                .transform((v) => v.toISOString()),
            credentials: z.lazy(() => KmsCredentials$.outboundSchema),
            id: z.string(),
            metadata: z.lazy(() => KmsMetadata$.outboundSchema).optional(),
            name: z.string(),
            projectId: z.string(),
            provider: KmsProvider$,
            updatedAt: z
                .date()
                .default(() => new Date("2024-01-31T13:57:38.167Z"))
                .transform((v) => v.toISOString()),
            wallets: z.lazy(() => Wallets$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                credentials: v.credentials,
                id: v.id,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                name: v.name,
                projectId: v.projectId,
                provider: v.provider,
                updatedAt: v.updatedAt,
                ...(v.wallets === undefined ? null : { wallets: v.wallets }),
            };
        });
}
