/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type WalletMetadata = {};

export type Wallet = {
    address: string;
    createdAt?: Date | undefined;
    description?: string | null | undefined;
    kmsId: string;
    metadata?: WalletMetadata | undefined;
    name?: string | null | undefined;
    projectId: string;
    providerKeyId: string;
    updatedAt?: Date | undefined;
};

/** @internal */
export namespace WalletMetadata$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<WalletMetadata, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WalletMetadata> = z.object({});
}

/** @internal */
export namespace Wallet$ {
    export type Inbound = {
        address: string;
        createdAt?: string | undefined;
        description?: string | null | undefined;
        kmsId: string;
        metadata?: WalletMetadata$.Inbound | undefined;
        name?: string | null | undefined;
        projectId: string;
        providerKeyId: string;
        updatedAt?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Wallet, z.ZodTypeDef, Inbound> = z
        .object({
            address: z.string(),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .default("2023-10-26T19:08:35.302Z")
                .transform((v) => new Date(v)),
            description: z.nullable(z.string()).optional(),
            kmsId: z.string(),
            metadata: z.lazy(() => WalletMetadata$.inboundSchema).optional(),
            name: z.nullable(z.string()).optional(),
            projectId: z.string(),
            providerKeyId: z.string(),
            updatedAt: z
                .string()
                .datetime({ offset: true })
                .default("2023-10-26T19:08:35.302Z")
                .transform((v) => new Date(v)),
        })
        .transform((v) => {
            return {
                address: v.address,
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.description === undefined ? null : { description: v.description }),
                kmsId: v.kmsId,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.name === undefined ? null : { name: v.name }),
                projectId: v.projectId,
                providerKeyId: v.providerKeyId,
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
            };
        });

    export type Outbound = {
        address: string;
        createdAt: string;
        description?: string | null | undefined;
        kmsId: string;
        metadata?: WalletMetadata$.Outbound | undefined;
        name?: string | null | undefined;
        projectId: string;
        providerKeyId: string;
        updatedAt: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Wallet> = z
        .object({
            address: z.string(),
            createdAt: z
                .date()
                .default(() => new Date("2023-10-26T19:08:35.302Z"))
                .transform((v) => v.toISOString()),
            description: z.nullable(z.string()).optional(),
            kmsId: z.string(),
            metadata: z.lazy(() => WalletMetadata$.outboundSchema).optional(),
            name: z.nullable(z.string()).optional(),
            projectId: z.string(),
            providerKeyId: z.string(),
            updatedAt: z
                .date()
                .default(() => new Date("2023-10-26T19:08:35.302Z"))
                .transform((v) => v.toISOString()),
        })
        .transform((v) => {
            return {
                address: v.address,
                createdAt: v.createdAt,
                ...(v.description === undefined ? null : { description: v.description }),
                kmsId: v.kmsId,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.name === undefined ? null : { name: v.name }),
                projectId: v.projectId,
                providerKeyId: v.providerKeyId,
                updatedAt: v.updatedAt,
            };
        });
}
