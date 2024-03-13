/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
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
export namespace ImportProviderKeyDtoMetadata$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<ImportProviderKeyDtoMetadata, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ImportProviderKeyDtoMetadata> =
        z.object({});
}

/** @internal */
export const ImportProviderKeyDtoProvider$ = z.nativeEnum(ImportProviderKeyDtoProvider);

/** @internal */
export namespace ImportProviderKeyDto$ {
    export type Inbound = {
        description?: string | undefined;
        metadata?: ImportProviderKeyDtoMetadata$.Inbound | undefined;
        name?: string | undefined;
        provider: ImportProviderKeyDtoProvider;
        providerKeyId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ImportProviderKeyDto, z.ZodTypeDef, Inbound> = z
        .object({
            description: z.string().optional(),
            metadata: z.lazy(() => ImportProviderKeyDtoMetadata$.inboundSchema).optional(),
            name: z.string().optional(),
            provider: ImportProviderKeyDtoProvider$,
            providerKeyId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.name === undefined ? null : { name: v.name }),
                provider: v.provider,
                ...(v.providerKeyId === undefined ? null : { providerKeyId: v.providerKeyId }),
            };
        });

    export type Outbound = {
        description?: string | undefined;
        metadata?: ImportProviderKeyDtoMetadata$.Outbound | undefined;
        name?: string | undefined;
        provider: ImportProviderKeyDtoProvider;
        providerKeyId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ImportProviderKeyDto> = z
        .object({
            description: z.string().optional(),
            metadata: z.lazy(() => ImportProviderKeyDtoMetadata$.outboundSchema).optional(),
            name: z.string().optional(),
            provider: ImportProviderKeyDtoProvider$,
            providerKeyId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.name === undefined ? null : { name: v.name }),
                provider: v.provider,
                ...(v.providerKeyId === undefined ? null : { providerKeyId: v.providerKeyId }),
            };
        });
}
